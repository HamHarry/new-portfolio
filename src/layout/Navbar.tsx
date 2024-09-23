import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="container-navbar">
      <div className="portfolio">
        <Link
          to="Home"
          smooth={true}
          duration={200}
          onClick={() => {
            setSelected("");
          }}
        >
          Portfolio
        </Link>
      </div>
      <ul>
        <li>
          <Link to="About" smooth={true} duration={200}>
            <div
              className={selected === "about" ? "isSelect" : "select"}
              onClick={() => {
                setSelected("about");
              }}
            >
              About
            </div>
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={200}>
            <div
              className={selected === "skills" ? "isSelect" : "select"}
              onClick={() => {
                setSelected("skills");
              }}
            >
              Skills
            </div>
          </Link>
        </li>
        <li>
          <Link to="Education" smooth={true} duration={200}>
            <div
              className={selected === "education" ? "isSelect" : "select"}
              onClick={() => {
                setSelected("education");
              }}
            >
              Education
            </div>
          </Link>
        </li>
        <li>
          <Link to="Experience" smooth={true} duration={200}>
            <div
              className={selected === "experience" ? "isSelect" : "select"}
              onClick={() => {
                setSelected("experience");
              }}
            >
              Experience
            </div>
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={200}>
            <div
              className={selected === "contact" ? "isSelect" : "select"}
              onClick={() => {
                setSelected("contact");
              }}
            >
              Contact
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
