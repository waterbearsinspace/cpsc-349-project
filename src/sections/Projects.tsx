import CPSC332 from "../assets/cpsc-332 project.png"
import Destiny from "../assets/destiny.png"
import Checklist from "../assets/harkins checklist.png"

function Projects() {

  return (
    <section className="section" id="projects">
      <div>
        <h1>Projects</h1>
      </div>

      <div className="split projects-container">
        <div className="text project-card">
          <h2>CPSC 332 Database Project</h2>
          <img className="project-img" src={CPSC332}/>
          <div className="project-text">
            <p>For a File Structure and Database Class at CSUF I worked on a web application to view a collection of board games. </p>
            <p>The project used HTML5 and CSS3 for the front end and PHP and MySQL for the back end. </p>
            <p>The other members of my group had little experience with frontend development so one challenge was getting them up to speed so they could understand what was going on. Another challenge was that it was all of our first time using SQL in a project so we had to research how to make calls to a database and retrieve data.</p>
            <p>Ultimately, I learned how to use PHP in conjunction with SQL as well as how to create the front end of a web application as this was also my first time putting what I had learned from self study of frontend development into practice.</p>
          </div>
        </div>

        <div className="text project-card">
          <h2>Harkins Checklist</h2>
          <img className="project-img" src={Checklist}/>
          <p>When I was first promoted to a lead position at my part time job at a movie theater I didn't yet have the checklist of daily tasks to complete memorized, nor did I want to keep bringing the paper with me. Because of this need, I made a reference website which contained all of the checklist items to be easily accessed from my phone.</p>
          <p>The application is a static site which uses HTML5, CSS3, and React + Vite for the front end and is hosted on Vercel.</p>
          <p>As this is a relatively simple project, the biggest challenge was not technical but design related. I had to do some digging into my company's actual website in order to find design choices such as colors, fonts, and backgrounds in order to make my application resemble something official as accurately as possible.</p>
          <p>Through making this, I put Chrome's dev tools to more use than I had in previous projects, learned about and practiced using React Router, and ended up with something I could use in my every day work life. </p>
        </div>

        <div className="text project-card">
          <h2>Destiny</h2>
          <img className="project-img" src={Destiny}/>
          <p>At my current internship I'm working on a web application for internal usage which allows for timesheet tracking and submission as well as project management.</p>
          <p>The application uses HTML5, CSS3, and React for the front end and Node.js for the back end.</p>
          <p>The biggest challenges are that this work is outside of any previous scope I've known before such as class or my own personal needs for a small project. As such, finding answers when I'm unsure of what to do can sometimes be difficult as it's not as simple as looking at the previous lesson's slides or rereading my notes.</p>
          <p>Through the development of this application, I'm learning a lot about everything related to web development and am getting actual experience with working with a client to fulfill their needs, making calls to an actual database rather than something hosted locally, and taking part in a project where there's so much to learn.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects