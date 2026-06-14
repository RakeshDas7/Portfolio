import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>
        <span>05.</span> Let's Connect
      </h2>

      <p className="contact-text">
        I'm always open to learning, collaboration and new opportunities.
      </p>

      <div className="contact-links">
        <a href="mailto:rakeshdas1477@gmail.com" className="contact-btn">
          Email Me
        </a>

        <a
          href="https://github.com/RakeshDas7"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/rakesh-das-633b39321/"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
