import { Center, Image, SimpleGrid, Box,  Text,  UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery
import IMG from '@/asset/hero_image 3.png';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed

    const handleSubmit = () => {
        navigate('/dashboard');
    };
   
    const handleRegister = () => {
        navigate('/register');
    };

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
                            <Text fz={16}>
                                Already have an account?
                                <UnstyledButton onClick={handleRegister} style={{color:'#293991',textDecoration: 'underline', fontSize:16, marginLeft:10 }}>
                                    Sign In
                                </UnstyledButton>
                            </Text>
                        </div>
                        <SimpleGrid  cols={{ base: 1, sm: 1, lg: 2 }} mb={10}>
                        <CustomInput type="text" label='Full Name' placeholder='john Doe' required />
                        <CustomInput type="text" label='Email' placeholder='example@email.com' required />
                        <CustomInput type="numeric" label='Phone Number' placeholder='+1(234)456789' required />
                        <CustomInput type="country" label='Country' placeholder='example@email.com' required />
                        <CustomInput type="numeric" label='Zip Code' placeholder='example@email.com' required />
                        <CustomInput type="text" label='Address' placeholder='example@email.com' required />
                        <CustomInput type="password" label='Password' placeholder='********' required />
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
            </SimpleGrid>
        </Center>
    );
}

export default Register
