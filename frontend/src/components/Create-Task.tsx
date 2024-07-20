import { useState } from "react";
import './Create-Task.css';

export default function Create_Task({ fetch_todos }: { fetch_todos: () => void }) {
    const [loading, setLoading] = useState(false);
    const [task_title, setTask_title] = useState('');
    const [task_description, setTask_description] = useState('');
    const [task_completed, setTask_completed] = useState(false);

    const handle_create = async () => {
        setLoading(true);
        const response = await fetch('http://localhost:3333/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            task_title: task_title,
            task_description: task_description,
            task_completed: task_completed,
          }),
        })
        if (response.ok) {
            console.log(response);
            fetch_todos();
        } else {
            throw new Error(response.statusText);
        }
        setLoading(false);
    }
    
  return (
    <>
        <div className="form-container">
            <div className="div-box">
                <label htmlFor="task_title">Title: </label>
                <input type="text" name="task_title" onChange={(e) => setTask_title(e.target.value)} value={task_title} placeholder="Task Title" />
            </div>
            <div className="div-box">
                <label htmlFor="task_description">Description: </label>
                <input type="text" name="task_description" value={task_description} onChange={(e) => setTask_description(e.target.value)} placeholder="Task Description" />
            </div>
            <div className="div-box">
                <label htmlFor="task_completed">Status: </label>
                <input type="checkbox" name="task_completed" checked={task_completed} onChange={() => setTask_completed(!task_completed)} />
            </div>
            <button onClick={handle_create} disabled={loading}>Create Task</button>
        </div>
    </>
  )
}
