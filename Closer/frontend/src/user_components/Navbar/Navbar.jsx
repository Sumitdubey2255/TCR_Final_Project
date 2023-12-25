import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Image, Stack } from "@chakra-ui/react";
import boy from "../../img/nav.png";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <Stack direction="row" spacing={1} align="center">
          <span></span>
          {/* <Image
            // borderRadius="2"
            // boxSize="50px"
            src=".Closer.png"
            alt="Closer"
          /> */}
          {/* <img src={boy} alt="" /> */}

          <Image borderRadius="2" width="150px" marginTop={"15px"} src={boy} alt="closer" />
          {/* <img src="src/user_components/Navbar/nav.png" alt="rcfyg" /> */}

          {/* <span style={{ color: "#000" ? "white" : "" }}>Closer</span> */}
        </Stack>
        {/* <Image borderRadius="2" boxSize="50px" src="/closer_logo.png" alt="" /> */}
        {/* <div className="n-name">Closer</div> */}
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Know More
              </Link>
            </li>
            <li>
              <Link to="footer" spy={true} smooth={true}>
                Join Now
              </Link>
            </li>
          </ul>
        </div>
        {/* <Link to="footer" spy={true} smooth={true}>
          <button className="button n-button">Join Now!</button>
        </Link> */}
      </div>
    </div>
  );
};

export default navbar;
