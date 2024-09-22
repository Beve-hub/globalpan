import {Center, Image, Paper, Text, Title  } from '@mantine/core';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';
import { Color } from '@/utils/reusable/Theme';


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
        <Center  style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40rem',
            padding: '16px',
          }}>
            <div
                  style={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',              
                  }}
                >
                    <div>
                        <div>
                        <Image src={Logo} style={{
                            width: '5rem',
                            height: '5rem',
                        }} />
                        </div>
                        

                        <div style={{ width: '25rem',  }}>
                            <div>
                            <Title  ta="center" fz={24} >
                                Reset Password
                            </Title>        
                            <Text  c={Color.GRAY} fz="sm" ta="center">
                               Let us help you recover your account.
                             </Text> 
                            </div>
                                              
                        </div>
                        <Paper withBorder shadow='md' p={30} radius="md" mt='xl'>
                        <div style={{marginBottom:20}}>
                        <CustomInput type="password" label='NewPassword' placeholder='********' required />
                        <CustomInput type="password" label='Confirm Password' placeholder='********' required />
                            
                        </div>
                                       
                        <CustomeButton
                            label="Submit"
                            onClick={handleSubmit}
                            variant="filled"  // Or 'outline', 'light', 'default', etc.
                            color="#293991"  // You can use any color supported by Mantine
                            size="md"  // Options: 'xs', 'sm', 'md', 'lg', 'xl'
                            fullWidth // Set to true to make the button full width
                            radius="md"                            
                        />
                        </Paper> 
                    </div>
                </div>
        </Center>
    );
}

export default ResetPassword
