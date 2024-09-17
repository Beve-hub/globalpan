import { Box, Center, Image, Text, SimpleGrid } from '@mantine/core';
import Logo from '@/asset/logo.png';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomeButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '@/utils/reusable/Loader';
import ReactFlagsSelect from 'react-flags-select';

interface Errors {
  address?: string;
  phoneNumber?: string;
  zip?: string;
  country?: string;
}

const phoneRegex = /^[0-9]{10,11}$/;
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

  const handleSubmit = () => {
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        navigate('/verification');
        setLoading(false);
      }, 2000);
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
            height: '80vh',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            
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
                type="text"
                label="Resident Address"
                name="address"
                placeholder="block 23 fort worth street"
                value={formData.address}
                onChange={handleInputChange}
                required
                error={errors.address}
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
              <CustomInput
                type="numeric"
                label="Phone Number"
                name="phoneNumber"
                placeholder="+1(234)456378"
                required
                error={errors.phoneNumber}
                value={formData.phoneNumber}
                onChange={handleInputChange}
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
