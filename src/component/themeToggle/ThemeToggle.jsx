"use client";
import { useContext } from "react";
// import styles from "./themeToggle.module.css";
import styled from "styled-components";
import { ThemeContext } from "@/context/ThemeContext";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  // margin-top: 20px;
`;
// #4B4737
const ToggleButton = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${({ isdarkmode }) =>
    isdarkmode === "light" ? "#FFFF" : "#0f172a"};
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  .circle {
    width: 15px;
    height: 15px;
    background-color: ${({ isdarkmode }) =>
      isdarkmode === "light" ? "#0f172a" : "#FFFF"};
    border-radius: 50%;
    transform: ${({ isdarkmode }) =>
      isdarkmode === "light" ? "translateX(20px)" : "translateX(0)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <>
      <ToggleContainer>
        <ToggleButton
          onClick={toggle}
          isdarkmode={
            theme.toString() === "light" ? theme.toString() : undefined
          }
        >
          <div className="circle"></div>
        </ToggleButton>
      </ToggleContainer>
      {/* <span>{theme}</span> */}
    </>
  );
};

export default ThemeToggle;
