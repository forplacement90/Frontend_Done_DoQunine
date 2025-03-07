import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer bg-blue-200 text-gray-800 py-4 mt-5  border-top border-2 border-black">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Copyright Text */}
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">© {new Date().getFullYear()} Logic Store. All Rights Reserved.</p>
          </Col>

          {/* Right Side - Links */}
          <Col md={6} className="text-center text-md-end">
            <a href="#" className="text-dark mx-2 text-decoration-none">Terms</a>
            <a href="#" className="text-dark mx-2 text-decoration-none">Privacy</a>
            <a href="#" className="text-dark mx-2 text-decoration-none">Security</a>
            <a href="#" className="text-dark mx-2 text-decoration-none">Status</a>
            <a href="#" className="text-dark mx-2 text-decoration-none">Help</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;