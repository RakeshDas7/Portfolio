import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.p
        className="hero-greeting"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm
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
        React Developer & Future Java Backend Developer
      </motion.h2>

      <p className="hero-description">
        Building modern web experiences with React, Java, Spring Boot and MySQL.
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
    </section>
  );
}

export default Hero;
