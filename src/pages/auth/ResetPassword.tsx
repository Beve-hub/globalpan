import { Center, Image, SimpleGrid, Box,  Text, } from '@mantine/core';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';


const ResetPassword = () => {
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
            navigate('/dashboard');
            setLoading(false);
        }, 2000); // Simulate a loading delay of 2 seconds
    };  
   

    if (loading) {
        return <Loader />; // Show loader if loading state is true
    }
    return (
        <Center>
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
                        marginTop: '14rem'
                    }}>
                        <Image src={Logo} style={{
                            width: '5rem',
                            height: '5rem',
                        }} />
                        <div style={{marginBottom:10}}>
                            <Text fz={24} fw={700}>
                                Create Account
                            </Text>                           
                        </div>
                        <SimpleGrid  cols={{ base: 1, sm: 1, lg: 2 }} mb={10}>
                     <CustomInput type="password" label='NewPassword' placeholder='********' required />
                        <CustomInput type="password" label='Confirm Password' placeholder='********' required />
                        
                        </SimpleGrid>                       
                        <CustomeButton
                            label="Submit"
                            onClick={handleSubmit}
                            variant="filled"  // Or 'outline', 'light', 'default', etc.
                            color="#293991"  // You can use any color supported by Mantine
                            size="md"  // Options: 'xs', 'sm', 'md', 'lg', 'xl'
                            fullWidth // Set to true to make the button full width
                            radius="md"                            
                        />
                        <Text fz={14} fw={300}>
                            By creating an account, you agree to the <span style={{color:'#293991', fontWeight:'500'}}>privacy policy</span> and to receive economic and marketing communications from pan global trade. You can remove yourself from the mailing list at anytime.
                            </Text>
                    </div>
                </Box>
        </Center>
    );
}

export default ResetPassword
