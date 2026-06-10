import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Open to Opportunities</div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          HELLO THERE 👋
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rakesh Das
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Building Modern Web Experiences
        </motion.h2>

        <p className="hero-description">
          Currently learning React, Java, Spring Boot and modern backend
          development while building real-world projects and strengthening my
          software engineering skills.
        </p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <button className="primary-btn">Contact Me</button>

          <button className="secondary-btn">GitHub</button>
        </motion.div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">RD</div>
      </div>
    </section>
  );
}

export default Hero;
