import { Center, Image, SimpleGrid, Box,  Text,  } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery
import IMG from '@/asset/hero_image 3.png';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';
import { Color } from './../../utils/reusable/Theme';


const ForgotPassword = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed
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
            navigate('/');
            setLoading(false);
        }, 2000); // Simulate a loading delay of 2 seconds
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
                    <div style={{marginBottom:10}}>
                        <Text fz={24} fw={700}>
                           Forgotten Password
                        </Text>
                     
                    </div>
                    <SimpleGrid  cols={{ base: 1, sm: 1, lg: 1 }} mb={10}>
                   
                    <CustomInput type="text" label='Email' placeholder='example@email.com' required />
                    
                    
                    </SimpleGrid>                       
                    <CustomeButton
                        label="Submit"
                        onClick={handleSubmit}
                        variant="filled"  // Or 'outline', 'light', 'default', etc.
                        color= {Color.PRIMARY}  // You can use any color supported by Mantine
                        size="md"  // Options: 'xs', 'sm', 'md', 'lg', 'xl'
                        fullWidth // Set to true to make the button full width
                        radius="md"                            
                    />
                   
                </div>
            </Box>
        </SimpleGrid>
    </Center>
    )
}

export default ForgotPassword
