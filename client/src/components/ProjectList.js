import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map(project => (
        <li key={project._id}>{project.name}</li>
      ))}
    </ul>
  );
};

export default ProjectList;
