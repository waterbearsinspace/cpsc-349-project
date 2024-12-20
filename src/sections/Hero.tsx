import Avatar from "../assets/avatar.png"

function Hero() {

  return (
    <section className="section" id="hero">
      <div className="split">
        <div className="split-lg">
          <div className="text">
            <h1>Hello. My name is Nick Viste.</h1>

            <p>I am a student at CSUF. I am currently finishing my degree in computer science and working to improve both my front end and back end skills. I know enough to know that I know very little and because of this, I am very excited about how much there is to discover and explore.</p>
          </div>
        </div>

        <div className="split-sm">
          <img src={Avatar} height="200px"></img>
        </div>
      </div>

      <p>Always learning, always improving.</p>
    </section>
  )
}

export default Hero