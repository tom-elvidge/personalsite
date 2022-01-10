import * as React from "react"
import Root from "../components/root"
import SelectButton from "../components/selectbutton"
import Project from "../components/project"
import projects from "../data/projects.json"

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showProjects: true // Display projects initially
    };
  }

  updateShowProjects(val) {
    this.setState((state) => {
      return {showProjects: val}
    });
  }

  render() {
    return (
      <Root>
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl">Software Engineer and Computer Science graduate</h1>
          <p className="text-justify">I am a Software Engineer with a particular interest in backend development, microservices, working with data, and the cloud. I enjoy tennis, rock climbing, and of course, all things technology! </p>
          <p className="text-justify">I have two years of professional experience in the software industry with <span className="underline text-blue-600">Amadeus</span> and <span className="underline text-purple-600">Citrix</span>, a first-class honours Bachelors of Engineering in Computer Science from the <span className="underline text-emerald-600">University of York</span>, and countless years of experience on personal projects.</p>
          <div className="flex flex-row justify-center">
            <SelectButton text="PROJECTS" selected={this.state.showProjects} onClick={this.updateShowProjects.bind(this, true)} />
            <SelectButton text="ARTICLES" selected={!this.state.showProjects} onClick={this.updateShowProjects.bind(this, false)} />
          </div>
          {
            this.state.showProjects ? (
              projects.map(project => {
                return <Project project={project} />
              })
            ) : <h1>Articles</h1>
          }
        </div>
      </Root>
    )
  }

}

export default IndexPage
