import {React,useState} from 'react'
import Task from './Task'
import AddTaskButton from './AddTaskButton'
import './ToDoList.css';


function ToDoList() {
  const [taskList,setTaskList]=useState([]);
  

function handleAddTask(newtask)
    {
    const newTaskObj={
      taskContent:newtask,
      taskId:Date.now() + Math.random(),
      status:false //fasle=Not Completed  and true=Completed
    };
    setTaskList(prev=>[...prev,newTaskObj]);
    }

function handleDelete(taskToDltId)  
{
setTaskList(prev=>prev.filter(task=>task.taskId!==taskToDltId));
}

function handleStatusChange(taskToUpdateId)
{
setTaskList(prev=>prev.map(task=>task.taskId===taskToUpdateId ? {...task,status:!task.status} : task))
}

  const completedTasks=taskList.filter(task=>task.status===true);

  const nonCompletedTasks=taskList.filter(task=>task.status===false); 
 const renderTasks=task=>(<Task 
  task={task.taskContent} 
  key={"task"+task.taskId} 
  taskno={task.taskId} 
  taskStatus={task.status}  
  onDelete={()=>{handleDelete(task.taskId)}} onStatusChange={()=>{handleStatusChange(task.taskId)}}/> );
  const completedTasksList=completedTasks.map(renderTasks);

  const nonCompletedTasksList=nonCompletedTasks.map(renderTasks);
  

  return (

    <div id="main">
      <h2 id="Name"><b><u>To Do List</u></b></h2>
      <div id="addBtnContainer">
        <AddTaskButton   onAddTask={handleAddTask}/>
      </div>
      <div id="toDos">
        <h3><i><b>➤<u>To Do's</u></b></i></h3>
        {nonCompletedTasksList}
      </div>
      <div id="done">
         <h3><i><b>✔<u>Done</u></b></i></h3>
        {completedTasksList}
      </div>
      
    </div>
  )
}

export default ToDoList
