import React from "react";
import "../App.css";
import Navbar from "../user_components/Navbar/Navbar";
import Intro from "../user_components/Intro/Intro";
import Footer from "../user_components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";

const HomeDesign = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Footer />
    </div>
  );
};

export default HomeDesign;
