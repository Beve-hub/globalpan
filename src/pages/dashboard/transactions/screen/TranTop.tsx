import { Text } from '@mantine/core'
import React from 'react'

interface Props {
    
}

const TranTop: React.FC<Props> = () => {
    return (
        <div>
            <Text fz={24} fw={500}>
               Recent Transactions
            </Text>
        </div>
    )
}

export default TranTop
