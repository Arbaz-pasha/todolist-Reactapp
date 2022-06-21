import React, { useState } from "react";
import Newlist from "./Newlist";
import Plus from "./Plus";
import ToDoList from "./ToDoList";

const App=()=>{

  const [inputlist,setInputlist] = useState("");
  const [Items,setItems]=useState([]);


  
  const itemEvent=(event)=>{
      setInputlist(event.target.value);
  }


  const listofItems=()=>{
    setItems((oldItems) =>{
      return [...oldItems, inputlist];
    });
    setInputlist("");//to disappear at entry point
  }

  const deleteItems =(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
            return index !==id;
      })
    })
}


  return(
<section className="main">
  <div className="container">

    <div className="main-div">
      <br/>
      <h1> ToDo List </h1>
      <br/>

      <form>
      <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputlist} required/>
      <button onClick={listofItems}> + </button>
      </form>
     
      <br/>
      <ol>
        {/* <li> {inputlist} </li> */}
        {Items.map((itemval,index) => {
         return <ToDoList
          key={index} 
          id={index}
          text ={itemval}
            onSelect={deleteItems}
          />
        })}
      </ol>
    </div>
  </div>
  <Plus/>
  <Newlist/>
</section>
  );
}

export default App