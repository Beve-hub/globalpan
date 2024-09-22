import CustomButton from '@/utils/reusable/CustomButton';
import CustomInput from '@/utils/reusable/CustomInput';
import CustomTextArea from '@/utils/reusable/CustomTextArea';
import { Center, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { Color } from '@/utils/reusable/Theme';



const Support = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust breakpoint as needed

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{ backgroundColor: Color.INFO_BG_COLOR, minHeight: '60vh' }}>
      <Center style={{ height: '60vh' }}>
        <SimpleGrid
          cols={isSmallScreen ? 1 : 2}
          spacing="md"         
        >
          <div>
            <Text
              fz="30"
              fw={700}
              color={Color.WHITE}
              style={{ width: isSmallScreen ? '100%' : '30rem', textAlign: isSmallScreen ? 'center' : 'left' }}
            >
              Request Help from our support team
            </Text>
          </div>
          <form style={{ width: '100%' }}>
            <SimpleGrid cols={isSmallScreen ? 1 : 2} spacing="md" >
              <CustomInput placeholder="Name" />
              <CustomInput placeholder="Email" />
            </SimpleGrid>
            <SimpleGrid cols={1} spacing="md" mt="md">
              <CustomInput placeholder="Name" />
              <CustomTextArea
                placeholder="Type something..."
                highlightColor="green"
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
    </div>
  );
};

export default Support;
