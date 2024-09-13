import { Grid } from '@mantine/core'
import React from 'react'
import ForexMain from './ForexMain'
import ForexSide from './ForexSide'

interface Props {
  
}

const ForexBody: React.FC<Props> = () => {
  return (
    <div>
     <Grid my="md" gutter="lg">
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <ForexMain />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <ForexSide/>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default ForexBody
 