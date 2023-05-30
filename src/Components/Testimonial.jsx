import React from "react";
import img from "../Assets/user icon.png";

function Testimonial() {
  return (
    <div id="testimonial">
      <h1>Testimonial</h1>
      <section>
        <TestimonialCard
          name={"Sumit"}
          feedback={"Your teaching skills are so good.."}
        />
        <TestimonialCard
          name={"Abhishek"}
          feedback={"I feel Amazing work Experience with him"}
        />
        <TestimonialCard
          name={"Coder dost"}
          feedback={"He is so intelligent people.."}
        />
      </section>
    </div>
  );
}

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img src={img} alt="" />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
