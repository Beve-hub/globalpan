import React, { useEffect, useState } from 'react';
import { Paper, Modal, ActionIcon, Box, Center, CopyButton, Group, Text, Tooltip, UnstyledButton, Image } from '@mantine/core';
import CustomButton from '@/utils/reusable/CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { IoCopyOutline, IoCheckmark } from 'react-icons/io5';
import { useDisclosure } from '@mantine/hooks';
import Gif from '@/asset/7efs.gif';
import { ref, get } from 'firebase/database';
import { database } from '@/firebase';
import { Color } from '@/utils/reusable/Theme';

interface Wallet {
  address: string;
  network: string;
  crypto: string;
}

interface WalletWithKey extends Wallet {
  key: string;
}

const Payment = ({ ...props }) => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const { coin, amount } = location.state || {}; // Extract coin and amount from location.state console.log('Coin:', coin, 'Amount:', amount);

  const [storedWallets, setStoredWallets] = useState<WalletWithKey[]>([]);
  const [filteredWallet, setFilteredWallet] = useState<WalletWithKey | null>(null);

  const handleInvest = () => {
    navigate('/invest');
  };

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const walletRef = ref(database, 'WalletData');
        const walletSnapshot = await get(walletRef);

        const walletData: WalletWithKey[] = [];

        if (walletSnapshot.exists()) {
          walletSnapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            walletData.push({
              key: childSnapshot.key,
              address: data.address,
              network: data.network,
              crypto: data.crypto,
            });
          });

          setStoredWallets(walletData);

          // Filter the wallet based on the coin passed from DepositSummary
          const filtered = walletData.find((wallet) => wallet.crypto.toLowerCase() === coin?.toLowerCase());
          setFilteredWallet(filtered || null); // Set filtered wallet if found
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchWallet();
  }, [coin,storedWallets]);

  return (
    <div>
      {/* Back Button */}
      <UnstyledButton onClick={handleInvest} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10rem', marginTop: '2rem', gap: 10 }}>
        <div style={{ display: 'flex', backgroundColor: Color.LIGHT_GRAY, padding: '0.5rem', borderRadius: 90 }}>
          <FiChevronLeft size={20} />
        </div>
        <Text fz={18}>Back</Text>
      </UnstyledButton>

      {/* Payment Summary */}
      <Center h='40rem' style={{ display: 'grid', placeItems: 'center', padding: '1rem', gap: '1rem' }}>
        <Paper radius='md' p='xl' withBorder {...props} style={{ width: '100%', maxWidth: '30rem' }}>
          <div style={{ marginBottom: 30 }}>
            <Text fz={25} fw={700}>
              Proceed To Payment
            </Text>
            <Text fz={16} fw={300}>
              You are depositing {amount} USD to the following wallet. Please follow the instructions below and confirm the wallet before making the payment.
            </Text>
          </div>

          {filteredWallet ? (
            <Box mb={40}>
              <Group my={20} style={{ justifyContent: 'space-between' }}>
                <Text fz={16}>Wallet Name:</Text>
                <Text fz={16}>{filteredWallet.crypto}</Text>
              </Group>
              <Group my={20} style={{ justifyContent: 'space-between' }}>
                <Text fz={16}>Wallet Address:</Text>
                <Text fz={16}>
                  {filteredWallet.address}{' '}
                  <CopyButton value={filteredWallet.address} timeout={2000}>
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
                <Text fz={16}>Network Channel:</Text>
                <Text fz={16}>
                  {filteredWallet.network}{' '}
                  <CopyButton value={filteredWallet.network} timeout={2000}>
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
          ) : (
            <Text fz={16}>No wallet found for {coin}</Text>
          )}

          {/* Button to confirm payment */}
          <CustomButton label='Click when payment is completed' onClick={open} variant='filled' color={Color.PRIMARY} size='md' fullWidth radius='md' />
        </Paper>

        {/* Modal for payment success */}
        <Modal opened={opened} onClose={close} centered>
          <div>
            <Group style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ textAlign: 'center' }} fz={25} fw={600}>
                Payment Successful
              </Text>
              <Image src={Gif} />
            </Group>

            <CustomButton label='Go Back' onClick={close} variant='filled' color={Color.PRIMARY} size='md' fullWidth radius='md' />
          </div>
        </Modal>
      </Center>
    </div>
  );
};

export default Payment;



