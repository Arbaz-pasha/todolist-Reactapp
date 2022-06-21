import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Nlist from "./Nlist";
// import Nlist from "./Nlist";

const Newlist=(props)=>
{
const [item,setText]=useState("");

const[newitem,setNewItem]=useState([]);

const ListItems=()=>{
    setNewItem((preval)=>{
        return [...preval,item];
    })
    setText("");
   
}

const Add=(event)=>{
    setText(event.target.value);  
};

    return(
    <div className="container">

    <div className="main-div">
    <br/>
    <h1> ToDo List </h1>
    <br/>
    <input type="text" placeholder="Add a Item" onChange={Add} value={item} required/>
    <button onClick={ListItems}> <AddIcon/> </button>
   
    
    <br/>
    <ol>
   
   { newitem.map((val,index)=>{
        return <Nlist key={index} text={val}  />
    })
    }
    </ol>
    </div>
    </div>
    );
}

export default Newlist