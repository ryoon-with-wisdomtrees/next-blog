"use client";
import { useContext } from "react";
// import styles from "./themeToggle.module.css";
import styled from "styled-components";
import { ThemeContext } from "@/context/ThemeContext";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ToggleButton = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#333" : "#ccc")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 2px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  .circle {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    transform: ${({ isDarkMode }) =>
      isDarkMode ? "translateX(20px)" : "translateX(0)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <>
      {" "}
      <ToggleContainer>
        <ToggleButton
          onClick={toggle}
          isDarkMode={theme !== "light" ? true : false}
        >
          <div className="circle"></div>
        </ToggleButton>
      </ToggleContainer>
      <span>{theme}</span>
    </>
  );
};

export default ThemeToggle;
