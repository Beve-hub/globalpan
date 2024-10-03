import CustomInput from '@/utils/reusable/CustomInput';
import React, { useState } from 'react';
import { Box, Group, NativeSelect, Paper,Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CustomeButton from '@/utils/reusable/CustomButton';
import { ref, push } from 'firebase/database';
import { database } from '@/firebase';
import { Oval } from 'react-loader-spinner';
import { Color } from '@/utils/reusable/Theme';


// Define types for form data and error object
type FormData = {
  range: string;
  plan: string;
  amount: string;
  description: string;
  coin: string;
};

type FormErrors = Record<string, string>;

const BodyInvest = ({ ...props }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    range: '',
    plan: '',
    amount: '',
    description: '',
    coin: '',
  });

  const validate = (): boolean => {
    const validationErrors: FormErrors = {};
    let isValid = true;

    if (!formData.plan) {
      validationErrors.plan = 'Please select an investment plan';
      isValid = false;
    }
    if (!formData.coin) {
      validationErrors.coin = 'Please select a payment method';
      isValid = false;
    }
    if (!formData.amount) {
      validationErrors.amount = 'Please input an amount';
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validate()) {  // Ensure that validation passes before setting loading
      setLoading(true);
      try {
        await Pricing();
       
      } catch (error) {
        setErrors({ submit: 'Failed to submit. Please try again later.' });
     
      } finally {
        setLoading(false);
      }
    }
  };
  
  

  const Pricing = async () => {
    const userId = sessionStorage.getItem('userId');
    const status = 'pending';
    const seriaId = Math.floor(Math.random() * 1000000);
    const currentDate = new Date().toISOString();
  
    try {
      const userRef = ref(database, 'DepositData');
      const response = await push(userRef, {
        ...formData,
        seriaId,
        userId,
        payment: 'Deposit',
        method: formData.coin,
        date: currentDate,
        status,
      });
      console.log('Firebase response:', response);
  
      setFormData({
        range: '',
        plan: '',
        amount: '',
        description: '',
        coin: '',
      });
      navigate('/depositSummary', { state: { ...formData } });
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      throw new Error('Failed to save data.');
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'plan') {
      switch (value) {
        case 'Basic Plan':
          setFormData((prev) => ({
            ...prev,
            range: '$200 - $50,000',
            description: '2% Daily',
          }));
          break;
        case 'Advance Plan':
          setFormData((prev) => ({
            ...prev,
            range: '$30,000 - $70,000',
            description: '5% Daily',
          }));
          break;
        case 'Professional Plan':
          setFormData((prev) => ({
            ...prev,
            range: '$50,000 - unlimited',
            description: '7.5% Daily',
          }));
          break;
        case 'Premium Plan':
          setFormData((prev) => ({
            ...prev,
            range: '$80,000 - Unlimited',
            description: '12.5% Daily',
          }));
          break;
        default:
          setFormData((prev) => ({
            ...prev,
            range: '',
            description: '',
          }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        <Paper radius="md" p="md" withBorder {...props}>
        <div>
          <NativeSelect
            label="Investment Plan"
            name="plan"
            value={formData.plan}
            onChange={handleSelectChange}
            data={['','Basic Plan', 'Advance Plan', 'Professional Plan', 'Premium Plan']}
            error={errors.plan}
          />
          <Group style={{ display: 'flex', justifyContent: 'space-between' }}>
            {formData.range && (
              <Text fz={12} fw={500} color={Color.GRAY}>
                {formData.range}
              </Text>
            )}
            {formData.description && (
              <Text fz={12} fw={500} color={Color.GRAY}>
                {formData.description}
              </Text>
            )}
          </Group>
        </div>

            <div style={{marginBottom:20}}>
            <CustomInput
          type="numeric"
          label="Amount"
          placeholder="$0.00"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        <NativeSelect
          label="Payment Method"
          name="coin"
          value={formData.coin}
          onChange={handleSelectChange}
          data={['','BTC', 'ETH', 'XRP', 'USDT']}
          error={errors.coin}
        />
            </div>
       
        <CustomeButton
          label={loading ? <Oval height={30} width={30} color="#293991" /> : 'invest'}
          onClick={handleSubmit}
          variant="filled"
          color={Color.PRIMARY}
          size="md"
          fullWidth
          radius="md"
          disabled={loading}
        />
        </Paper>        
        
      </form>
    </Box>
  );
};

export default BodyInvest;
