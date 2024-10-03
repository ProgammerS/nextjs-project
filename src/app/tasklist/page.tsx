"use client"; // Marks this component as a Client Component

import { useEffect, useState } from 'react';

// Define the type for a task
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskListPage = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the Next.js API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('/api/tasks'); // Fetch data from the Next.js API
        if (!res.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data: Task[] = await res.json();
        setTasks(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Render loading or error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the list of tasks
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListPage;
