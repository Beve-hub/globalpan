import { useState } from 'react';
import { Table, Text, Pagination, Box, ScrollArea } from '@mantine/core';

const data = [
  { seriaId: 'pgt22345', amount: '200', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22346', amount: '300', payment: 'Withdrawal', method: 'ETH', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22347', amount: '2000', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22348', amount: '3000', payment: 'Withdrawal', method: 'ETH', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22349', amount: '200', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22349', amount: '200', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22349', amount: '200', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22349', amount: '200', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22349', amount: '200', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22349', amount: '200', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  { seriaId: 'pgt22349', amount: '200', payment: 'Deposit', method: 'BTC', date: '20/02/1998', status: 'pending' },
  
];

const PAGE_SIZE = 10; // Number of rows per page

const TransactionTable = () => {
  const [activePage, setActivePage] = useState(1);

 const rowsPerPage = 10;  
  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);
  
  const rows = paginationData.map((row) => (
    <Table.Tr key={row.seriaId}>
      <Table.Td>
        <Text fz="md">{row.seriaId}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="md">{row.amount}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="md">{row.payment}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="md">{row.method}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="md">{row.date}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="md">{row.status}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div >
      <Box>
        <ScrollArea mt="40" style={{    
        maxWidth:'100%',        
      }}>
        <Table  miw={700} horizontalSpacing="xl" verticalSpacing="sm" striped highlightOnHover withTableBorder>
          <Table.Thead style={{ backgroundColor: '#293991', color: '#ffff' }}>
            <Table.Tr>
              <Table.Th fz="18">Seria ID</Table.Th>
              <Table.Th fz="18">Amount</Table.Th>
              <Table.Th fz="18">Payment</Table.Th>
              <Table.Th fz="18">Method</Table.Th>
              <Table.Th fz="18">Date</Table.Th>
              <Table.Th fz="18">Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>

      {/* Pagination component */}
      <Pagination
        total={Math.ceil(data.length / PAGE_SIZE)}
        value={activePage}
        onChange={setActivePage}    
        my="md"
      />
        </ScrollArea>
      </Box>
      
    </div>
  );
};

export default TransactionTable;
