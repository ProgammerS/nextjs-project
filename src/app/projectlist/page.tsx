"use client"; 

// Import necessary modules
import { useEffect, useState } from "react";

// Define the type for a project
interface Project {
  id: number;
  name: string;
  description: string;
}

// React component for Project List
const ProjectListPage = () => {
  // State to store the list of projects
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the Express API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/projects"); 
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Render the component
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Project List</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectListPage;
