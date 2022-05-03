import {useContext} from 'react';
import ProjectsContext from '../../../Contexts/projects-context';

import classes from './ProjectList.module.css';

const ProjectList = () => {
    const ctx = useContext(ProjectsContext)

    console.log(ctx);

    const projectList = Array.from(ctx.projects.entries());

    console.log(projectList);

    return(
        <div>
            <ul className={classes["project-list"]}>
                {projectList.map( (project, index) => {
                    return(
                      <li key={project[0]}>{project[1].number} {project[1].name}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectList;
