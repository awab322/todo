import React,{useState} from 'react'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';


const TodoList = (props) => {

    let[lineText , setLineText] = useState(false);

    function lineOnText()
    {
        lineText ? setLineText(false) : setLineText(true);
    }



    return (
        <>
        <li>
       
            <IconButton className="done" onClick={lineOnText} >
            <DoneIcon />
            </IconButton> 
                <span style={{ textDecoration: lineText?"line-through" : "none"  }}>
                {props.text}
                </span>
               
            <IconButton   className="delete" onClick={()=>{
                props.onSelect(props.id)
                }}>
                <DeleteIcon/>
            </IconButton>
       
        </li>
        </>
    )
}

export default TodoList;