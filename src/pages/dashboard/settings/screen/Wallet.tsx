import CustomButton from '@/utils/reusable/CustomButton';
import CustomInput from '@/utils/reusable/CustomInput';
import { Text } from '@mantine/core';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { auth,} from '@/firebase';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { doc, getDoc, getFirestore,updateDoc } from 'firebase/firestore';  // For Firestore update
import { notifications } from '@mantine/notifications';
import { Color } from '@/utils/reusable/Theme';

interface Errors {
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
}

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

const Wallet = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<Errors>({});
    const [serverError, setServerError] = useState('');

    const { state } = useLocation();
    const userId = state?.userId || '';  // Retrieve userId from location state

    const validate = (): boolean => {
        const errors: Errors = {};
        let isValid = true;

        if (!formData.oldPassword || !passwordRegex.test(formData.oldPassword)) {
            errors.oldPassword = 'Please enter correct password';
            isValid = false;
        }

        if (!formData.newPassword || !passwordRegex.test(formData.newPassword)) {
            errors.newPassword = 'Password must be at least 8 characters long and include at least one letter and one number';
            isValid = false;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

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
                await updateUserPassword();  // Call the password update function
                notifications.show({
                    title: 'Profile Updated',
                    message: 'Your profile has been successfully updated.',
                    color: Color.SUCCESS_COLOR,
                    position: 'top-right',
                });
            } catch (error) {
                setServerError('Failed to update the password. Please try again later.');
                notifications.show({
                    title: 'Password Update Failed',
                    message: 'Something went wrong. Please try again later.',
                    color: Color.ERROR_COLOR,
                    position: 'top-right',
                });
            } finally {
                setLoading(false);
            }
        }
    };

    const updateUserPassword = async () => {
        const user = auth.currentUser;
    
        if (user && user.email) {
            const credential = EmailAuthProvider.credential(user.email, formData.oldPassword);
    
            try {
                // Re-authenticate the user before updating the password
                await reauthenticateWithCredential(user, credential);              
    
                const db = getFirestore();
                const userDocRef = doc(db, 'users', userId);  // Firestore user document
    
                // Retrieve the user document
                const docSnap = await getDoc(userDocRef);
    
                if (docSnap.exists()) {
                    // Update Firestore with the new password (or any metadata if needed)
                    await updateDoc(userDocRef, {
                        newPassword: formData.newPassword,  // Example of updating an additional field
                    });
    
                  
                } else {
                    throw new Error('User document does not exist');
                }
    
                navigate('/depositSummary');
            } catch (error: any) {
                setLoading(false);
                if (error.code === 'auth/wrong-password') {
                    setServerError('The old password is incorrect.');
                } else {
                    setServerError('Failed to update password. Please try again.');
                }
            }
        } else {
            setServerError('No user is logged in.');
            setLoading(false);
        }
    };
    

    return (
        <div>
            <div style={{ backgroundColor: Color.INFO_COLOR, height: 'auto', padding: 20 }}>
                <Text fz={20} fw={600} mb={20}>
                    Change Password
                </Text>
                {serverError && <Text color="red">{serverError}</Text>}
                <div>
                    <div style={{ marginBottom: 30 }}>
                        <CustomInput
                            label="Old Password"
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handleInputChange}
                            required
                            error={errors.oldPassword}
                        />
                        <CustomInput
                            label="New Password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            required
                            error={errors.newPassword}
                        />
                        <CustomInput
                            label="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            error={errors.confirmPassword}
                        />
                    </div>
                    <CustomButton
                        label={loading ? <Oval height="20" width="20" color="#4fa94d" ariaLabel="oval-loading" /> : 'Update Password'}
                        onClick={handleSubmit}
                        variant="filled"
                        color={Color.PRIMARY}
                        size="md"
                        fullWidth
                        radius="md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Wallet;
