import { SimpleGrid } from '@mantine/core'
import React from 'react'
import Euro from './Euro'
import Chine from './Chine'



interface Props {
    
}

const ForexSide: React.FC<Props> = () => {
    return (
        <div>
            <SimpleGrid  cols={{ base: 1, sm: 1, lg: 1 }} spacing={{ base: 10, sm: 'xl' }}>
           <div>
            <Euro />
           </div>          
           <div>
            <Chine />
           </div>
           </SimpleGrid>
        </div>
    )
}

export default ForexSide
