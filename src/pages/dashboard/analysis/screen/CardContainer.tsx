import { SimpleGrid } from '@mantine/core'
import React from 'react'
import Bitcoin from '../../dashboard/screen/Bitcoin'
import Usdt from '../../dashboard/screen/Usdt'

interface Props {
    
}

const CardContainer: React.FC<Props> = () => {
    return (
        <div>
            <SimpleGrid  cols={{ base: 1, sm: 1, lg: 1 }} spacing={{ base: 10, sm: 'xl' }}>
           <div>
            <Bitcoin />
           </div>          
           <div>
            <Usdt />
           </div>
           </SimpleGrid>
        </div>
    )
}

export default CardContainer
