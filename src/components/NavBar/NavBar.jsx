import React from "react";
import Logoo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";

import Hero from "../HeroImage/Hero";

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Logoo />
        <Search />
        <Button children="Give Feedback" />
      </nav>
      <Hero />
    </div>
  );
};

export default NavBar;
