import React from 'react'
import TranTop from './screen/TranTop'
import { Container } from '@mantine/core'
import BodyTransaction from './screen/BodyTransaction'



const Transaction = () => {
    return (
        <Container size="lg" my="md" style={{gap:20}}>
        <TranTop/>
        <BodyTransaction/>
        </Container>
    )
}

export default Transaction
