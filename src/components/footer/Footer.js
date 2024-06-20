import React from "react";
import { Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

import "./Footer.scss";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <div className="col-md-4 footer-copywright">
          <h3>Designed by De sousa Valentin</h3>
        </div>
        <div className="col-md-4 footer-copywright">
          <h3>Copyright © {year}</h3>
        </div>
        <div className="col footer-body">
          <ul className="footer-icons">
            <a
              href="https://github.com/DsValentin"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
