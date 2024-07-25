import React, { useEffect, useState } from 'react';
import CreateProjectForm from './components/CreateProjectForm';
import { getProjects } from './services/api';

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();
            setProjects(projects);
        };
        fetchProjects();
    }, []);

    const handleProjectCreated = (newProject) => {
        setProjects([...projects, newProject]);
    };

    return (
        <div>
            <h1>Project Management App</h1>
            <CreateProjectForm onProjectCreated={handleProjectCreated} />
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        {project.name} - {project.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
