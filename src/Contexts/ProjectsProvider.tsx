import {useReducer} from 'react';

import ProjectsContext from "./projects-context";
import Project from '../Models/Project';

const defaultProjects = {
  projects: new Map<number, Project>()
}

const projectReducer = (state: any, action: any) => {
  let updatedProjects = new Map<number, Project>(state.projects);
  switch(action.type) {
    case "ADD":
      updatedProjects.set(action.value.number, action.value);
      break;
    case "REMOVE":
      updatedProjects.delete(action.value);
      break;
  }
  return {
    projects: updatedProjects
  };
}

const ProjectsProvider = (props: any) => {
  const [projectsState, dispatchProjects] = useReducer(projectReducer, defaultProjects);

  const addProjectHandler = (project: Project) => {
    dispatchProjects({type: 'ADD', value: project})
  }

  const removeProjectHandler = (projectId: number) => {
    dispatchProjects({type: 'REMOVE', value: projectId})
  }

  const projectsContext = {
    projects: projectsState.projects,
    addProject: addProjectHandler,
    removeProject: removeProjectHandler
  }

  console.log(projectsState.projects);

  return(
    <ProjectsContext.Provider value={projectsContext}>
      {props.children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsProvider;
