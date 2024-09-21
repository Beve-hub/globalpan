import { Text, Table, Pagination } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import { ref, get, } from 'firebase/database';
import { database } from '@/firebase';


interface Wallet {
  seriaId: string;
  amount: string;
  payment: string;
  method: string;
  date: string;
  status: string;
}

interface WalletWithKey extends Wallet {
  key: string;
}

const BodyPro = () => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 10;
  const [storedWallets, setStoredWallets] = useState<WalletWithKey[]>([]);
  const [status, setStatus] = useState<{ [key: string]: string | null }>({});


  const paginationData = storedWallets.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const depositRef = ref(database, 'DepositData');
        const depositSnapshot = await get(depositRef);
        const withdrawRef = ref(database, 'WithdrawData');
        const withdrawSnapshot = await get(withdrawRef);

        const depositData: WalletWithKey[] = [];
        const withdrawData: WalletWithKey[] = [];

        if (depositSnapshot.exists()) {
          depositSnapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            depositData.push({
              key: childSnapshot.key,
              seriaId: data.seriaId,
              amount: data.amount,
              payment: data.payment,
              method: data.method,
              date: data.date,
              status: data.status || 'Pending', // Default to 'Pending'
            });
          });
        }

        if (withdrawSnapshot.exists()) {
          withdrawSnapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            withdrawData.push({
              key: childSnapshot.key,
              seriaId: data.seriaId,
              amount: data.amount,
              payment: data.payment,
              method: data.method,
              date: data.date,
              status: data.status || 'Pending', // Default to 'Pending'
            });
          });
        }

        const allTransactions = [...withdrawData, ...depositData];
        setStoredWallets(allTransactions);

        // Initialize status state with 'Pending' if it's undefined
        const initialStatus = allTransactions.reduce((acc, wallet) => {
          acc[wallet.key] = wallet.status || 'Pending';
          return acc;
        }, {} as { [key: string]: string | null });

        setStatus(initialStatus);
      

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWallet();
  }, [storedWallets, status]);

 

  const rows = paginationData.map((wallet, index) => (
    <Table.Tr key={index} style={{ textAlign: 'center' }}>
      <Table.Td>NCT{wallet.seriaId}</Table.Td>
      <Table.Td>${wallet.amount}</Table.Td>
      <Table.Td>{wallet.payment}</Table.Td>
      <Table.Td>{wallet.method}</Table.Td>
      <Table.Td>
        {new Date(wallet.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })}
      </Table.Td>
      <Table.Td>
        <Text color={wallet.status === 'Successful' ? 'green' : 'red'}>
          {wallet.status}
        </Text>
      </Table.Td>     
    </Table.Tr>
  ));

  // Render the table with centered thead and tbody content
  return (
    <div>
      
      <Table.ScrollContainer minWidth={800} my={40}>
        <Table style={{ border: '1px solid #12121230', borderRadius: 50, textAlign: 'center' }}>
          <Table.Thead style={{ backgroundColor: '#293991', height: 40, textAlign: 'center' }}>
            <Table.Tr>
              <Table.Th style={{ color: 'white', fontSize: '16px', textAlign: 'center' }}>Seria ID</Table.Th>
              <Table.Th style={{ color: 'white', fontSize: '16px', textAlign: 'center' }}>Amount</Table.Th>
              <Table.Th style={{ color: 'white', fontSize: '16px', textAlign: 'center' }}>Payment</Table.Th>
              <Table.Th style={{ color: 'white', fontSize: '16px', textAlign: 'center' }}>Method</Table.Th>
              <Table.Th style={{ color: 'white', fontSize: '16px', textAlign: 'center' }}>Date</Table.Th>
              <Table.Th style={{ color: 'white', fontSize: '16px', textAlign: 'center' }}>Status</Table.Th>             
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody style={{ textAlign: 'center' }}>{rows}</Table.Tbody>
        </Table>
        <Pagination
        my={20}
          onChange={setActivePage}
          total={Math.ceil(storedWallets.length / rowsPerPage)}
          color='#293991'
        />
      </Table.ScrollContainer>
    </div>
  );
}

export default BodyPro