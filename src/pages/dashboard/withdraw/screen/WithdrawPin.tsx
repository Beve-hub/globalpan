import { Center, Text, Paper, UnstyledButton, Modal, Group, Image } from '@mantine/core';
import CustomButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import CustomInput from '@/utils/reusable/CustomInput';
import { useMediaQuery,useDisclosure } from '@mantine/hooks';

import Gif from '@/asset/7efs.gif';
import { useEffect } from 'react';
import { Color } from '@/utils/reusable/Theme';


const WithdrawPin = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Responsive breakpoint


  useEffect(() => {
    // Dynamically load the Lottie Player script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);
 

  const handleInvest = () => {
    navigate('/invest');
  };

  return (
    <div>
      <UnstyledButton
        onClick={handleInvest}
        style={{
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          marginLeft: isSmallScreen ? '1rem' : '10rem', // Adjust margin for small screens
          marginTop: '2rem',
          gap: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            backgroundColor: Color.LIGHT_GRAY,
            padding: '0.5rem',
            borderRadius: 90,
          }}
        >
          <FiChevronLeft size={20} />
        </div>
        <Text fz={18}>Back</Text>
      </UnstyledButton>

      <Center h="40rem" style={{ display: 'grid' }}>
        <Paper
          radius="md"
          p="xl"
          withBorder
          style={{
            width: isSmallScreen ? '90%' : '30rem', // Make width responsive
           
          }}
        >
            <div style={{marginBottom:20}}>
            <Text my={10} fz={isSmallScreen ? 20 : 25} fw={700}> {/* Adjust font size */}
            Enter Transaction Pin
          </Text>

          <CustomInput type="password" label="Transaction Pin" placeholder="******" />

            </div>
          
          <CustomButton
            label="Proceed"
           onClick={open}
            variant="filled"
            color={Color.PRIMARY}
            size="md"
            fullWidth
            radius="md"
          />
        </Paper>
        <Modal opened={opened} onClose={close} centered>
          <div>
            <Group style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ textAlign: 'center' }} fz={25} fw={600}>
                Payment Successful
              </Text>
              <Image src={Gif} />
            </Group>

            <CustomButton
              label='Go Back'
              onClick={() => {
                close();   // Close the modal
                navigate('/withdraw');  // Navigate to the invest page
              }}
              variant='filled'
              color={Color.PRIMARY}
              size='md'
              fullWidth
              radius='md'
            />
          </div>
        </Modal>
      </Center>
    </div>
  );
};

export default WithdrawPin;
