import {
    AppShell,
    AppShellHeader,
    Box,
    Burger,
    Group,
    Image,
    Text,
  } from "@mantine/core";
  import { useDisclosure, useMediaQuery } from "@mantine/hooks";
  import { useState } from "react";
  import { NavLink } from "react-router-dom";
  import Logo from "@/asset/logo2.png";
  import { SideBarData } from "@/utils/data/Data";
  import { FaRegCircleUser } from "react-icons/fa6";
  import { FiLogOut, FiSettings } from "react-icons/fi";
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import Invest from "@/pages/dashboard/invest/Invest";
import Withdraw from "@/pages/dashboard/withdraw/Withdraw";
import Analysis from "@/pages/dashboard/analysis/Analysis";
import Transaction from "@/pages/dashboard/transactions/Transaction";
  
  interface Props {}
  
  const SideBar: React.FC<Props> = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const [activePath, setActivePath] = useState(SideBarData[0].path); // Initialize with the first path
    const isSmallScreen = useMediaQuery("(max-width: 768px)");
    const isSmall = useMediaQuery("(min-width: 768px)");
  
    
    const renderContent = () => {
      switch (activePath) {
        case '/dashboard':
          return <Dashboard/>;
        case '/invest':
          return <Invest/>;
        case '/withdraw':
            return <Withdraw/>;  
        case '/analysis':
          return <Analysis/>;
        case '/transaction':
          return <Transaction/>;
        default:
          return <div>Select a section</div>;
      }
    };

    return (
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: isSmallScreen ? '30%' : 230,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShellHeader withBorder={false} pt="md">
          <Group px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group>
             <Image src={Logo} alt="" width={50} height={50} />
             
            </Group>
            
          </Group>
        </AppShellHeader>
  
        <AppShell.Navbar pt="40">
          <Group>
            {SideBarData.map((item, index) => (
             <NavLink
             key={index}
             to={item.path}
             onClick={() => setActivePath(item.path)}
             style={{
               display: "flex",
               justifyContent: "flex-start", // Centers content horizontally
               alignItems: "center", // Centers content vertically
               fontSize: "16px",
               fontWeight: 500,
               cursor: "pointer",
               backgroundColor: activePath === item.path ? "#293991" : "transparent",
               color: activePath === item.path ? "white" : "#333",
               padding: "6px 30px",
               borderRadius: "0px 30px 30px 0",
               transition: "background-color 0.3s ease, color 0.3s ease",
               textDecoration: "none",
               width: "12rem",
             }}
           >
             <Text style={{ marginRight: "8px", display: "flex", alignItems: "center" }}>{item.icon}</Text>
             <Text>{item.name}</Text>
           </NavLink>
            ))}
  
            {isSmallScreen && (
              <Box
                style={{
                  position: "absolute",
                  bottom: 20,
                  width: "80%",
                  borderTop: "1px solid #ccc",
                  padding: 20,
                }}
              >
                <Group display="flex" mt="auto" style={{ width: "100%" }}>
                  <a
                    style={{
                      display: "flex",
                      gap: 10,
                      textDecoration: "none",
                      justifyContent: "center",
                      width: "100%",
                      marginRight: 20,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <FaRegCircleUser size={24} color="gray" />
                    <Text fw="400" fz="16">
                      User Name
                    </Text>
                  </a>
                  <a
                    href="/settings"
                    style={{
                      display: "flex",
                      gap: 10,
                      textDecoration: "none",
                      justifyContent: "center",
                      width: "100%",
                      marginRight: 50,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <FiSettings size={24} color="gray" />
                    <Text fw="400" fz="16" color="#121212">
                      Settings
                    </Text>
                  </a>
                  <a
                    href="/professionalLogin"
                    style={{
                      display: "flex",
                      gap: 10,
                      textDecoration: "none",
                      justifyContent: "center",
                      width: "100%",
                      marginRight: 50,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <FiLogOut size={24} color="gray" />
                    <Text fw="400" fz="16" color="#121212">
                      Log Out
                    </Text>
                  </a>
                </Group>
              </Box>
            )}
            {isSmall && (
              <Box
                style={{
                  position: "absolute",
                  bottom: 40,
                  width: "80%",
                  borderTop: "1px solid #ccc",
                  marginLeft: 30,
                  padding: 20,
                }}
              >
                <Group display="flex" mt="auto" style={{ width: "100%" }}>
                  <a
                    href="/settings"
                    style={{
                      display: "flex",
                      gap: 10,
                      textDecoration: "none",
                      justifyContent: "center",
                      width: "100%",
                      marginRight: 20,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <FiSettings size={24} color="gray" />
                    <Text fw="400" fz="16" color="#121212">
                      Settings
                    </Text>
                  </a>
                  <a
                    href="/professionalLogin"
                    style={{
                      display: "flex",
                      gap: 10,
                      textDecoration: "none",
                      justifyContent: "center",
                      width: "100%",
                      marginRight: 20,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    <FiLogOut size={24} color="gray" />
                    <Text fw="400" fz="16" color="#121212">
                      Log Out
                    </Text>
                  </a>
                </Group>
              </Box>
            )}
          </Group>
        </AppShell.Navbar>
         <AppShell.Main>{renderContent()}</AppShell.Main>
      </AppShell>
    );
  };
  
  export default SideBar;
  