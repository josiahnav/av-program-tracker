import React from "react";
import Project from "../../../Models/Project";
import AddProjectForm from "./AddProjectForm";

const HomePage = (props: any) => {
  const onSubmitHandler = (project: Project) =>  {
    console.log("Project submitted:", project);
  }

  return(
    <div>
      <AddProjectForm onSubmit={onSubmitHandler}></AddProjectForm>
    </div>
  );
};

export default HomePage;
