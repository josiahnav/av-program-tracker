import React, {useContext} from "react";

import Project from "../../../Models/Project";
import AddProjectForm from "./AddProjectForm";
import ProjectsContext from '../../../Contexts/projects-context';
import ProjectList from './ProjectList';

import classes from './HomePage.module.css'

const HomePage = () => {
  const ctx = useContext(ProjectsContext);

  const onSubmitHandler = (project: Project) =>  {
    ctx.addProject(project);
  }

  return(
    <section className={classes.home}>
      <AddProjectForm onSubmit={onSubmitHandler}/>
      {ctx.projects.size > 0 && <ProjectList/>}
    </section>
  );
};

export default HomePage;
