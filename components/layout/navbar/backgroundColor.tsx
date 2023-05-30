/**
 * This file is for the background color of the navbar.
 * The main reason it exists is so that we can still use server stuff in the navbar,
 * while allowing me to use client side code here. The absolute positioning is very jank,
 * but oh well.
 * 
 * lazy will do later
 */

const NavbarBackgroundColor = ({}: {}) => {
  return (
    <nav className="absolute top-0 left-0 right-0 bg-theme-primary h-14 z-40" />
  );
};

export default NavbarBackgroundColor;
