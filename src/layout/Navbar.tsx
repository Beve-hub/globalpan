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
  import React, { useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import IMG from "@/asset/logo2.png";
  import { NavData, SmNavData } from "@/utils/data/Data";
  import CustomButton from "@/utils/reusable/CustomButton";
  import { useMediaQuery } from "@mantine/hooks";
  
  const Navbar = () => {
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false); // State for the drawer (mobile menu)
    const isMobile = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as needed
  
    const handleLogin = () => {
      navigate("/login");
    };
  
    return (
      <Box component="nav"  bg="grape">
        <header >
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
                    <NavLink key={index} to={item.path} style={{textDecoration: 'none', gap:10,}}>
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
                    color="#008C73"
                    radius="sm"
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
                    textDecoration: 'none'
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
  