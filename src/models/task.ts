export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }
  
  export const tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'First task description', completed: false },
    { id: 2, title: 'Task 2', description: 'Second task description', completed: true },
    { id: 3, title: 'Task 3', description: 'Third task description', completed: false },
  ];
  