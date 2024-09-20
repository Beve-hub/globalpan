import { Text, Button, Table, Box, Pagination } from '@mantine/core';
import React, { useState } from 'react';
import { notifications } from '@mantine/notifications';

interface Wallet {
    seriaId: string;
    amount: string;
    payment: string;
    method: string;
    date: string;
    status: 'Pending' | 'Successful' | 'Failed';
}

const AdminTransactions: React.FC = () => {
    const [activePage, setActivePage] = useState(1);
    const rowsPerPage = 10;

    const [wallets, setWallets] = useState<Wallet[]>([]);

    const paginationData = wallets.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);

    // Handle Accept action
    const handleAccept = (index: number) => {
        const updatedWallets = wallets.map((wallet, i) =>
            i === index ? { ...wallet, status: 'Successful' } : wallet
        );
        setWallets(updatedWallets);
        notifications.show({ message: 'Transaction accepted', color: 'green' });
    };

    // Handle Decline action
    const handleDecline = (index: number) => {
        const updatedWallets = wallets.map((wallet, i) =>
            i === index ? { ...wallet, status: 'Failed' } : wallet
        );
        setWallets(updatedWallets);
        notifications.show({ message: 'Transaction declined', color: 'red' });
    };

    const rows = paginationData.map((wallet, index) => (
        <Table.Tr key={index} style={{ textAlign: 'center' }}>
            <Table.Td>{wallet.seriaId}</Table.Td>
            <Table.Td>{wallet.amount}</Table.Td>
            <Table.Td>{wallet.payment}</Table.Td>
            <Table.Td>{wallet.method}</Table.Td>
            <Table.Td>{wallet.date}</Table.Td>
            <Table.Td>{wallet.status}</Table.Td>
            <Table.Td>
                {wallet.status === 'Pending' ? (
                    <>
                        <Button
                            color="green"
                            onClick={() => handleAccept(index)}
                            style={{ marginRight: '10px' }}
                        >
                            Accept
                        </Button>
                        <Button color="red" onClick={() => handleDecline(index)}>
                            Decline
                        </Button>
                    </>
                ) : (
                    <Text>{wallet.status}</Text>
                )}
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <Box my={30} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text fz={20} fw={500}>
                    Recent Transaction
                </Text>
            </Box>
            <Table.ScrollContainer minWidth={800}>
                <Table style={{ border: '1px solid #12121230', borderRadius: 50, textAlign: 'center' }}>
                    <Table.Thead style={{ backgroundColor: '#293991', height: 40 }}>
                        <Table.Tr>
                            <Table.Th style={{ color: 'white', fontSize: '16px' }}>Seria ID</Table.Th>
                            <Table.Th style={{ color: 'white', fontSize: '16px' }}>Amount</Table.Th>
                            <Table.Th style={{ color: 'white', fontSize: '16px' }}>Payment</Table.Th>
                            <Table.Th style={{ color: 'white', fontSize: '16px' }}>Method</Table.Th>
                            <Table.Th style={{ color: 'white', fontSize: '16px' }}>Date</Table.Th>
                            <Table.Th style={{ color: 'white', fontSize: '16px' }}>Status</Table.Th>
                            <Table.Th style={{ color: 'white', fontSize: '16px' }}>Actions</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
                <Pagination
                    onChange={setActivePage}
                    total={Math.ceil(wallets.length / rowsPerPage)}
                    color='#293991'
                />
            </Table.ScrollContainer>
        </div>
    );
};

export default AdminTransactions;
