import React, { useState } from "react";
import vg from "../Assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Contact() {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [disableBtn, setDisableBtn] = useState(false);

  const onChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), { inputs });
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Message error");
      setDisableBtn(false);
    }
  };

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.3,
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
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h1>Contact</h1>
          <input
            value={inputs.name}
            onChange={onChangeHandler}
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            value={inputs.email}
            onChange={onChangeHandler}
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            value={inputs.message}
            onChange={onChangeHandler}
            name="message"
            type="text"
            placeholder="Your Message"
            required
          />
          <motion.button
            className={disableBtn ? "disableBtn" : ""}
            disabled={disableBtn}
            type="submit"
            {...animations.button}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="graphic" />
      </aside>
    </div>
  );
}

export default Contact;
