import {Fragment, useState, useReducer, useContext} from "react";

import Project from "../../../Models/Project";
import ProjectsContext from '../../../Contexts/projects-context';

import classes from './AddProjectForm.module.css';
import Input from '../../Common/Input';

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
  const ctx = useContext(ProjectsContext);
  const [projectNumberIsValid, setProjectNumberIsValid] = useState(true);

  const defaultProject: Project = new Project();

  const [projectState, dispatchProject] = useReducer(projectReducer, defaultProject);
  
  const projectNumberId: string = "projectNumber";
  const projectNameId: string = "projectName";
  const projectTypeId: string = "projectType";
  
  const projectTypes: string[] = ["Crestron", "Amx", "Extron"];

  const projectNumberChangeHandler = (event: any) => {
    setProjectNumberIsValid(!ctx.projects.has(+event.target.value));
    dispatchProject({id: event.target.id, value: event.target.value});
  }

  const projectNameChangeHandler = (event: any) => {
    dispatchProject({id: event.target.id, value: event.target.value});
  }

  const projectTypeChangeHandler = (event: any) => {
    dispatchProject({id: event.target.id, value: event.target.value});
  }

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onSubmit(projectState);
  };

  return(
    <Fragment>
      <h2>Please enter project details:</h2>
      <form onSubmit={submitHandler}>
        <Input
          label={"Number:"}
          id={projectNumberId}
          type={"number"}
          placeholder="Unique project number"
          isValid={projectNumberIsValid}
          onChange={projectNumberChangeHandler}
          />
        <Input
            label={"Name:"}
            id={projectNameId}
            type={"text"}
            placeholder="Project name"
            isValid={true}
            onChange={projectNameChangeHandler}
        />
        <label htmlFor={projectTypeId}>Type:</label>
        <br/>
        <select
            className={classes["project-input"]}
            id={projectTypeId}
            name="type"
            onChange={projectTypeChangeHandler}
        >
          {projectTypes.map( type => {
            return(
              <option value={type} key={type}>{type}</option>
            );
          })}  
        </select>
        <br/>
        <button disabled={!projectNumberIsValid}>Submit</button>
      </form>
    </Fragment>
  );
};

export default AddProjectForm;
