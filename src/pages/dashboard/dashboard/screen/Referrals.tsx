import React, { useEffect, useState } from 'react';
import { Text, Button, CopyButton, TextInput,  Box } from '@mantine/core';
import { Color } from '@/utils/reusable/Theme';
import { useLocation } from 'react-router-dom';
import { firestore } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Referrals = () => {
    const { state } = useLocation();
  const userId = state?.userId || '';
    
    const [name, setName] = useState<string>('');

    useEffect(() => {
        const fetchPersonalInfo = async () => {
          const userId = sessionStorage.getItem('userId');
          if (userId) {
            const userDocRef = doc(firestore, 'users', userId);
            const snapshot = await getDoc(userDocRef);
            if (snapshot.exists()) {
              const userDetails = snapshot.data();
              console.log('userDetails', userDetails);
    
              if (userDetails) {
                setName(userDetails.name || '');
                
              }
            } else {
              console.log('No such document!');
            }
          }
        };
    
        fetchPersonalInfo();
      }, [userId]);

      const [referralLink, ] = useState<string>(`https://nexcelglobal.com/referral/${name}`);
    return (
        <Box style={{ backgroundColor: Color.INFO_COLOR, padding: '1rem', borderRadius: 10, width: '100%' }}>
            <Text fz={20} fw={600} >Referral Link</Text>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap: '1rem',
                width: '100%'
            }}>
                <Text fz={14} fw={400} my={10}>
                    🚀 Celebrating 5 Months of Online Triumph!
                    In the spirit of our phenomenal success in trading over the past 5 months, we're thrilled to unveil not one, not two, but THREE extraordinary SUPER plans!
                </Text>
                <TextInput
                    value={referralLink}
                    readOnly
                    rightSection={
                        <CopyButton value={referralLink}>
                            {({ copied, copy }) => (
                                <Button
                                    color={copied ? 'teal' : Color.PRIMARY}
                                    onClick={copy}
                                    style={{ width: '5rem' }} // Set button width to 5rem
                                >
                                    {copied ? 'Copied' : 'Copy'} {/* Ensure button text is shown */}
                                </Button>
                            )}
                        </CopyButton>
                    }
                    placeholder="Referral link"
                    style={{ width: '100%' }}
                />
            </div>
        </Box>
    );
};

export default Referrals;
