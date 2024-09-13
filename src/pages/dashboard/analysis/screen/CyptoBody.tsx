import { Grid } from '@mantine/core'
import React from 'react'
import Table from './Table'
import CardContainer from './CardContainer'

interface Props {
    
}

const CyptoBody: React.FC<Props> = () => {
    return (
        <div>
            <Grid my="md" gutter="lg">
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <Table />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <CardContainer/>
        </Grid.Col>
      </Grid>
        </div>
    )
}

export default CyptoBody
