import Logo from "@/app/Logos/Logo";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";
import styled from "styled-components";

const Navbar = () => {
  // const { toggle, theme } = useContext(ThemeContext);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <Logo styles={styles} />
        <div className={styles.logo}>Ryoon with wisdomTrees</div>
        <div className={styles.links}>
          <ThemeToggle />
          <Link href={"/"} className={styles.links}>
            Home
          </Link>
          <Link href={"/"} className={styles.links}>
            About
          </Link>
          <AuthLinks />
          {/* <Search /> */}
        </div>
        {/* div. .styles */}
      </div>
    </div>
  );
};

export default Navbar;

// const NavContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// height: 80px;
// /* background-color:#625600 ; */
// /* margin-top: 20px; */
// border:1px solid #FFF9E8;
// margin-left: auto;
// margin-right: auto;
// /* background-color: yellowgreen; */
// padding-left: 80px;
// padding-right: 80px;
// border-radius: 24px;
// color: #E9E3C3;
// `
