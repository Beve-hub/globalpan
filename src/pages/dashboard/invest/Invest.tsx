import React from 'react'
import InvestTop from './screen/InvestTop'
import { Container } from '@mantine/core'
import BodyInvest from './screen/BodyInvest'

interface Props {
    
}

const Invest: React.FC<Props> = () => {
    return (
      <Container size="lg" my="md">
      <InvestTop/>
      <BodyInvest/>
      </Container>
    )
}

export default Invest
