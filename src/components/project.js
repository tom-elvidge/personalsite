import * as React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = ({ project }) => (
  <div className="flex h-48 flex-row rounded-2xl p-3 bg-neutral-200 dark:bg-neutral-800" >
    <img src={project.img} alt={project.name} className="h-full rounded-2xl" />
    <div className="relative ml-4">
      <h1 className="font-bold text-2xl" >{project.name}</h1>
      <a className="text-3xl absolute top-0 right-0 hover:text-black dark:hover:text-white" href={project.source} aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
      <a className="text-sm text-blue-600 underline" href={"https://" + project.url}>{project.url}</a>
      <p className="text-justify line-clamp-3 break-normal overflow-hidden text-ellipsis">{project.description}</p>
      <p className="text-xs line-clamp-1 break-normal overflow-hidden text-ellipsis absolute bottom-0 right-0">{ project.technologies.join(", ")}</p>
    </div>
  </div>
)

Project.propTypes = {
  project: PropTypes.object,
}

export default Project