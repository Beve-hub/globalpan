import CustomButton from '@/utils/reusable/CustomButton'
import { Box, Text } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    
}

const Action: React.FC<Props> = () => {
    const navigate = useNavigate()
    const handleDeposit = () => {
     navigate('/invest')
    }
    return (
        <Box style={{backgroundColor:'#0055CC15',padding: '1rem',borderRadius:10}}>
            <Text fz={20} fw={600}>Quick Action</Text>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '1rem',
                gap: '1rem',
            }}>
            <CustomButton
             label="Make Deposit"
             onClick={handleDeposit}
             variant="filled"
             color="#293991"  fullWidth />

            <CustomButton
             label="Withdrawal"
             onClick={handleDeposit}
             variant="filled"
             color="#121212"  fullWidth /> 
            </div>
                 
        </Box>
    )
}

export default Action
