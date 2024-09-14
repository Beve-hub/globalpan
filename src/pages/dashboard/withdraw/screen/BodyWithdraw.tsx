import CustomInput from '@/utils/reusable/CustomInput';
import React, { useState } from 'react';
import { Box, NativeSelect, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CustomeButton from '@/utils/reusable/CustomButton';


const BodyWithdraw = () => {
    const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [coin, setCoin] = useState('');


  const handleSubmit = () => {
    navigate('/dashboard');
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.currentTarget.value;
    setValue(selectedValue);

    
  };

  return (
    <Box
      style={{
        height: '30rem',
        maxWidth: '30rem',
        width: '100%',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (max-width: 768px)': {
          padding: '0.5rem',
        },
      }}
    >
      <form style={{ width: '100%', display: 'grid', gap: 20 }}>
        <Text fz={20} fw={500}>Make Withdrawal</Text>
        <CustomInput type="numeric" label="Amount" placeholder="$0.00" />
        <div>
          <NativeSelect
            label="Investment Plan"
            value={value}
            onChange={handleChange}
            data={['Basic Plan', 'Advance Plan', 'Professional Plan', 'Premium Plan']}
          />
          
        </div>
        <NativeSelect
          label="Investment Plan"
          value={coin}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCoin(event.currentTarget.value)}
          data={['BTC', 'ETH', 'XRP', 'USDT']}
        />
        <CustomInput type="password" label="Transaction Pin" placeholder="******" />
        <CustomeButton
          label="Invest"
          onClick={handleSubmit}
          variant="filled"
          color="#293991"
          size="md"
          fullWidth
          radius="md"
        />
      </form>
    </Box>
  );
}

export default BodyWithdraw
