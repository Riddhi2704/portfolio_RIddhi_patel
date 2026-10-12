import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Riddhi patel</span>{" "}
            from <span className="purple">Ahmedabad, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">MERN developer Intern </span> at{" "}
            <span className="purple">Destiny pvt.ltd</span>.
            <br />I hold an Integrated M.Sc (IMSc) in{" "}
            <span className="purple">Computer Science and Information Technology</span> from{" "}
            <span className="purple">Gujarat University at Ahmedabad</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning & Innovation 💡
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(136, 90, 162)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Riddhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
