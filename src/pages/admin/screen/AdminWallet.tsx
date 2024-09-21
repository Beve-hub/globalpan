import CustomButton from '@/utils/reusable/CustomButton';
import {Text, Modal, TextInput, Button, Table, ActionIcon, Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';
import { RiDeleteBin6Line } from "react-icons/ri";
import { ref, push, get } from 'firebase/database';
import { database } from '@/firebase';

interface Wallet {
    address: string;
    network: string;
    crypto: string;
}

interface WalletWithKey extends Wallet {
    key: string;
  }
  
type FormErrors = Record<string, string>;

const AdminWallet: React.FC = () => {
    const [opened, setOpened] = useState(false);
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const [storedWallets, setStoredWallets] = useState<WalletWithKey[]>([]);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formValues, setFormValues] = useState<Wallet>({
         address: '', 
         network: '',
         crypto: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const validate = (): boolean => {
        const validationErrors: FormErrors = {};
        let isValid = true;
    
        if (!formValues.address) {
          validationErrors.plan = 'Please input a wallet address';
          isValid = false;
        }
        if (!formValues.network) {
          validationErrors.coin = 'Please select a crypto network';
          isValid = false;
        }
        if (!formValues.crypto) {
          validationErrors.amount = 'Please select a crypto wallet';
          isValid = false;
        }
    
        setErrors(validationErrors);
        return isValid;
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
                  key: childSnapshot.key,  // Include the key
                  address: data.address,
                  network: data.network,
                  crypto: data.crypto,
                });
              });
              setStoredWallets(walletData);
            }
          } catch (e) {
            console.error(e);
          }
        };
        fetchWallet();
      }, []);
    ;
      

      const handleSubmit = async () => {
        if (!validate()) {
          return;
        }
    
        if (wallets.length < 5) {
          try {
            await WalletUpdate();
            setWallets((prev) => [...prev, formValues]);
            setFormValues({ address: '', network: '', crypto: '' });
            setOpened(false);
            notifications.show({
              title: 'Wallet Added',
              message: 'Wallet Address has been added to your wallet',
              color: '#299165',
              position: 'top-right',
            });
          } catch (error) {
            notifications.show({
              title: 'Wallet Failed',
              message: 'Something went wrong. Please try again later.',
              color: 'red',
              position: 'top-right',
            });
          }
        } else {
          notifications.show({
            title: 'Wallet Limit Exceeded',
            message: 'You cannot add more than 5 wallets',
            color: 'red',
            position: 'top-right',
          });
        }
      };

    const WalletUpdate = async() => {
        const userId = sessionStorage.getItem('userId');
   
    try {
      const userRef = ref(database, 'WalletData');
      const response = await push(userRef, {
        ...formValues,
        
        userId,
        
      });
      console.log('Firebase response:', response);
  
      setFormValues({
        address: '', 
         network: '',
         crypto: '' 
      });     
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      throw new Error('Failed to save data.');
    }
    };

    const handleDelete = async (key: string) => {
        const url1 = `https://panglobal-5c601-default-rtdb.firebaseio.com/WalletData/${key}.json`;
        try {
          const resp = await fetch(url1, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
          });
    
          if (resp.ok) {
            const updatedWallets = storedWallets.filter(item => item.key !== key);
            setStoredWallets(updatedWallets);
            notifications.show({
              title: 'Details removed',
              message: 'Wallet data has been successfully removed.',
              color: 'green',
              position: 'top-right',
            });
          } else {
            notifications.show({
              title: 'Update Failed',
              message: 'There was an issue removing the wallet. Please try again later.',
              color: 'red',
              position: 'top-right',
            });
          }
        } catch (error) {
          console.error('Error removing wallet:', error);
        }
      };

      const row = storedWallets.map((wallet) => (
        <Table.Tr key={wallet.key}>
          <Table.Td style={{ textAlign: 'center' }}>{wallet.address}</Table.Td>
          <Table.Td style={{ textAlign: 'center' }}>{wallet.network}</Table.Td>
          <Table.Td style={{ textAlign: 'center' }}>{wallet.crypto}</Table.Td>
          <Table.Td style={{ textAlign: 'center' }}>
            <ActionIcon variant="transparent" onClick={() => handleDelete(wallet.key)}>
              <RiDeleteBin6Line color="red" />
            </ActionIcon>
          </Table.Td>
        </Table.Tr>
      ));

    return (
        <div>
            <Box my={30} style={{display:'flex',justifyContent:'space-between'}}>
                <Text fz={20} fw={500}>Add wallet</Text>
                <CustomButton label='Add Wallet' onClick={() => setOpened(true)} color='#293991'/>
            </Box>

            <Modal opened={opened} onClose={() => setOpened(false)} title="Add Wallet">
                <TextInput
                    label="Wallet Address"
                    name="address"
                    value={formValues.address}
                    onChange={handleChange}
                    error={errors.address}
                />
                <TextInput
                    label="Network"
                    name="network"
                    value={formValues.network}
                    onChange={handleChange}
                    error={errors.network}
                />
                <TextInput
                    label="Crypto Wallet"
                    name="crypto"
                    value={formValues.crypto}
                    onChange={handleChange}
                    error={errors.crypto}
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </Modal>
            <Table.ScrollContainer minWidth={800}>
            <Table style={{border:'1px solid #12121230', borderRadius:50 }}>
                    <Table.Thead style={{backgroundColor:"#293991", height:40}}>
                        <Table.Tr>
                            <Table.Th style={{ textAlign: 'center',color:'white', fontSize:'16px' }}>Wallet</Table.Th>
                            <Table.Th style={{ textAlign: 'center',color:'white', fontSize:'16px' }}>Network</Table.Th>
                            <Table.Th style={{ textAlign: 'center',color:'white', fontSize:'16px' }}>Crypto</Table.Th>
                            <Table.Th style={{ textAlign: 'center',color:'white', fontSize:'16px' }}>Action</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <tbody>
                        {row}
                    </tbody>
                </Table>
            </Table.ScrollContainer>
           
        </div>
    );
};

export default AdminWallet;
