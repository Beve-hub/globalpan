import { SimpleGrid, Group, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { FaWallet, FaCoins } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { GiHistogram } from "react-icons/gi";
import { ref, get } from 'firebase/database';
import { database } from '@/firebase';

interface UserData {
  amount: number;
  status: string;
  userId: string;
}

const Board = () => {
  const [totalDeposit, setTotalDeposit] = useState<number>(0);
  const [totalWithdraw, setTotalWithdraw] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem('userId');
      if (!userId) {
        console.error("UserId not found in sessionStorage");
        return;
      }

      try {
        const depositRef = ref(database, 'DepositData');
        const withdrawRef = ref(database, 'WithdrawData');

        const depositSnapshot = await get(depositRef);
        const withdrawSnapshot = await get(withdrawRef);

        let depositSum = 0;
        let withdrawSum = 0;

        if (depositSnapshot.exists()) {
          depositSnapshot.forEach((childSnapshot) => {
            const data: UserData = childSnapshot.val();
            const amount = Number(data.amount);

            if (!isNaN(amount) && data.userId === userId && data.status === 'Successful') {
              depositSum += amount;
            }
          });
        } else {
          console.warn("No deposit data found");
        }

        if (withdrawSnapshot.exists()) {
          withdrawSnapshot.forEach((childSnapshot) => {
            const data: UserData = childSnapshot.val();
            const amount = Number(data.amount);

            if (!isNaN(amount) && data.userId === userId && data.status === 'Successful') {
              withdrawSum += amount;
            }
          });
        } else {
          console.warn("No withdrawal data found");
        }

        setTotalDeposit(depositSum);
        setTotalWithdraw(withdrawSum);

        const calculatedProfit = (depositSum - withdrawSum) * 0.00001;
        setProfit(calculatedProfit);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfit((prevProfit) => prevProfit + (prevProfit * 0.005)); // Increase profit by 0.5% every 6 hours
    }, 2160000); // 6 hours in milliseconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <SimpleGrid cols={{ base: 1, sm: 1, lg: 4 }} my="lg">
      <Group
        style={{
          display: 'grid',
          backgroundColor: "#293991",
          padding: '5px 30px ',
          height: '13rem',
          width: '16rem',
          borderRadius: 10,
        }}
      >
        <Group
          style={{
            display: "flex",
            justifyContent: 'center',
            background: '#ffff',
            height: '2rem',
            width: '2rem',
            borderRadius: 5,
          }}
        >
          <FaWallet size={20} color="#293991" />
        </Group>
        <div style={{ display: 'grid' }}>
          <Text fz={18} color="#ffff">Balance</Text>
          <Text fz={30} fw={700} color="#ffff">${(totalDeposit - totalWithdraw) <= 0 ? 0 : (totalDeposit - totalWithdraw)}.00</Text>
        </div>
      </Group>

      <Group
        style={{
          display: 'grid',
          backgroundColor: "#0055CC20",
          padding: '5px 30px ',
          height: '13rem',
          width: '16rem',
          borderRadius: 10,
        }}
      >
        <Group
          style={{
            display: "flex",
            justifyContent: 'center',
            background: '#293991',
            height: '2rem',
            width: '2rem',
            borderRadius: 5,
          }}
        >
          <GrTransaction size={20} color="#ffff" />
        </Group>
        <div style={{ display: 'grid' }}>
          <Text fz={18} color="#121212">Active Deposit</Text>
          <Text fz={30} fw={700} color="#121212">${totalDeposit <= 0 ? 0 : totalDeposit}.00</Text>
        </div>
      </Group>

      <Group
        style={{
          display: 'grid',
          backgroundColor: "#0055CC20",
          padding: '5px 30px ',
          height: '13rem',
          width: '16rem',
          borderRadius: 10,
        }}
      >
        <Group
          style={{
            display: "flex",
            justifyContent: 'center',
            background: '#293991',
            height: '2rem',
            width: '2rem',
            borderRadius: 5,
          }}
        >
          <GiHistogram size={20} color="#ffff" />
        </Group>
        <div style={{ display: 'grid' }}>
          <Text fz={18} color="#121212">Profit</Text>
          <Text fz={30} fw={700} color="#121212">${profit <= 0 ? 0 : profit.toFixed(2)}</Text>
        </div>
      </Group>

      <Group
        style={{
          display: 'grid',
          backgroundColor: "#0055CC20",
          padding: '5px 30px ',
          height: '13rem',
          width: '16rem',
          borderRadius: 10,
        }}
      >
        <Group
          style={{
            display: "flex",
            justifyContent: 'center',
            background: '#293991',
            height: '2rem',
            width: '2rem',
            borderRadius: 5,
          }}
        >
          <FaCoins size={20} color="#ffff" />
        </Group>
        <div style={{ display: 'grid' }}>
          <Text fz={18} color="#121212">Referrals Bonus</Text>
          <Text fz={30} fw={700} color="#121212">$0.00</Text>
        </div>
      </Group>
    </SimpleGrid>
  );
};

export default Board;
