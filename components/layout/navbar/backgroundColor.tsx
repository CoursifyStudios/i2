"use client";

import { useEffect, useState } from "react";

/**
 * This file is for the background color of the navbar.
 * The main reason it exists is so that we can still use server stuff in the navbar,
 * while allowing me to use client side code here. The absolute positioning is very jank,
 * but oh well.
 */

const NavbarBackgroundColor = ({}: {}) => {
  const [scroll, setScroll] = useState(0);

	useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
	
  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-14 z-40 bg-theme-primary transition duration-300 ${scroll == 0 ? "bg-opacity-0" : "bg-opacity-100 duration-500"}`}
      //onScroll={(e) => alert("scrolled")}
    />
  );
};

export default NavbarBackgroundColor;
