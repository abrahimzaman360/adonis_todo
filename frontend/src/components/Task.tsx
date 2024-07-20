import { Task_Type } from '../lib/types';
import './Task.css';

export default function Task({ todos } : {todos: Task_Type}) {
  return (
    <>
        <div className="task-card">
            <h1 className='task-title'>{todos.task_title}</h1>
            <p className='task-description'>{todos.task_description ?? 'No description provided.'}</p>
            <button className='task-status'>{todos.task_completed ? <span className='status-label completed'>Completed</span> : <span className='status-label not-completed'>Not completed</span>}</button>
        </div>
    </>
  )
}
