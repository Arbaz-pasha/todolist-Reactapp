import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Nlist=(props)=>{

    const[line,setLine]=useState(false)

const cutIt=()=>{
setLine(true);
}

    return(
        <div className="todo_style" >
        <span onClick={cutIt}>

        <button className="newbtn"><DeleteIcon className="delete"/></button></span>
            <li style={{textDecoration :line? 'line-through':'none'}}> {props.text}</li>
        </div>
    );
}


export default Nlist