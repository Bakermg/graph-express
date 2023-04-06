export const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex flex-column justify-content-between">
            <h5 className="card-title">{project.name}</h5>
            <p className="small">
              Status: <strong>{project.status}</strong>{" "}
            </p>
            <a className="btn btn-primary" href={`/projects/${project.id}`}>
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
