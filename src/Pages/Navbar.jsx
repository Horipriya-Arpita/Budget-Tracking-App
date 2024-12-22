
import React, { useState, useEffect } from "react";
import { useTheme } from "../Hooks/ThemeProvider";
import Switch from "../Components/NavComponents/Switch";
import NavbarItem from "../Components/NavComponents/NavbarItem";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import styled from "styled-components";
import logo from "../Components/Icons/assets/Expense-removebg.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  // Handle window resize to dynamically adjust mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (path) => {
    setMenuOpen(false); // Close menu when a link is clicked
    navigate(path);
  };

  const navbarStyle = {
    padding: "10px 20px",
    boxShadow: theme.boxShadow,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.navbar.navbarBg,
    color: theme.navbar.navbarColor,
    position: "relative",
    zIndex: 1000,
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? "block" : "none",
    position: "absolute",
    top: "60px",
    right: "10px",
    background: theme.navbar.navbarBg,
    boxShadow: theme.boxShadow,
    borderRadius: "8px",
    padding: "10px",
    width: "200px",
    zIndex: 1000,
  };

  const navLinksStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: isMobileView ? "flex" : "none",
    flexDirection: "column",
    gap: "10px",
  };

  const desktopLinksStyle = {
    display: isMobileView ? "none" : "flex",
    gap: "20px",
    alignItems: "center",
  };

  const menuIconStyle = {
    display: isMobileView ? "block" : "none",
    cursor: "pointer",
  };

  const Logo = styled.div`
    img {
      height: 50px;
      width: auto;
    }
  `;

  return (
    <nav style={navbarStyle}>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>

      {/* Hamburger Menu for Mobile */}
      <div style={menuIconStyle} onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Navigation Links */}
      <div style={isMobileView ? mobileMenuStyle : {}}>
        <ul style={isMobileView ? navLinksStyle : desktopLinksStyle}>
          <NavbarItem onClick={() => handleNavClick("")}>Home</NavbarItem>
          <NavbarItem onClick={() => handleNavClick("/login")}>Login</NavbarItem>
          <NavbarItem onClick={() => handleNavClick("/register")}>
            Register
          </NavbarItem>
          <NavbarItem onClick={() => handleNavClick("/records")}>
            Records
          </NavbarItem>
          <NavbarItem onClick={() => handleNavClick("/analysis")}>
            Analysis
          </NavbarItem>
          <NavbarItem onClick={() => handleNavClick("/budgets")}>
            Budgets
          </NavbarItem>
          <NavbarItem onClick={() => handleNavClick("/accounts")}>
            Accounts
          </NavbarItem>
          <NavbarItem onClick={() => handleNavClick("/categories")}>
            Categories
          </NavbarItem>

          <NavbarItem onClick={() => handleNavClick("/profile")}>
            Profile
          </NavbarItem>
        </ul>
      </div>

      <Switch toggleTheme={toggleTheme} />

      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "#4CAF50",
        }}
        onClick={() => handleNavClick("/add")}
      >
        <Add />
      </Fab>
    </nav>
  );
};

export default Navbar;
