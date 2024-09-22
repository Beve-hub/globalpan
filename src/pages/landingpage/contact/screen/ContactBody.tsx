import CustomButton from '@/utils/reusable/CustomButton';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomTextArea from '@/utils/reusable/CustomTextArea';
import { Center, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { Color } from '@/utils/reusable/Theme';

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
                  <Text fz={28} fw={700}>
                      Contact Us
                  </Text>
                  <Text my={20} c={Color.DARK_GRAY} style={{ width: isSmallScreen ? '100%' : '30rem', textAlign: isSmallScreen ? 'center' : 'left',fontSize:isSmallScreen ? '14px' : '18px' }}>
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
                color={Color.PRIMARY}
                radius="sm"
              />
            </SimpleGrid>
          </form>
        </SimpleGrid>
      </Center>
    );
}

export default ContactBody
