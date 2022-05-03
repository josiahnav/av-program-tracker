import React, {useContext} from "react";

import Project from "../../../Models/Project";
import AddProjectForm from "./AddProjectForm";
import ProjectsContext from '../../../Contexts/projects-context';
import ProjectList from './ProjectList';

const HomePage = (props: any) => {
  const ctx = useContext(ProjectsContext);

  const onSubmitHandler = (project: Project) =>  {
    ctx.addProject(project);
  }

  return(
    <section>
      {ctx.projects.size === 0 && <div>No projects saved!</div>}
      <AddProjectForm onSubmit={onSubmitHandler}/>
      {ctx.projects.size > 0 && <ProjectList/>}
    </section>
  );
};

export default HomePage;
