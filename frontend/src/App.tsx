import { useEffect, useState } from 'react'
import './App.css'
import { Task_Type } from './lib/types';
import Task from './components/Task';
import Create_Task from './components/Create-Task';

function App() {
  const [todos, setTodos] = useState<Task_Type[]>([]);
  
  const fetch_todos = async () => {
    const response = await fetch('http://localhost:3333/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data: Task_Type[] = await response.json();
      setTodos(data);
    } else {
      throw new Error(response.statusText);
    }
  }

  useEffect(() => {
    fetch_todos();
  }, [todos]);

  return (
    <>
      <div className='forms-containers'>
        <div>
          <h3>Create Todo</h3>
          <Create_Task fetch_todos={fetch_todos} />
        </div>
        <button onClick={fetch_todos}>Fetch Latest Todos</button>
      </div>
      <h2>All Todos</h2>
      <div className='task-container'>
        {todos.map((todos) => <Task todos={todos} key={todos.task_id} />)}
      </div>
    </>
  )
}

export default App
