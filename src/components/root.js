import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Root = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata?.title || "Title"

  return (
    <div className="font-body flex flex-col items-center h-screen justify-between bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200">
      {/* Fill width until md, then fix to 768px (size of md) */}
      <div className="w-full px-4 md:max-w-[768px] h-full">
        <Header title={title} />
        <main>{children}</main>
      </div>
      <footer>
        <small>Copyright © {new Date().getFullYear()}, {title}. All rights reserved.</small>
      </footer>
    </div>
  )

}

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root