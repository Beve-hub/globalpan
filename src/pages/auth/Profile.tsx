import { Box, Center, Image, Text, SimpleGrid } from '@mantine/core';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';
import ReactFlagsSelect from 'react-flags-select';
import { useAuth } from '@/layout/AuthProvider';  
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { notifications } from '@mantine/notifications';

interface Errors {
  address?: string;
  phoneNumber?: string;
  zip?: string;
  country?: string;
}

const phoneRegex = /^\+?[0-9\s()-]{10,15}$/;
const addressRegex = /^[A-Za-z0-9\s,.'-]{3,}$/;
const zipcodeRegex = /^[0-9]{5,6}$/;

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    address: '',
    country: '',
    phoneNumber: '',
    zip: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const {user} = useAuth();
  const { state } = useLocation();

    console.log('users', state);  
    const userId = state?.userId || '';
    console.log('User ID:', userId);


  const validate = (): boolean => {
    const errors: Errors = {};
    let isValid = true;

    if (!formData.address || !addressRegex.test(formData.address)) {
      errors.address = 'Please enter a valid address';
      isValid = false;
    }

    if (!formData.country) {
      errors.country = 'Please select a country';
      isValid = false;
    }

    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.zip || !zipcodeRegex.test(formData.zip)) {
      errors.zip = 'Please enter a valid zip code';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (countryCode: string) => {
    setFormData({ ...formData, country: countryCode });
  };


  const handleSubmit = async () => {
    if (validate() && user) {
      setLoading(true);
      try {
        const db = getFirestore();
        const userDocRef = doc(db, 'users', userId);
        console.log('doc', userDocRef)
        // Check if the document exists
        const docSnap = await getDoc(userDocRef);
  
        if (docSnap.exists()) {
          await updateDoc(userDocRef, {
            address: formData.address,
            country: formData.country,
            phoneNumber: formData.phoneNumber,
            zip: formData.zip,
          });
          
          notifications.show({
            title: 'Profile Updated',
            message: 'Your profile has been successfully updated.',
            color: 'green',
            position: 'top-right',
          });
        } else {
          throw new Error('User document does not exist');
        }
  
        setLoading(false);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error updating profile:', error);
        setLoading(false);
        notifications.show({
          title: 'Update Failed',
          message: 'There was an issue updating your profile. Please try again later.',
          color: 'red',
          position: 'top-right',
        });
      }
    }
  };
  
  
  if (loading) {
    return <Loader />; // Show loader if loading state is true
  }

  return (
    <div>
      <Center h='100vh'>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor:'#FCFCFC',
            alignItems: 'center',
            height: '90vh',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            padding:20
          }}
        >
          <Center
          h='50vh'
            style={{
              display: 'grid',             
              padding: '20px',
              justifyContent:'center',
              alignContent: 'center',
            }}
          >
            <Image
              src={Logo}
              style={{
                width: '5rem',
                height: '5rem',
              }}
            />
            <div style={{ marginTop: 20, }}>
              <Text fz={24} fw={700}>
                Complete your profile
              </Text>
              <Text fz={16} color='#12121290' mb={20}>
                We will need more information to complete your profile
              </Text>
            </div>
            <SimpleGrid cols={{ base: 1, sm: 1, lg: 1 }} mb={10}>
            <CustomInput
                type="tel"
                label="Phone Number"
                name="phoneNumber"
                placeholder="+1 (234) 456378"
                required
                error={errors.phoneNumber}
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <CustomInput
                type="text"
                label="Resident Address"
                name="address"
                placeholder="block 23 fort worth street"
                value={formData.address}
                onChange={handleInputChange}
                required
                error={errors.address}
              />
               <CustomInput
                type="numeric"
                label="Zip Code"
                name="zip"
                placeholder="209102"
                required
                error={errors.zip}
                value={formData.zip}
                onChange={handleInputChange}
              />
              <div >
                <Text fz={14} fw={500}>Country <span style={{color:'#CC0000'}}>*</span></Text>
              <ReactFlagsSelect
                selected={formData.country}
                onSelect={handleCountrySelect}
                searchable
                searchPlaceholder="Search countries"
                placeholder="Select Country"
              />
              {errors.country && <Text color="red">{errors.country}</Text>}
              </div>
             
             
            </SimpleGrid>
            <CustomeButton
              label="Submit"
              onClick={handleSubmit}
              variant="filled" // Or 'outline', 'light', 'default', etc.
              color="#293991" // You can use any color supported by Mantine
              size="md" // Options: 'xs', 'sm', 'md', 'lg', 'xl'
              fullWidth // Set to true to make the button full width
              radius="md"
            />
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Profile;
