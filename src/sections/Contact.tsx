function Contact() {

  return (
    <section className="contact-section section">
      <h1>Contact</h1>
      <form action="">
        <label htmlFor="email">
          <p>Email</p>
        </label>
        <input id="email" type="text" />

        <label htmlFor="message">
          <p>Message</p>
        </label>
        <textarea id="message" rows={25} cols={50}/>
      </form>
    </section>
  )
}

export default Contact