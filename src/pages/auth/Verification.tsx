import { Center, Image, SimpleGrid, Box, Text, PinInput, Group, UnstyledButton } from '@mantine/core';
import Logo from '@/asset/logo.png';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';


const Verification = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Hide loader after 2 seconds
        }, 2000); // Adjust the duration as needed
        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

     const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/profileDetails');
            setLoading(false);
        }, 2000); // Simulate a loading delay of 2 seconds
    };
   
    

    if (loading) {
        return <Loader />; // Show loader if loading state is true
    }
    return (
        <Center>
            <SimpleGrid cols={{ base: 1, sm: 1, lg: 1 }} spacing="xl">
               
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '40vh', // Ensure the container takes up full height
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gap: '10px',
                        width: '100%',
                        maxWidth: '400px', // Restrict form width
                        padding: '20px',
                        marginTop: '14rem'
                    }}>
                        <Image src={Logo} style={{
                            width: '5rem',
                            height: '5rem',
                        }} />
                        <div>
                            <Text fz={24} fw={700}>
                                One-Time Verification
                            </Text>
                            <Text fz={14}>
                                Provide the otp code sent to your email @example.com                              
                            </Text>
                        </div>
                                       <Center my={40}>
                                       <PinInput length={6} type="number"  inputType="tel"/>
                                        </Center>      
                        <CustomeButton
                            label="Confirm"
                            onClick={handleSubmit}
                            variant="filled"  // Or 'outline', 'light', 'default', etc.
                            color="#293991"  // You can use any color supported by Mantine
                            size="md"  // Options: 'xs', 'sm', 'md', 'lg', 'xl'
                            fullWidth // Set to true to make the button full width
                            radius="md"                            
                        />     
                        <Group justify='space-between ' >
                            <UnstyledButton  style={{color:'#293991',textDecoration: 'underline', fontSize:16, marginLeft:10 }}>
                                Resend 
                            </UnstyledButton>
                            <Text fz={16}>
                                Time: 0:30sec                              
                            </Text>
                        </Group>             
                    </div>
                </Box>
            </SimpleGrid>
        </Center>
    );
}

export default Verification
