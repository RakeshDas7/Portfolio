import "./Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
    >
      <h2>Contact Me</h2>

      <p className="contact-text">
        I'm always open to learning,
        collaboration and new opportunities.
      </p>

      <div className="contact-links">

        <a
          href="mailto:rakeshdas1477@gmail.com"
          className="contact-btn"
        >
          Email Me
        </a>

        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
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