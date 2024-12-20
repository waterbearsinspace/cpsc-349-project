
function Icon({name}: {name: string}) {
  let icon = "devicon-" + name.toLowerCase() + "-plain colored";

  return (
    <div className="skill-card">
      <i className={icon}></i>
    </div>
  )
}

function Skills() {

  return (
    <section className="section skills" id="skills">
        <div className="skills-wrapper">
          <div className="skills-lg">
            <h1>Technical</h1>

            <div className="skill-container">
                <Icon name='HTML5' />
                <Icon name='CSS3' />
                <Icon name='javascript' />
                <Icon name='typescript' />
                <Icon name='react' />
                <Icon name='mysql' />
                <Icon name='cplusplus' />
                <Icon name='java' />
                <Icon name='python' />
            </div>

            <h1>Non-Technical</h1>

            <div className="skill-container">
              <div className="skill-card">
                <p>Self-Guidance</p>
              </div>

              <div className="skill-card">
                <p>Can Seek Help</p>
              </div>

              <div className="skill-card">
                <p>Team Player</p>
              </div>
              <div className="skill-card">
                <p>Communication</p>
              </div>

              <div className="skill-card">
                <p>Adaptability</p>
              </div>

              <div className="skill-card">
                <p>Resourcefulness</p>
              </div>

              <div className="skill-card">
                <p>Eager to Learn</p>
              </div>
            </div>
          </div>

          <div className="skills-sm">
            <h1>Skills</h1>
          </div>
        </div>
    </section>
  )
}

export default Skills