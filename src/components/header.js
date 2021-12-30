import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = ({ title }) => (
  <header class="my-4">
    <div class="flex flex-row items-center space-x-8">
      <Link to="/"><h1 class="whitespace-nowrap">{title}</h1></Link>
      <div class="flex flex-row space-x-4">
        <Link to="https://twitter.com/tomeldev"><FontAwesomeIcon icon={faTwitter} /></Link>
        <Link to="https://www.linkedin.com/in/tomelvidge/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
        <Link to="https://github.com/tom-elvidge"><FontAwesomeIcon icon={faGithub} /></Link>
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