import { Spinner } from "./Spinner";

// Mutations
import { GET_PROJECTS } from "../queries/projectQueries";

// Query
import { useQuery } from "@apollo/client";

// Components
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects?.map((project) => (
            <ProjectCard project={project}  key={project.id}/>
          ))}
        </div>
      ) : (
        <div>No Projects</div>
      )}
    </>
  );
};
