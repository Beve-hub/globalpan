import React from 'react'
import Board from './Board'
import { Grid, SimpleGrid } from '@mantine/core'
import Action from './Action'
import Referrals from './Referrals'
import Bitcoin from './Bitcoin'
import Etherium from './Etherium'
import ForexChat from './ForexChat'

interface Props {
    
}

const BodyDash: React.FC<Props> = () => {
    return (
        <div>
            <Board/>
            <Grid my="md" gutter="lg">
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Action />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <Referrals/>
        </Grid.Col>
      </Grid>
      <SimpleGrid my={20}  cols={{ base: 1, sm: 1, lg: 2 }} spacing={{ base: 10, sm: 'xl' }}>
           <div>
            <Bitcoin />
           </div>
           <div>
            <Etherium />
           </div>
           
        </SimpleGrid>
      <ForexChat/>
        </div>
    )
}

export default BodyDash
