import { SimpleGrid } from '@mantine/core'
import React from 'react'
import Personal from './Personal';
import Wallet from './Wallet';
import Profile from './Profile';

interface Props {
    
}

const BodySettings: React.FC<Props> = () => {
    return (
        <div>
            <Profile/>
             <SimpleGrid my={20}  cols={{ base: 1, sm: 1, lg: 2 }} spacing={{ base: 10, sm: 'xl' }}>
           <div>
            <Personal />
           </div>
           <div>
            <Wallet />
           </div>
           
        </SimpleGrid>
        </div>
    )
}

export default BodySettings
