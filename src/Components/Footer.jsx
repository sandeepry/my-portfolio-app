import React from "react";
import img from "../Assets/me.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div>
        <img src={img} alt="Founder" />
        <h2>Sandeep Roy</h2>
        <p>If You're really achive somthing big , then you should really <br/> read 'Think and Grow Rich' Book</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="www.youtube.com" target="blank">
            <AiFillYoutube />
          </a>
          <a href="http://instagram.com/sandeep_roy_35" target="blank">
            <AiFillInstagram />
          </a>
          <a href="http://facebook.com" target="blank">
            <AiFillFacebook />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
}

export default Footer;
