"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const Logo = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      {" "}
      <Image
        src={`/assets/new/${theme}/Instagram.svg`}
        alt="Instagram"
        width={24}
        height={24}
        style={{ cursor: "pointer" }}
      />
      <Image
        src={`/assets/new/${theme}/Twitter.svg`}
        alt="Twitter"
        width={24}
        height={24}
        style={{ cursor: "pointer" }}
      />
      <Image
        src={`/assets/new/${theme}/github-mark.svg`}
        alt="github"
        width={24}
        height={24}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default Logo;
