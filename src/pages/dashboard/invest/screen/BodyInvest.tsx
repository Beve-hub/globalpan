import CustomInput from '@/utils/reusable/CustomInput';
import React, { useState } from 'react';
import { Box, Group, NativeSelect, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CustomeButton from '@/utils/reusable/CustomButton';

const BodyInvest = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [coin, setCoin] = useState('');
  const [description, setDescription] = useState('');
  const [range, setRange] = useState('');

  const handleSubmit = () => {
    navigate('/depositSummary');
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.currentTarget.value;
    setValue(selectedValue);

    switch (selectedValue) {
      case 'Basic Plan':
        setRange('$100 - $2000');
        setDescription('2% Daily');
        break;
      case 'Advance Plan':
        setRange('$2001 - $5000');
        setDescription('5% Daily');
        break;
      case 'Professional Plan':
        setRange('$5001 - $10,000');
        setDescription('7.5% Daily');
        break;
      case 'Premium Plan':
        setRange('$10,000 - Unlimited');
        setDescription('12.5% Daily');
        break;
      default:
        setRange('');
        setDescription('');
    }
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
     
        
        <div>
          <NativeSelect
            label="Investment Plan"
            value={value}
            onChange={handleChange}
            data={['Basic Plan', 'Advance Plan', 'Professional Plan', 'Premium Plan']}
          />
          <Group style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text>{range && <Text fz={12} fw={500} color='#5C5B5B'>{range}</Text>}</Text>
            <Text>{description && <Text fz={12} fw={500} color='#5C5B5B'>{description}</Text>}</Text>
          </Group>
        </div>

        <CustomInput type="numeric" label="Amount" placeholder="$0.00" />
        <NativeSelect
          label="Investment Plan"
          value={coin}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCoin(event.currentTarget.value)}
          data={['BTC', 'ETH', 'XRP', 'USDT']}
        />
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
};

export default BodyInvest;
