import React from 'react'
import { Container } from '@mantine/core'
import TopWithdraw from './screen/TopWithdraw'
import BodyWithdraw from './screen/BodyWithdraw'

interface Props {
    
}

const Withdraw: React.FC<Props> = () => {
    return (
        <Container size="lg" my="md">
      <TopWithdraw/>
      <BodyWithdraw/>
      </Container>
    )
}

export default Withdraw
