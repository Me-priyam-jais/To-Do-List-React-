import React from 'react'
import './Task.css'

function Task({task,taskStatus,taskno,onDelete,onStatusChange}) {

  return (
    <div className="Task">
      <label class="container" htmlfor={taskno}>
      <input id={taskno} className='taskStatusBtn'  checked={taskStatus} onChange={onStatusChange} type="checkbox"/>
      <span className="checkmark"></span>
      </label>
      <p className="taskContent"><b>{task}</b></p>
      <button onClick={onDelete} className="dltBtn">delete</button>
    </div>
  )
}

export default Task
