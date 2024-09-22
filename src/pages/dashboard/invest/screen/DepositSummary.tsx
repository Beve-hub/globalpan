import React, { useState } from 'react';
import { Box, Center, Group, Text, Paper, UnstyledButton } from '@mantine/core';
import CustomButton from '@/utils/reusable/CustomButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { useMediaQuery } from '@mantine/hooks';
import { Color } from '@/utils/reusable/Theme';

interface UserData {
  amount: string;
  plan: string;
  wallet: string;
  profit: string;
  key: string;
}

const DepositSummary = ({ ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, plan, description, coin } = location.state || {}; // Destructure the passed data
  const [storedData, setStoredData] = useState<UserData[]>([
    { amount, plan, wallet: coin, profit: description, key: '' },
  ]);

  const handleSubmit = () => {
    setStoredData((prevData) => [...prevData]);
    
    // Navigate to Payment and pass coin and amount
    navigate('/payment', { state: { coin: storedData[0]?.wallet, amount: storedData[0]?.amount } });
  };
  

  const handleInvest = () => {
    navigate('/invest');
  };

  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Detect if the screen width is <= 768px

  return (
    <div>
      <UnstyledButton
        onClick={handleInvest}
        style={{
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          marginLeft: isSmallScreen ? '1rem' : '10rem',
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
        <Text fz={isSmallScreen ? 16 : 18}>Back</Text>
      </UnstyledButton>

      <Center h="40rem" style={{ display: 'grid' }}>
        <Paper
          radius="md"
          p={isSmallScreen ? 'md' : 'xl'}
          withBorder
          style={{ width: isSmallScreen ? '90%' : '30rem' }}
          {...props}
        >
          <div style={{ width: '100%' }}>
            <Text fz={isSmallScreen ? 22 : 25} fw={700}>
              Summary
            </Text>
            <Text fz={isSmallScreen ? 14 : 16} fw={300}>
              You have requested to deposit {storedData[0]?.amount} USD, Please proceed to payment
            </Text>
          </div>

          {storedData.map((item, index) => (
            <Box key={index}>
              <Group my={20} style={{ justifyContent: 'space-between' }}>
                <Text fz={isSmallScreen ? 16 : 18}>Package Plan:</Text>
                <Text fz={isSmallScreen ? 16 : 18}>{item.plan}</Text>
              </Group>
              <Group my={20} style={{ justifyContent: 'space-between' }}>
                <Text fz={isSmallScreen ? 16 : 18}>Profit:</Text>
                <Text fz={isSmallScreen ? 16 : 18}>{item.profit}</Text>
              </Group>
              <Group my={20} style={{ justifyContent: 'space-between' }}>
                <Text fz={isSmallScreen ? 16 : 18}>Principal Return:</Text>
                <Text fz={isSmallScreen ? 16 : 18}>Yes</Text>
              </Group>
              <Group my={20} style={{ justifyContent: 'space-between' }}>
                <Text fz={isSmallScreen ? 16 : 18}>Amount:</Text>
                <Text fz={isSmallScreen ? 16 : 18}>${item.amount}</Text>
              </Group>
              <Group mb={40} style={{ justifyContent: 'space-between' }}>
                <Text fz={isSmallScreen ? 16 : 18}>Wallet:</Text>
                <Text fz={isSmallScreen ? 16 : 18}>{item.wallet}</Text>
              </Group>
            </Box>
          ))}

          <CustomButton
            label="Proceed"
            onClick={handleSubmit}
            variant="filled"
            color={Color.PRIMARY}
            size="md"
            fullWidth
            radius="md"
          />
        </Paper>
      </Center>
    </div>
  );
};

export default DepositSummary;
