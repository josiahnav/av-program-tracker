import ProjectsContext from "./projects-context";

const ProjectsProvider = (props: any)=> {
  return(
    <ProjectsContext.Provider value={[]}>
      {props.children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsProvider;
