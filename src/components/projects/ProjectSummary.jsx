function ProjectSummary({project}) {
    
    return(
        <div className="card z-dethp-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by me</p>
                <p className="grey-text">29th october</p>
            </div>
        </div>
    )
}

export default ProjectSummary