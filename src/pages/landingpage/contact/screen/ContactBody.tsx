import CustomButton from '@/utils/reusable/CustomButton';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomTextArea from '@/utils/reusable/CustomTextArea';
import { Center, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

const ContactBody = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust breakpoint as needed
  
    const handleLogin = () => {
      navigate('/login');
    };
  
    return (
        <Center style={{ height: '60vh' }}>
        <SimpleGrid
          cols={isSmallScreen ? 1 : 2}
          spacing="md"         
        >
          <div>
          <div>
                  <Text fz={24} fw={700}>
                      Contact Us
                  </Text>
                  <Text my={20} style={{ width: isSmallScreen ? '100%' : '30rem', textAlign: isSmallScreen ? 'center' : 'left' }}>
                  Please supply your contact information and message in the form below. One of our team members will contact as soon as possible.
                  </Text>
              </div>
          </div>
          <form style={{ width: '100%' }}>
              
            <SimpleGrid cols={isSmallScreen ? 1 : 2} spacing="sm" >
              <CustomInput placeholder="Name" label="Name" />
              <CustomInput placeholder="Email" label="Email"/>
            </SimpleGrid>
            <SimpleGrid cols={1} spacing="sm" mt="sm">
              <CustomInput placeholder="subject" label="Subject"/>
              <CustomTextArea
              label="Message" 
                placeholder="Say something..."
                highlightColor="#12121250"
                autosize
                minRows={3}
              />
              <CustomButton
                label="Send Now"
                onClick={handleLogin}
                variant="filled"
                color="#0055CC"
                radius="sm"
              />
            </SimpleGrid>
          </form>
        </SimpleGrid>
      </Center>
    );
}

export default ContactBody
