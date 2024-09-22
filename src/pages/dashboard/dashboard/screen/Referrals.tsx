import React, { useState } from 'react';
import { Text, Button, CopyButton, TextInput,  Box } from '@mantine/core';
import { Color } from '@/utils/reusable/Theme';

const Referrals = () => {
    const [referralLink, ] = useState<string>('https://panglobal.com/referral/username');

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
