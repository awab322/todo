import React,{useState} from 'react'
import './Todo.css'
import TodoList from "./TodoList";

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Todo = () => {

let[item,setItem]=useState("");
let[newItem,setNewItem]=useState([]);


    function itemEvent(aa) 
    {
          setItem(aa.target.value);
    }

    function items() 
    {
        setNewItem((oldData)=>
        {
            return [...oldData,item]
        })
        setItem("");
    }

    function deleteItems(ii) 
    {
        setNewItem((prevData)=>{
            return prevData.filter((val,index)=>{
                return index!=ii;
            })
        })
        
    }


    return (
        <>
        <div className="main_div">
         <div className="todo_box ">
           <h4 className="todo_heading_style">Todo App</h4>
           <input className="input_data" onChange={itemEvent} value={item} placeholder="Enter List Here Todo!"  />
           <Button className="add_btn"  variant="outlined" onClick={items} color="success" size="small"><AddIcon /> </Button>
         </div>
        </div>

        <div >
        
            <div className="item_div">
                <div className="todo_heading_style" style={{marginTop:"20px"}}>
                    <p>Items List</p>
                </div>
                <ul>
                    {   
                        newItem.map((val,index)=>{
                            return(
                                <TodoList key={index} id={index} text={val} onSelect={deleteItems}  />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Todo;