import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Search from "../search/Search";
import { ThemeContext } from "@/context/ThemeContext";
import Logo from "@/app/Logos/Logo";

const Navbar = () => {
  const isDark = "dark";
  // const { theme } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Logo />
      </div>
      <div className={styles.logo}>Ryoon-log</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <AuthLinks />
        {/* <Search /> */}
      </div>
      {/* div. .styles */}
    </div>
  );
};

export default Navbar;
