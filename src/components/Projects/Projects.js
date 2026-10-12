import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Customer from "../../Assets/Projects/Customer.png"
import Hospital from "../../Assets/Projects/Hospital.png";
import MedicalCamps from "../../Assets/Projects/Medical_camps.png"
import Designer from "../../Assets/Projects/Designer.png";
import Inventory from "../../Assets/Projects/inventory_system.png";
import Salesforecasting from "../../Assets/Projects/salesforecasting.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Designer}
              isBlog={false}
              title="Smart Notebook system"
              description="A Smart Notebook and Task Management System built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to create, organize, edit, and delete notes and tasks, set due dates, manage priorities, track task completion, and filter tasks by status. The system provides a user-friendly interface to improve productivity and organize daily activities efficiently."
              ghLink="https://github.com/Riddhi2704/smart_system_notebook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MedicalCamps}
              isBlog={false}
              title="Online Medical Registration Portal"
              description="An Online Medical Registration Portal built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to simplify the medical camp registration process. It allows users to register for medical camps, submit personal and medical details, and manage registration information efficiently. The system provides an organized and user-friendly interface to streamline the registration process and improve data management."
              ghLink="https://github.com/Riddhi2704/Medical_camps_registration_system"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Inventory}
              isBlog={false}
              title="Inventory Management System"
              description="products, monitor stock levels, track orders, and manage suppliers. The system provides an interactive dashboard with real-time inventory updates, product management, stock-in and stock-out tracking, and reports and analyticsand also Management System supports adding, editing, deleting, and searching products, along with monitoring available stock and identifying low-stock items. It also includes supplier management, order tracking, and an intuitive interface for managing inventory operations efficiently.. Online markdown editor for building README file."
              ghLink="https://github.com/Riddhi2704/inventory_management_system_final"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hospital}
              isBlog={false}
              title="Hospital Management System"
              description="Developed a Hospital Management System to manage patient records, doctor details, appointments, and billing.Implemented modules for patient management, bed allocation, pharmacy, and medical records.Used React.js to build an interactive and responsive user interface."
              ghLink="https://github.com/Riddhi2704/Astha_hospital_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Salesforecasting}
              isBlog={false}
              title="Sales Forecasting Model"
              description="Using Machine Learning model and Data Processing ALl step follow for the detection of business future sales and Businesses man also enter input and know about future sales that use for Analysis business and Decide the next startgies of businesses."
              ghLink="https://github.com/Riddhi2704/sales_forecasting_model"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Customer}
              isBlog={false}
              title="Customer Classification Model"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Riddhi2704/knn_customer_classification_final"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
