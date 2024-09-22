import {
  Box,
  Group,
  Image,
  Burger,
  Drawer,
  Flex,
  rem,
  ScrollArea,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import IMG from "@/asset/logo2.png";
import { NavData, SmNavData } from "@/utils/data/Data";
import CustomButton from "@/utils/reusable/CustomButton";
import { useMediaQuery } from "@mantine/hooks";
import useBodyOverflow from "./useBodyOverflow";
import { Color } from "@/utils/reusable/Theme";

const Navbar = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false); // State for the drawer (mobile menu)
  const [pendingPath, setPendingPath] = useState(""); // State to manage pending navigation path
  const isMobile = useMediaQuery("(max-width: 1024px)"); // Adjust the breakpoint for medium (1024px) and small screens
  const [scrolled, setScrolled] = useState(false); // State to track scroll position

  useBodyOverflow(false); // No loading anymore, just pass false

  // Effect to handle delayed navigation when pendingPath changes
  useEffect(() => {
    if (pendingPath) {
      navigate(pendingPath);
      setPendingPath(""); // Reset pending path after navigation
    }
  }, [pendingPath, navigate]);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    if (path) {
      setPendingPath(path);
    }
  };

  return (
    <Box
      component="nav"
      style={{
        position: "fixed", // Makes the navbar fixed at the top
        top: 0,
        left: 0,
        backdropFilter: scrolled ? "none" : "blur(10px)", // Apply blur effect initially
        backgroundColor: scrolled ? Color.WHITE : Color.TRANSPARENT_WHITE, // Change background on scroll
        width: "100%", // Ensures the navbar spans the full width of the viewport
        zIndex: 1000, // Higher z-index to stay on top of other content
        transition: "background-color 0.3s ease", // Smooth transition for background color change
        boxShadow: scrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none", // Add shadow when scrolled
      }}
    >
      <header>
        <Flex justify="space-between" mx="30" align="center" px="sm" py="sm">
          {/* Logo Section */}
          <a>
            <Image src={IMG} alt="logo" height={70} width="auto" />
          </a>

          {/* Conditional Rendering for Menu */}
          {!isMobile ? (
            // Desktop Menu
            <Flex
              justify="space-between"
              align="center"
              style={{ flex: 1, marginLeft: rem(40), marginRight: rem(40) }}
            >
              {/* Centered Navigation Links */}
              <Group style={{ flex: 1, justifyContent: "center" }}>
                {NavData.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default navigation
                      handleNavClick(item.path); // Handle custom navigation
                    }}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      fontSize: "17px",
                      fontWeight: isActive ? "bold" : "normal",
                      color: isActive ? Color.PRIMARY : Color.GRAY,
                      gap: 40,
                    })}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </Group>

              {/* Right-aligned Button */}
              <Group>
                <CustomButton
                  label="Login"
                  onClick={() => handleNavClick("/login")}
                  variant="filled"
                  color= {Color.PRIMARY}
                />
                <CustomButton
                  label="Register"
                  onClick={() => handleNavClick("/register")}
                  variant="outline"
                  color={Color.PRIMARY}
                />
              </Group>
            </Flex>
          ) : (
            // Burger Menu for Medium and Small Screens
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              aria-label="Toggle navigation"
            />
          )}
        </Flex>

        {/* Drawer for Mobile Menu */}
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          padding="md"
          size="70%"
          title="Menu"
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            {SmNavData.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => {
                  setOpened(false);
                  handleNavClick(item.path); // Handle custom navigation
                }}

                style={({ isActive }) => ({
                  textDecoration: "none",
                  fontSize: "17px",
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? Color.PRIMARY : Color.GRAY,
                  gap: 40,
                  display: "block",
                  textAlign: "center",
                  padding: rem(10),
                  justifyContent: "flex-start",
                })}
                
              >
                {item.name}
              </NavLink>
            ))}
          </ScrollArea>
        </Drawer>
      </header>
    </Box>
  );
};

export default Navbar;
