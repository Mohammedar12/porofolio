import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

import "./Header.css";

const pages = {
  page: ["Home ", "About me", "Resume", "Work", "Contact"] , 
  page_ar: ["الرئيسية ", "نبذة عني", "الخبرات", "اعمالي", "التواصل"],
};

function Header({ changeLanguage }) {
  const { t, i18n } = useTranslation();
  return (
    <Navbar
      expand="lg"
      className="navbar"
      sticky="top"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Container>
        <Navbar.Brand href="#Home">Portofolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {i18n.language === "ar"
              ? pages.page_ar.map((page, i) => (
                  <Nav.Link key={i} href={`#${page}`}>
                    {page}
                  </Nav.Link>
                ))
              : pages.page.map((page, i) => (
                  <Nav.Link key={i} href={`#${page}`}>
                    {page}
                  </Nav.Link>
                ))}

            <Dropdown dir="ltr">
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {i18n.language}
              </Dropdown.Toggle>
              <Dropdown.Menu className="lang m-auto">
                <Button className="en" onClick={changeLanguage} value="en">
                  English
                </Button>
                <Button className="ar" onClick={changeLanguage} value="ar">
                  Arab
                </Button>
              </Dropdown.Menu>
            </Dropdown>

            {/* <div className="lang">
              <button className="en" onClick={changeLanguage} value="en">
                English
              </button>
              <button className="ar" onClick={changeLanguage} value="ar">
                Arab
              </button>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
