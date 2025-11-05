import {React,useState} from 'react'
import './AddTaskButton.css';

function AddTaskButton({onAddTask}) {
  const [newTask,setNewTask]=useState(""); // do not intialise the state using a whitespace =>" " it is not a ideal practice
  
  return (
    <div id="addTaskBtn">
      <label htmlFor="newTask" id='addlabel'><u><b>Add New Task</b></u></label>
      <input id="newTask" 
      value={newTask} 
      placeholder="Ex.- Complete React"  
      onChange={e=>
      {
         setNewTask(e.target.value);
      }}
      onKeyDown={(e)=>{
          if(e.key==="Enter")
          {
          if(newTask.trim()!=="")
          {
          onAddTask(newTask);
          }
          setNewTask("")
          }
          
      }}
      />
      <button id="addbtn" onClick={()=>{
        if(newTask.trim()==="")
        {
        setNewTask("");
        return;
        }
          onAddTask(newTask);
          setNewTask("");}}
      ><b>Add</b></button>
    </div>
  )
}

export default AddTaskButton
