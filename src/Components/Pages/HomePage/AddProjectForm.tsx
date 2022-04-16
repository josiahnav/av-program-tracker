import {Fragment, useReducer} from "react";
import Project from "../../../Models/Project";
import classes from "./HomePage.module.css";

const projectReducer = (state: any, action: any) => {
  switch(action.id) {
    case "projectNumber":
      return { ...state, number: +action.value};
    case "projectName":
      return {...state, name: action.value};
    case "projectType":
      return {...state, type: action.value};
  } 
}

const AddProjectForm = (props: any) => {
  const defaultProject: Project = new Project();

  const [projectState, dispatchProject] = useReducer(projectReducer, defaultProject);
  
  const projectNumberId: string = "projectNumber";
  const projectNameId: string = "projectName";
  const projectTypeId: string = "projectType";
  
  const projectTypes: string[] = ["Crestron", "Amx", "Extron"];

  const onChange = (event: any) => {
   dispatchProject({id: event.target.id, value: event.target.value}); 
  }

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    props.onSubmit(projectState);
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
