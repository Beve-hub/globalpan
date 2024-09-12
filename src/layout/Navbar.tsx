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

const Navbar = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false); // State for the drawer (mobile menu)
  const isMobile = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as needed
  const [scrolled, setScrolled] = useState(false); // State to track scroll position

  const handleLogin = () => {
    navigate("/login");
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled down more than 10px, set scrolled to true
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="nav"     
      style={{
        position: "fixed", // Makes the navbar fixed at the top
        top: 0,
        left: 0,
        backdropFilter: scrolled ? "none" : "blur(10px)", // Apply blur effect initially
        backgroundColor: scrolled ? "white" : "#fff", // Change background on scroll
        width: "100%", // Ensures the navbar spans the full width of the viewport
        zIndex: 1000, // Higher z-index to stay on top of other content
        transition: "background-color 0.3s ease", // Smooth transition for background color change
        boxShadow: scrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none", // Add shadow when scrolled
      }}
    >
      <header>
        <Flex justify="space-between" mx="70" align="center" px="md" py="sm">
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
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      fontSize: "18px",
                      fontWeight: isActive ? "bold" : "normal",
                      color: isActive ? "#293991" : "gray",
                      gap: 20,
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
                  onClick={handleLogin}
                  variant="filled"
                  color="#293991"
                />
                <CustomButton
                  label="Register"
                  onClick={handleLogin}
                  variant="outline"
                  color="#121212"
                />
              </Group>
            </Flex>
          ) : (
            // Burger Menu for Mobile
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
                onClick={() => setOpened(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: rem(10),
                  justifyContent: "flex-start",
                  textDecoration: "none",
                }}
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
