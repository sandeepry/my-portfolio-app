import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../Assets/me.png";

function Home() {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () =>
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  const animationProjectsCount = () =>
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I Am <br /> Sandeep Roy
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Programmer", "A Developer", "A Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:sandeeproy5133@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />{" "}
            </a>
          </div>

          <article>
            <p>
              +
              <motion.span
                ref={clientCount}
                whileInView={animationClientsCount}
              ></motion.span>
            </p>
            <span>Worldwide Clients</span>
          </article>

          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                ></motion.span>
              </p>
              <span>Worldwide Projects</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>official.sandeeproy5133@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Sandeep" />
      </section>
      <BsChevronDown />
    </div>
  );
}

export default Home;
