
import { Center, Image, SimpleGrid, Box, Text, UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; 
import IMG from '@/asset/hero_image 3.png';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from '@/firebase';
import { notifications } from '@mantine/notifications';
import { Color } from '@/utils/reusable/Theme';

// Define your errors interface
interface Errors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

// Regex patterns for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
const nameRegex = /^[A-Za-z\s]+$/;




const Register = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); 
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',            
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<Errors>({});
    const [serverError, setServerError] = useState('');

    

    const validate = (): boolean => {
        const errors: Errors = {};
        let isValid = true;

        if (!formData.name || !nameRegex.test(formData.name)) {
            errors.name = 'Please enter a valid name';
            isValid = false;
        }

        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.password || !passwordRegex.test(formData.password)) {
            errors.password = 'Password must be at least 8 characters long and include at least one letter and one number';
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (validate()) {
            setLoading(true);
            try {
                await register(); // Await the registration process.
                
                // Notify user on successful registration and email verification
                notifications.show({
                    title: `Registration Successful `,
                    message: `A verification email has been sent to your email address. Please check your inbox.`,
                    color: Color.SUCCESS_COLOR,
                    position:'top-right',
                });
                
            } catch (error) {
                setServerError('Failed to register. Please try again later.');
                notifications.show({
                    title: 'Registration Failed',
                    message: 'Something went wrong. Please try again later.',
                    color: Color.ERROR_COLOR,
                    position:'top-right',
                });
            } finally {
                setLoading(false); // Ensure the loading state is reset after the process.
            }
        }
    };
    
    
    // Remove password from Firestore storage and improve error handling
const register = async () => {
    try {
        const { email, password } = formData;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (user) {
            await sendEmailVerification(user);
            sessionStorage.setItem("userId", user.uid);

            const userDocRef = doc(firestore, 'users', user.uid);
            // Only store name and email, not the password for security reasons
            await setDoc(userDocRef, {
                name: formData.name,
                email,
                password
            });

            navigate('/login');
        }
    } catch (error: any) {
        const errorMessage = error.code === 'auth/email-already-in-use' 
            ? 'This email is already in use.' 
            : 'Failed to register. Please try again later.';
        
        setServerError(errorMessage);
        notifications.show({
            title: 'Registration Failed',
            message: errorMessage,
            color: Color.ERROR_COLOR,
            position: 'top-right',
        });
    }
};

    

    const handleRegister = () => {
        navigate('/login');
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <Center>
            <SimpleGrid cols={{ base: 1, sm: 1,md: 1, lg: 2 }} spacing="xl">
               
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh',
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gap: '10px',
                        width: '100%',
                        maxWidth: '400px',
                        padding: '20px',
                        marginTop: '14rem'
                    }}>
                        <Image src={Logo} style={{
                            width: '5rem',
                            height: '5rem',
                        }} />
                        <div style={{ marginBottom: 10 }}>
                            <Text fz={24} fw={700}>
                                Create Account
                            </Text>
                            <Text fz={16}>
                                Already have an account?
                                <UnstyledButton onClick={handleRegister} style={{ color: Color.PRIMARY, textDecoration: 'underline', fontSize: 16, marginLeft: 10 }}>
                                    Sign In
                                </UnstyledButton>
                            </Text>
                        </div>
                        <SimpleGrid cols={{ base: 1, sm: 1, lg: 1 }} mb={10}>
                            <CustomInput
                                type="text"
                                label="Full Name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                error={errors.name}
                            />
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
                            <CustomInput
                                type="password"
                                label="Confirm Password"
                                name="confirmPassword"
                                placeholder="********"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                error={errors.confirmPassword}
                            />
                        </SimpleGrid>
                        {serverError && <Text color="red" size="sm">{serverError}</Text>}
                        <CustomeButton
                            label="Submit"
                            onClick={handleSubmit}
                            variant="filled"
                            color={Color.PRIMARY}
                            size="md"
                            fullWidth
                            radius="md"
                        />
                        <Text fz={14} fw={300}>
                            By creating an account, you agree to the <span style={{ color: Color.PRIMARY, fontWeight: '500' }}>privacy policy</span> and to receive economic and marketing communications from pan global trade. You can remove yourself from the mailing list at any time.
                        </Text>
                    </div>
                </Box>
                {!isSmallScreen  && (
                    <Box
                        style={{                        
                            width: '100%',
                            height: '100vh',
                        }}
                    >
                        <Image src={IMG} h="100vh" fit="cover" />
                    </Box>
                )}
            </SimpleGrid>
        </Center>
    );
};

export default Register;
