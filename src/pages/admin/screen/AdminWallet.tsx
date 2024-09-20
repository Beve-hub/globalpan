import CustomButton from '@/utils/reusable/CustomButton';
import {Text, Modal, TextInput, Button, Table, ActionIcon, Box } from '@mantine/core';
import React, { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { RiDeleteBin6Line } from "react-icons/ri";

interface Wallet {
    address: string;
    network: string;
    crypto: string;
}

const AdminWallet: React.FC = () => {
    const [opened, setOpened] = useState(false);
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const [formValues, setFormValues] = useState<Wallet>({ address: '', network: '', crypto: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (wallets.length < 5) {
            setWallets((prev) => [...prev, formValues]);
            setFormValues({ address: '', network: '', crypto: '' });
            setOpened(false);
            notifications.show({
                title: `Wallet Added`,
                message: `Wallet Address has been added to your wallet`,
                color: '#299165',
                position: 'top-right',
            });
        } else {
            notifications.show({
                title: 'Wallet Failed',
                message: 'Something went wrong. Please try again later.',
                color: 'red',
                position: 'top-right',
            });
        }
    };

    const handleDelete = (index: number) => {
        setWallets((prev) => prev.filter((_, i) => i !== index));
    };

    const row = wallets.map((wallet, index) => (
        <tr key={index}>
            <td style={{ textAlign: 'center' }}>{wallet.address}</td>
            <td style={{ textAlign: 'center' }}>{wallet.network}</td>
            <td style={{ textAlign: 'center' }}>{wallet.crypto}</td>
            <td style={{ textAlign: 'center' }}>
                <ActionIcon variant="transparent" onClick={() => handleDelete(index)}>
                    <RiDeleteBin6Line color="red" />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <div>
            <Box my={30} style={{display:'flex',justifyContent:'space-between'}}>
                <Text fz={20} fw={500}>Add wallet</Text>
                <CustomButton label='Add Wallet' onClick={() => setOpened(true)} />
            </Box>

            <Modal opened={opened} onClose={() => setOpened(false)} title="Add Wallet">
                <TextInput
                    label="Wallet Address"
                    name="address"
                    value={formValues.address}
                    onChange={handleChange}
                />
                <TextInput
                    label="Network"
                    name="network"
                    value={formValues.network}
                    onChange={handleChange}
                />
                <TextInput
                    label="Crypto Wallet"
                    name="crypto"
                    value={formValues.crypto}
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </Modal>

            <Table style={{border:'1px solid #12121230', borderRadius:50 }}>
                    <thead style={{backgroundColor:"#293991", height:40}}>
                        <tr>
                            <th style={{ textAlign: 'center',color:'white', fontSize:'16px' }}>Wallet</th>
                            <th style={{ textAlign: 'center',color:'white', fontSize:'16px' }}>Network</th>
                            <th style={{ textAlign: 'center',color:'white', fontSize:'16px' }}>Crypto</th>
                            <th style={{ textAlign: 'center',color:'white', fontSize:'16px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>
                </Table>
        </div>
    );
};

export default AdminWallet;
