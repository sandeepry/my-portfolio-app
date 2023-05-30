import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid } from "react-icons/ai";

function Services() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    two: {
      y: "+100%",
      opacity: 0,
    },
    three: {
      x: "+100%",
      opacity: 0,
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="servicesBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>2+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="servicesBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="servicesBox3"
          whileInView={animations.whileInView}
          initial={animations.three}
        >
          <AiFillAndroid />
          <span>App Development</span>
        </motion.div>
      </section>
    </div>
  );
}

export default Services;
