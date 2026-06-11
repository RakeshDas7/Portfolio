import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h3>Rakesh Das</h3>

      <p>
        Aspiring Java Backend Developer
      </p>

      <div className="footer-links">

        <a
          href="https://github.com/RakeshDas7"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/rakesh-das-633b39321/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:rakeshdas1477@gmail.com">
          Email
        </a>

      </div>

      <p className="copyright">
        © 2026 Rakesh Das
      </p>

    </footer>
  );
}

export default Footer;