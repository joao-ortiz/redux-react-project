import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function ProjectDetails(props) {
    const project = props.project
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card_content">
                        <span className="card-title">
                            {project.title}
                        </span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>29th October, 5pm</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container center">
            <p>Loading project...</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails)