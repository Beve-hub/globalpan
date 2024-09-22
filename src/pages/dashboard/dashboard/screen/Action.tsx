import CustomButton from '@/utils/reusable/CustomButton'
import { Color } from '@/utils/reusable/Theme'
import { Box, Button, Text } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'


interface Props {
    
}

const Action: React.FC<Props> = () => {
    const navigate = useNavigate()
    const handleDeposit = () => {
     navigate('/invest')
    }
    const handleWithdraw = () => {
        navigate('/withdraw')
       }
    return (
        <Box style={{backgroundColor:Color.INFO_COLOR, padding: '1rem',borderRadius:10}}>
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
             color={Color.PRIMARY}  
             fullWidth />

            <Button             
             onClick={handleWithdraw}
             variant="filled"
             color={Color.BLACK}  fullWidth >Withdrawal</Button> 
            </div>
                 
        </Box>
    )
}

export default Action
