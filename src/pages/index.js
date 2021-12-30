import * as React from "react"
import Root from "../components/root"

const IndexPage = () => {
  return (
    <Root>
      <div class="flex flex-col space-y-4">
        <h1 class="text-3xl">Software Engineer and Computer Science graduate</h1>
        <p>I am a Software Engineer with a particular interest in backend development, microservices, working with data, and the cloud. I enjoy tennis, rock climbing, and of course, all things technology! </p>
        <p>I have two years of professional experience in the software industry with <span class="underline text-blue-600">Amadeus</span> and <span class="underline text-purple-600">Citrix</span>, a first-class honours Bachelors of Engineering in Computer Science from the <span class="underline text-emerald-600">University of York</span>, and countless years of experience on personal projects.</p>
      </div>
    </Root>
  )
}

export default IndexPage
