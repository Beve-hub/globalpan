import { Container } from '@mantine/core'
import React from 'react'
import TopAnalysis from './screen/TopAnalysis'
import BodyAnalysis from './screen/BodyAnalysis'

interface Props {
    
}

const Analysis: React.FC<Props> = () => {
    return (
        <Container size="lg" my="md" style={{gap:20}}>
        <TopAnalysis/>
        <BodyAnalysis/>
        </Container>
    )
}

export default Analysis
