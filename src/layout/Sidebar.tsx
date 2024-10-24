import {
  AppShell,
  AppShellHeader,
  Avatar,
  Box,
  Burger,
  Center,
  Group,
  Image,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/asset/logo2.png";
import { SideBarData } from "@/utils/data/Data";
import { FiLogOut } from "react-icons/fi";
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import Invest from "@/pages/dashboard/invest/Invest";
import Withdraw from "@/pages/dashboard/withdraw/Withdraw";
import Analysis from "@/pages/dashboard/analysis/Analysis";
import Transaction from "@/pages/dashboard/transactions/Transaction";
import Settings from "@/pages/dashboard/settings/Settings";
import { useAuth } from '@/layout/AuthProvider';
import { firestore } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import Admin from "@/pages/admin/Admin";
import { Color } from "@/utils/reusable/Theme";


const SideBar = () => {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const [activePath, setActivePath] = useState(SideBarData[0].path); // Initialize with the first path
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isSmall = useMediaQuery("(min-width: 768px)");
  const { logout } = useAuth();
  const [name, setName] = useState<string>(() => {
    return localStorage.getItem('name') || '';
  });
  const [role, setRole] = useState<string>(() => {
    return localStorage.getItem('role') || '';
  });

  const { state } = useLocation();
  const userId = state?.userId || '';

  // Function to return a random color from a set of Mantine colors
  const getRandomColor = () => {
    const colors = ['blue', 'red', 'green', 'orange', 'pink', 'violet'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const validateName = (name: string): string => {
    if (name.length < 4) {
      return 'User'; // Default name for too short names
    }
    if (name.length > 12) {
      return name.substring(0, 12); // Truncate names longer than 12 characters
    }
    return name; // Return the name as is if it is within the valid range
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(firestore, 'users', userId);
        const snapshot = await getDoc(userDocRef);
        if (snapshot.exists()) {
          const userDetails = snapshot.data();
          const validatedName = validateName(userDetails.firstName);
          setName(validatedName);
          localStorage.setItem('name', validatedName);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        const userDocRef = doc(firestore, 'users', userId);
        const snapshot = await getDoc(userDocRef);
        if (snapshot.exists()) {
          const userDetails = snapshot.data();
          console.log('userDetails', userDetails);

          if (userDetails) {
            setName(userDetails.name || '');
            setRole(userDetails.role || '');           
          }
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchPersonalInfo();
  }, [userId]);
  

  const renderContent = () => {
    switch (activePath) {
      case '/dashboard':
        return <Dashboard />;

      case '/invest':
        return <Invest />;

      case '/withdraw':
        return <Withdraw />;
      case '/analysis':
        return <Analysis />;
      case '/transaction':
        return <Transaction />;
      case '/settings':
        return <Settings />;
        case '/admin':
        return <Admin />;
      default:
        return <div>Select a section</div>;
    }
  };

   // Filter sidebar data based on user role
   const filteredSideBarData = SideBarData.filter(item => {
    if (role === 'investor' && item.name === 'Admin') {
      return false; // Hide admin for investors
    }
    return true; // Show other items
  });
  const handleClick = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('firstName'); // Remove firstName from localStorage on logout
    logout();
    navigate('/login');
  };



  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: isSmallScreen ? '25%' : 230,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShellHeader withBorder={false} pt="md">
        <Group px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image src={Logo} alt="" width={50} height={50} style={{ marginLeft: 40 }} />
        </Group>
      </AppShellHeader>

      <AppShell.Navbar pt="40">
        <Group>
        {filteredSideBarData.map((item, index) => (
  <NavLink
    key={index}
    to={item.path}
    onClick={() => setActivePath(item.path)}
    style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: "18px",
      fontWeight: 500,
      cursor: "pointer",
      background: activePath === item.path
        ? "linear-gradient(90deg, #293991 100%, transparent 0%)"
        : "transparent",
      backgroundSize: activePath === item.path ? "100% 100%" : "0 100%",
      backgroundPosition: "left center",
      color: activePath === item.path ? Color.WHITE : Color.GRAY,
      padding: "10px 30px",
      borderRadius: "0px 30px 30px 0",
      textDecoration: "none",
      width: "12rem",
      // Animate background size and color
      transition: "background-size 0.5s ease-in-out, color 0.5s ease-in-out",
    }}
    onMouseEnter={(e) => {
      if (activePath !== item.path) {
        e.currentTarget.style.backgroundSize = "100% 100%";
      }
    }}
    onMouseLeave={(e) => {
      if (activePath !== item.path) {
        e.currentTarget.style.backgroundSize = "0 100%";
      }
    }}
  >
    <Text style={{ marginRight: "8px", display: "flex", alignItems: "center" }}>
      {item.icon}
    </Text>
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
              <Center display="grid" mt="auto" style={{ width: "100%", gap: 20 }}>
                <a
                  style={{
                    display: "flex",
                    gap: 10,
                    textDecoration: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <Avatar radius="xl" color={getRandomColor()}>
                    {name ? name.substring(0, 2).toUpperCase() : "?"}
                  </Avatar>
                  <Text fw="400" fz="16" color={Color.BLACK}>
                    {name}
                  </Text>
                </a>

                <UnstyledButton
                  onClick={handleClick}
                  style={{
                    display: "flex",
                    gap: 10,
                    textDecoration: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <FiLogOut size={20} />
                  <Text fw="400" fz="16" color={Color.BLACK}>
                    Log Out
                  </Text>
                </UnstyledButton>
              </Center>
            </Box>
          )}
          {isSmall && (
            <Box
              style={{
                position: "absolute",
                bottom: 40,
                width: "80%",
                borderTop: "1px solid #ccc",                
                padding: 20,
              }}
            >
              <Center display="grid" mt="auto" style={{ width: "100%", gap: 20 }}>
              
                <Text
                  style={{
                    display: "flex",
                    gap: 10,
                    textDecoration: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <Avatar radius="xl" color={getRandomColor()}>
                    {name ? name.substring(0, 2).toUpperCase() : "?"}
                  </Avatar>
                  <Text fw="400" fz="16" color={Color.BLACK}>
                    {name}
                  </Text>
                </Text>

                <UnstyledButton
                  onClick={handleClick}
                  style={{
                    display: "flex",
                    gap: 10,
                    textDecoration: "none",
                    justifyContent: "center",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <FiLogOut size={20} />
                  <Text fw="400" fz="16" color={Color.BLACK}>
                    Log Out
                  </Text>
                </UnstyledButton>
              </Center>
            </Box>
          )}
        </Group>
      </AppShell.Navbar>
      <AppShell.Main>{renderContent()}</AppShell.Main>
    </AppShell>
  );
};

export default SideBar;
