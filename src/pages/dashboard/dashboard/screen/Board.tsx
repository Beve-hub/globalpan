import { SimpleGrid,Group, Text } from '@mantine/core'
import React from 'react'
import { FaWallet, FaCoins } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { GiHistogram } from "react-icons/gi";


const Board = () => {
    return (
        <SimpleGrid cols={{ base: 1, sm:1, lg: 4 }} my="lg">

        <Group style={{display:'grid',
          backgroundColor:"#293991",padding:'5px 30px ', height:'13rem',width:'16rem',borderRadius:10}}>
          <Group style={{display:"flex",justifyContent:'center', background:'#ffff', height:'2rem',width:'2rem', borderRadius:5}}>
            <FaWallet size={20} color="#293991"/>
          </Group>
          <div style={{display:'grid'}}>
            <Text fz={18}  color="#ffff">Balance</Text>
            <Text fz={30} fw={700} color="#ffff">$0.00</Text>
          </div>
        </Group>

        <Group style={{display:'grid',
          backgroundColor:"#0055CC20",padding:'5px 30px ', height:'13rem',width:'16rem',borderRadius:10}}>
          <Group style={{display:"flex",justifyContent:'center', background:'#293991', height:'2rem',width:'2rem', borderRadius:5}}>
            <GrTransaction size={20} color="#ffff"/>
          </Group>
          <div style={{display:'grid'}}>
            <Text fz={18}  color="#121212">Active Deposit</Text>
            <Text fz={30} fw={700} color="#121212">$0.00</Text>
          </div>
        </Group>

        <Group style={{display:'grid',
          backgroundColor:"#0055CC20",padding:'5px 30px ', height:'13rem',width:'16rem',borderRadius:10}}>
          <Group style={{display:"flex",justifyContent:'center', background:'#293991', height:'2rem',width:'2rem', borderRadius:5}}>
            <GiHistogram size={20} color="#ffff"/>
          </Group>
          <div style={{display:'grid'}}>
            <Text fz={18}  color="#121212">Profit</Text>
            <Text fz={30} fw={700} color="#121212">$0.00</Text>
          </div>
        </Group>

        <Group style={{display:'grid',
          backgroundColor:"#0055CC20",padding:'5px 30px ', height:'13rem',width:'16rem',borderRadius:10}}>
          <Group style={{display:"flex",justifyContent:'center', background:'#293991', height:'2rem',width:'2rem', borderRadius:5}}>
            <FaCoins size={20} color="#ffff"/>
          </Group>
          <div style={{display:'grid'}}>
            <Text fz={18}  color="#121212">Referrals Bonus</Text>
            <Text fz={30} fw={700} color="#121212">$0.00</Text>
          </div>
        </Group>
        
      </SimpleGrid>
    )
}

export default Board
