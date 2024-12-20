import Avatar from "../assets/avatar.png"

function Hero() {

  return (
    <section className="hero-section section" id="hero">
      <div className="hero">
        <div className="hero-lg">
            <h1 className="hero-header">Hello. My name is Nick Viste.</h1>

            <p className="hero-text">I am a student at CSUF. I am currently finishing my degree in computer science and working to improve both my front end and back end skills. I know enough to know that I know very little and because of this, I am very excited about how much there is to discover and explore.</p>
        </div>

        <div className="hero-sm">
          <img className="hero-image" src={Avatar} height="400px"></img>
        </div>
      </div>

      <h3 className="hero-tagline">Always learning, always improving.</h3>
    </section>
  )
}

export default Hero