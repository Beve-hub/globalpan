import React, { useEffect } from 'react';
import { Paper, Modal, ActionIcon, Box, Center, CopyButton, Group, Text, Tooltip, UnstyledButton, Image } from '@mantine/core';
import CustomButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { IoCopyOutline, IoCheckmark } from 'react-icons/io5';
import { useDisclosure } from '@mantine/hooks';
import Gif from '@/asset/7efs.gif';

const Payment = ({ ...props }) => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const handleInvest = () => {
    navigate('/invest');
  };

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

  return (
    <div>
      <UnstyledButton
        onClick={handleInvest}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '10rem',
          marginTop: '2rem',
          gap: 10,
        }}
      >
        <div style={{ display: 'flex', backgroundColor: '#12121210', padding: '0.5rem', borderRadius: 90 }}>
          <FiChevronLeft size={20} />
        </div>
        <Text fz={18}>Back</Text>
      </UnstyledButton>

      <Center
        h='40rem'
        style={{
          display: 'grid',
          placeItems: 'center',
          padding: '1rem',
          gap: '1rem',
        }}
      >
        <Paper radius='md' p='xl' withBorder {...props} style={{ width: '100%', maxWidth: '30rem' }}>
          <div style={{ marginBottom: 30 }}>
            <Text fz={25} fw={700}>
              Proceed To Payment
            </Text>
            <Text fz={16} fw={300}>
              Please follow the instructions below. Copy the wallet address and network, and confirm them before making
              payment.
            </Text>
          </div>
          <Box mb={40}>
            <Group my={20} style={{ justifyContent: 'space-between' }}>
              <Text fz={16}>Wallet :</Text>
              <Text fz={16}>Bitcoin</Text>
            </Group>
            <Group my={20} style={{ justifyContent: 'space-between' }}>
              <Text fz={16}>
                Wallet Address :
              </Text>
              <Text fz={16}>
                2345678736hxncj{' '}
                <CopyButton value='2345678736hxncj' timeout={2000}>
                  {({ copied, copy }) => (
                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position='right'>
                      <ActionIcon color={copied ? 'teal' : 'gray'} variant='subtle' onClick={copy}>
                        {copied ? <IoCheckmark size={16} /> : <IoCopyOutline size={16} />}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              </Text>
            </Group>
            <Group my={20} style={{ justifyContent: 'space-between' }}>
              <Text fz={16}>Network Channel :</Text>
              <Text fz={16}>
                Bitcoin
                <CopyButton value='Bitcoin' timeout={2000}>
                  {({ copied, copy }) => (
                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position='right'>
                      <ActionIcon color={copied ? 'teal' : 'gray'} variant='subtle' onClick={copy}>
                        {copied ? <IoCheckmark size={16} /> : <IoCopyOutline size={16} />}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              </Text>
            </Group>
          </Box>
          <CustomButton
            label='Click when payment is completed'
            onClick={open}
            variant='filled'
            color='#293991'
            size='md'
            fullWidth
            radius='md'
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
              onClick={close}
              variant='filled'
              color='#293991'
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

export default Payment;
