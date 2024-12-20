
function Icon({name}: {name: string}) {
  let icon = "devicon-" + name.toLowerCase() + "-plain colored";

  return (
    <div className="skill-card">
      <p>{name == "CPlusPlus" ? "C++" : name}</p>
      <i className={icon}></i>
    </div>
  )
}

function Skills() {

  return (
    <section className="section skills" id="skills">
        <div className="skills-wrapper">
          <div className="skills-lg">
            <h1>Technical Skills</h1>

            <div className="skill-container">
                <Icon name='HTML5' />
                <Icon name='CSS3' />
                <Icon name='JavaScript' />
                <Icon name='TypeScript' />
                <Icon name='React' />
                <Icon name='MySQL' />
                <Icon name='CPlusPlus' />
                <Icon name='Java' />
                <Icon name='Python' />
            </div>

            <h1>Non-Technical Skills</h1>

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
        </div>
    </section>
  )
}

export default Skills