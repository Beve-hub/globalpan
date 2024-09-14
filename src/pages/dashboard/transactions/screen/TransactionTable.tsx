import { Table, Box, ScrollArea, Pagination,} from '@mantine/core';
import { useState } from 'react';


  

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

const BodyPro = () => {
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 10;
  const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);

    const rows = paginationData.map((element) => (
        <Table.Tr key={element.seriaId}>
          <Table.Td  fz="14" >{element.seriaId}</Table.Td>
          <Table.Td fz="16">{element.amount}</Table.Td>
          <Table.Td fz="16">{element.payment}</Table.Td>
          <Table.Td fz="16">{element.method}</Table.Td>
          <Table.Td fz="16">{element.date}</Table.Td>
          <Table.Td fz="16">{element.status}</Table.Td>
        </Table.Tr>
      ));
    return (
      <div>
        <Box my="80" style={{    
            maxWidth:'100%',
            height: 'auto',            
            borderRadius: '1rem',
            padding: '1rem 2rem',
          }}>
            <ScrollArea  >
            <Table miw={800} >
          <Table.Thead  >
            <Table.Tr mb='sm'>
              <Table.Th fz="18">SeriaId</Table.Th>
              <Table.Th fz="18">Amount</Table.Th>
              <Table.Th fz="18">Payment</Table.Th>
              <Table.Th fz="18">Method</Table.Th>
              <Table.Th fz="18">Date</Table.Th>              
              <Table.Th fz="18">Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody fz="18" mt="lg">{rows}</Table.Tbody>
        </Table>
        </ScrollArea>
        <Pagination
          onChange={setActivePage}
          total={Math.ceil(data.length / rowsPerPage)}
          color='#293991'
      />      
        </Box>
        </div>  
    )
}

export default BodyPro