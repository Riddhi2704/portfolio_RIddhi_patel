import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Copliet from "../../Assets/Projects/copilet.png";
import GoogleAntigravity from "../../Assets/Projects/google-antigravity-logo-icon-png.jpg"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
           <img
           src={GoogleAntigravity}
           alt="html"
           className="p-2 text-center"
           style={{ width: "30px", height: "30px", objectFit:"contain"}}></img> Google Antigravity
           </Col>
           <Col xs={4} md={2} className="tech-icons">
           <img
           src={Copliet}
           alt="html"
           className="p-2 text-center"
           style={{ width: "30px", height: "30px", objectFit:"contain"}}></img> Copilet
           </Col>
    </Row>
  );
}

export default Toolstack;
