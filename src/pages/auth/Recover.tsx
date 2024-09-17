import React, { useState } from 'react';
import logo from '@/asset/logo.png';
import "@/firebase";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/utils/reusable/CustomButton';
import { notifications } from '@mantine/notifications';
import CustomInput from '@/utils/reusable/CustomInput';
import { Center, Paper, Text, Title } from '@mantine/core';

interface Errors {
  email?: string;
}

const Recovery = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const validate = () => {
    const errors: Errors = {};
    let isValid = true;

    if (!email.trim()) {
      errors.email = 'User not found!!';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      if (validate()) {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        navigate('/login');
        notifications.show({
          title: `Recovery Link has been sent `,
          message: `Recovery link has been sent to your email`,
          color: '#299165',
          position: 'top-right',
        });
      } else {
        notifications.show({
          title: 'Error',
          message: 'No user found',
          color: 'red',
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40rem',
        padding: '16px',
      }}
    >
    

      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',              
        }}
      >
          <div>
        <img src={logo} alt="Pan Global Logo" style={{ width: '64px', padding: '16px 0' }} />
        
      </div>
        <div style={{ width: '25rem', backgroundColor: 'var(--text-extra)' }}>
          <div>
            <Title  ta="center" fz={24}            
            >
              Forgot Your Password?
            </Title>
            <Text  c="dimmed" fz="sm" ta="center">
              Let us help you recover your account.
            </Text>
          </div>
          <Paper withBorder shadow='md' p={30} radius="md" mt='xl'>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div 
            style={{
                display: "grid",
             gap:4, marginBottom:20 }}>
             
                <CustomInput
                  id="email-address"
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span style={{ color: '#f30000', fontSize: '14px' }}>{errors.email}</span>
                )}
              </div>
            

            <div>
              <CustomButton
                label={loading ? 'Submitting...' : 'Submit'}
                onClick={handleSubmit}
                variant="filled"
                color="#293991"
                size="md"
                fullWidth
                radius="md"
              />
            </div>
          </form>
          </Paper>
        </div>
      </div>
    </Center>
  );
};

export default Recovery;
