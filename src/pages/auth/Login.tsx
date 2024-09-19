import { Center, Image, SimpleGrid, Box, Group, Text, Checkbox, UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery
import IMG from '@/asset/hero_image 3.png';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { notifications } from '@mantine/notifications';


interface Errors {
    email?: string;
    password?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed
    const [loading, setLoading] = useState(true); // State to manage loading

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<Errors>({});
    const [serverError, setServerError] = useState('');

    const validate = (): boolean => {
        const errors: Errors = {};
        let isValid = true;

        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.password) {
            errors.password = 'Please enter your password';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Hide loader after 2 seconds
        }, 2000); // Adjust the duration as needed
        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    const handleSubmit = async () => {        
        if (validate()) {
            setLoading(true);
            try {
                await login();
                // Notify user on successful registration and email verification
                notifications.show({
                    title: `Login Successful `,
                    message: `Welcome onboard, we are happy to have you`,
                    color: '#299165',
                    position:'top-right',
                });
            } catch (error) {
                setServerError('Failed to log in. Please try again later.');
                notifications.show({
                    title: 'Login Failed',
                    message: 'Something went wrong. Please try again later.',
                    color: 'red',
                    position:'top-right',
                });
            } finally {
                setLoading(false);
            }
        }
    };

    const login = async () => {
        try {
            const { email, password } = formData;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (userCredential && userCredential.user) {
                sessionStorage.setItem('userId', userCredential.user.uid);
                navigate('/profile', {state: {userId: userCredential.user.uid}});
            }
        } catch (error) {
            setServerError('Failed to log in. Please try again later.');
            console.error(error);
        }
    };

    const handleForgot = () => {
        setLoading(true);
        navigate('/recover');
    };

    const handleRegister = () => {
        setLoading(true);
        navigate('/register');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if (loading) {
        return <Loader />;
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
                        <CustomInput
                                type="text"
                                label="Email"
                                name="email"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                error={errors.email}
                            />

                            <CustomInput
                                type="password"
                                label="Password"
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                error={errors.password}
                            />
                        
                        <Box mb={30} style={{display: 'flex', justifyContent:'space-between'}}>
                            <Group>
                                <Checkbox
                                    label="Remember Me"
                                    variant="outline"
                                    size="sm"
                                />                            
                            </Group>
                            <UnstyledButton onClick={handleForgot} style={{color:'#293991'}}>Forgot Password?</UnstyledButton>
                        </Box>
                        {serverError && <Text color="red" size="sm">{serverError}</Text>}
                        <CustomeButton
                            label="Submit"
                            onClick={ handleSubmit}
                            variant="filled"
                            color="#293991"
                            size="md"
                            fullWidth
                            radius="md"
                            
                        />
                    </div>
                </Box>
            </SimpleGrid>
        </Center>
    );
};

export default Login;
