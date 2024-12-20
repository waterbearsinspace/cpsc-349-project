import Resume from "../assets/Nicolas Viste Resume.pdf"

function About() {

  return (
    <section className="section" id="about">
      <div className="about-wrapper">
        <div className="about-sm">
          <h1>About</h1>
        </div>

        <div className="about-lg">
          <h1>Background</h1>
          <div className="about text">
            <p>I began my journey into programming and computer science proper in around 2022, though I had a bit of experience trying to learn how to make a game once years before that and have even copied html into my myspace page further back than that. I've always been interested in computers and technology but never considered a career in the field until relatively recently, though I've made my way now to being fortunate enough to have an internship at a software solutions company.</p>
          </div>

          <h1>Education</h1>
          <div className="about text">
            <p>I switched from slowly making my way through pre-nursing when I was applying for a private school and saw how much tuition was. When I considered if nursing was actually something I wanted to do, I decided handily that it wasn't and proceeded to look into computer science. I took classes at my local community college to earn my Associate's Degree for Transfer and will be finishing my final semester at California State University Fullerton. </p>
          </div>

          <h1>Skills</h1>
          <div className="about text">
            <p>I primarily develop web applications, using vanilla HTML5, CSS3, and Javascript/Typescript as well as React for the front end and Node.js for the back end. I also have experience programming with C++, Java, and Python, and have used SQL for database work as well.</p>
          </div>

          <h1>Interests</h1>
          <div className="about text">
            <p>I have a small variety of hobbies including playing board games, listening to music, and watching movies. A couple favorites of each include Spirit Island and Aeon's End, Billlie and Camoufly, and River and One Cut of the Dead.</p>
          </div>

          <div className="about-resume">
            <a href={Resume} target="_blank">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About