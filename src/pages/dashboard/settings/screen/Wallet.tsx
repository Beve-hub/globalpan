import CustomButton from '@/utils/reusable/CustomButton'
import CustomInput from '@/utils/reusable/CustomInput'
import {  Text } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    
}

const Wallet: React.FC<Props> = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/depositSummary');
      };
    return (
        <div >
            <div style={{backgroundColor:'#0055CC10', height:'auto', padding:20,marginBottom:20}}>
            <Text fz={20} fw={600} mb={20}>
                Wallet Information
            </Text>
            <div>
            <CustomInput label="Bitcoin Wallet Address" placeholder="Enter wallet address"/>
           <CustomInput label="Ethereum Wallet Address" placeholder="Enter wallet address"/>
           <CustomInput label="Usdt Wallet Address" placeholder="Enter wallet address"/>
            </div>            
            </div>

            <div style={{backgroundColor:'#0055CC10', height:'auto', padding:20}}>
            <Text fz={20} fw={600} mb={20}>
                Change Password
            </Text>
            <div>
            <CustomInput label="Old Password" />
            <CustomInput label="New Password" />
            <CustomInput label="Confirm Password" />
            <CustomButton label='Update Password'  onClick={handleSubmit}
          variant="filled"
          color="#293991"
          size="md"
          fullWidth
          radius="md"/>
            </div>            
            </div>
        </div>
    )
}

export default Wallet
