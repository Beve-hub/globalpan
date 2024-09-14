import { Center, Image, SimpleGrid, Box, Group, Text, Checkbox, UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery
import IMG from '@/asset/hero_image 3.png';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';

const Login = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed
    const [loading, setLoading] = useState(true); // State to manage loading

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Hide loader after 2 seconds
        }, 2000); // Adjust the duration as needed
        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/dashboard');
            setLoading(false);
        }, 2000); // Simulate a loading delay of 2 seconds
    };
    const handleForgot = () => {
        navigate('/forgot');
    };
    const handleRegister = () => {
        navigate('/register');
    };
    if (loading) {
        return <Loader />; // Show loader if loading state is true
    }
    return (
        <Center>
            <SimpleGrid cols={{ base: 1, sm: 1, lg: 2 }} spacing="xl">
                {!isSmallScreen && (
                    <Box
                        style={{                        
                            width: '100%',
                            height: '100vh',
                        }}
                    >
                        <Image src={IMG} h="100vh" fit="cover" />
                    </Box>
                )}
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh', // Ensure the container takes up full height
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gap: '10px',
                        width: '100%',
                        maxWidth: '400px', // Restrict form width
                        padding: '20px',
                    }}>
                        <Image src={Logo} style={{
                            width: '5rem',
                            height: '5rem',
                        }} />
                        <div style={{marginTop:10,marginBottom:10}}>
                            <Text fz={30} fw={700}>
                                Sign In
                            </Text>
                            <Text fz={18}>
                                Don’t have an account?
                                <UnstyledButton onClick={handleRegister} style={{color:'#293991',textDecoration: 'underline', fontSize:18, marginLeft:10 }}>
                                    Sign Up
                                </UnstyledButton>
                            </Text>
                        </div>
                        <CustomInput type="text" label='Email' placeholder='example@email.com' required />
                        <CustomInput type="password" label='Password' placeholder='********' required />
                        <Box mb={30} style={{display: 'flex', justifyContent:'space-between'}}>
                            <Group>
                                <Checkbox
                                    label="Remember Me"
                                    variant="outline"
                                    size="sm"
                                />                            
                            </Group>
                            <UnstyledButton onClick={handleForgot} style={{color:'#293991'}}>Forgot Password</UnstyledButton>
                        </Box>
                        <CustomeButton
                            label="Submit"
                            onClick={handleSubmit}
                            variant="filled"  // Or 'outline', 'light', 'default', etc.
                            color="#293991"  // You can use any color supported by Mantine
                            size="md"  // Options: 'xs', 'sm', 'md', 'lg', 'xl'
                            fullWidth // Set to true to make the button full width
                            radius="md"
                            
                        />
                    </div>
                </Box>
            </SimpleGrid>
        </Center>
    );
}

export default Login;
