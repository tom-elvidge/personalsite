import * as React from "react"
import PropTypes from "prop-types"

const Project = ({ project }) => (
  <div className="bg-neutral-800" >
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a href={project.source}>{project.source}</a>
      <br />
      <a href={project.url}>{project.url}</a>
      <ul>
        {
          project.technologies.map(technology => {
            return <li>{technology}</li>
          })
        }
      </ul>
  </div>
)

Project.propTypes = {
  project: PropTypes.object,
}

export default Project