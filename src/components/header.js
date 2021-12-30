import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = ({ title }) => (
  <header className="my-4">
    <div className="flex flex-row items-center space-x-8">
      <Link to="/"><h1 className="whitespace-nowrap">{title}</h1></Link>
      <div className="flex flex-row space-x-4">
        <a className="hover:text-black dark:hover:text-white" href="https://twitter.com/tomeldev" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        <a className="hover:text-black dark:hover:text-white" href="https://www.linkedin.com/in/tomelvidge/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a className="hover:text-black dark:hover:text-white" href="https://github.com/tom-elvidge" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
      {/* <div class="flex flex-col items-end w-full">
        <FontAwesomeIcon icon={faSun} />
      </div> */}
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "Title",
}

export default Header