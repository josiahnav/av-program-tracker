import React from "react";

import Project from '../Models/Project';

const ProjectsContext = React.createContext({
    projects: new Map<number, Project>(),
    addProject: (project: Project) => {},
    removeProject: (projectId: number) => {}
});

export default ProjectsContext;
