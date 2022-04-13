import {Fragment, useState} from "react";

import classes from "./HomePage.module.css";

const AddProjectForm = (props: any) => {
  const [projectNumber, setProjectNumber] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("");

  const projectNumberId: string = "projectNumber";
  const projectNameId: string = "projectName";
  const projectTypeId: string = "projectType";
  
  const projectTypes: string[] = ["Crestron", "Amx", "Extron"];

  const onChange = (event: any) => {
    switch(event.target.id) {
      case projectNumberId:
        setProjectNumber(+event.target.value);
        break;
      case projectNameId:
        setProjectName(event.target.value);
        break;
      case projectTypeId:
        setProjectType(event.target.value);
        break;
    }
  }

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    console.log("projectNumber", projectNumber);
    console.log("projectName", projectName);
    console.log("projectType", projectType);
  };

  return(
    <Fragment>
      <h2>Please enter project details:</h2>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="projectNumber">Number:</label>
        <br/>
        <input className={classes["project-input"]} id={projectNumberId} type="number" onChange={onChange}/>
        <br/>
        <label htmlFor={projectNumberId}>Name:</label>
        <br/>
        <input className={classes["project-input"]} id={projectNameId} type="string" onChange={onChange}/> 
        <br/>
        <label htmlFor={projectTypeId}>Type:</label>
        <br/>
        <select className={classes["project-input"]} id={projectTypeId} name="type" onChange={onChange}>
          {projectTypes.map( type => {
            return(
              <option value={type} key={type}>{type}</option>
            );
          })}  
        </select>
        <br/>
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default AddProjectForm;
