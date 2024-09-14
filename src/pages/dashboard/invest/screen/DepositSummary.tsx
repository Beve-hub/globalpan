import React from 'react'
import {  Box, Center, Group, Text, UnstyledButton } from '@mantine/core';
import CustomButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";

const DepositSummary = () => {
   const navigate = useNavigate();
   
    const handleSubmit = () => {
        navigate('/payment');
      };
      const handleInvest = () => {
        navigate('/invest');
      };
    return (
        <div >
            <UnstyledButton onClick={handleInvest} style={{
           display:'flex',
           justifyItems: 'center',
           alignItems: 'center',
           marginLeft:'10rem',
            marginTop:'2rem',
            gap:10
        }}>
                <div style={{display:'flex',backgroundColor:'#12121210',padding:'0.5rem', borderRadius:90}}>
                <FiChevronLeft size={20}/>
                </div>
                <Text fz={18} >Back</Text>
            </UnstyledButton>
             <Center  h='40rem' style={{display:'grid',}}>
           <div>
           <div style={{width:'30rem'}}>
           <Text fz={25} fw={700}> Summary</Text>
           <Text fz={16} fw={300}>You have requested to deposit 200 USD , Please proceed to payment</Text>
           
           </div>
          <Box >
            <Group  my={20} style={{justifyContent:'space-between'}}>
                <Text fz={18}>Package Plan  :</Text>
                <Text fz={18}>Basic Plan</Text>                
            </Group>
            <Group  my={20} style={{justifyContent:'space-between'}}>
                <Text fz={18}>Profit  :</Text>
                <Text fz={18}>2% daily</Text>                
            </Group>
            <Group  my={20} style={{justifyContent:'space-between'}}>
                <Text fz={18}>Principal Return  :</Text>
                <Text fz={18}>Yes</Text>                
            </Group>
            <Group  my={20} style={{justifyContent:'space-between'}}>
                <Text fz={18}>Amount  :</Text>
                <Text fz={18}>$200</Text>                
            </Group>
            <Group mb={40}  style={{justifyContent:'space-between'}}>
                <Text fz={18}>Wallet  :</Text>
                <Text fz={18}>Bitcoin</Text>                
            </Group>
           </Box>
           <CustomButton 
           label='Proceed'
            onClick={handleSubmit}
          variant="filled"
          color="#293991"
          size="md"
          fullWidth
          radius="md"/>
           </div>
           
        </Center>
        </div>
       
    )
}

export default DepositSummary
