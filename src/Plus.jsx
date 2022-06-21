import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Plus=()=>{

    const [count,setCount]=useState(0);

    const Inc=()=>{
        setCount(count+1);
    }

    const Dec=()=>{
        if(count<1)
        { 
            window.alert("Sorry Zero limit reatched");
        }else
        {setCount(count-1);}
        
    }

    return(
        <div className="container">
        <div className="main-div">
        <h1>{count}</h1>
            <button className="b1" onClick={Inc}><AddIcon/></button>
            <button className="b2" onClick={Dec}><RemoveIcon/></button>
        </div>

        </div>
    );
}

export default Plus