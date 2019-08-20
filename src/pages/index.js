import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Style from "../styles/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Parth Chokshi" keywords={[`gatsby`, `application`, `react`]} />
    <section className="main">
      <div className="intro">
        <div className="intro-heading-container">
          <p className="upper-case intro-subheading">I am</p>
          <h2 className="intro-heading">Parth Chokshi</h2>
        </div>
      </div>

      <div className="work">
        <div className="work-web">
          <p className="work-web-title">Full Stack Developer</p>
          <div className="work-pipe-web" />
        </div>
        <div className="work-avatar" />
        <div className="work-mobile-design-container">
          <div className="work-mobile">
            <div className="work-pipe-mobile" />
            <p className="work-mobile-title">Mobile Apps Developer</p>
          </div>
          <div className="work-design">
            <div className="work-pipe-design" />
            <p className="work-design-title">UI &amp; UX Designer</p>
          </div>
        </div>
      </div>

      <div className="mobile-skills">
        <ul>
          <li><span>*</span>&nbsp;&nbsp;Full Stack Developer</li>
          <li><span>*</span>&nbsp;&nbsp;Mobile Apps Developer</li>
          <li><span>*</span>&nbsp;&nbsp;UI &amp; UX Designer</li>
        </ul>
      </div>

      <div className="navigation">
        <a className="navigation-connect" href="mailto:parth@bles.co">
          Connect
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
