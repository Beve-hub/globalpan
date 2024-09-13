import { Container } from '@mantine/core'
import React from 'react'
import HeadDash from './screen/HeadDash'
import BodyDash from './screen/BodyDash';

interface Props {
    
}

const Dashboard: React.FC<Props> = () => {
    return (
        <Container size="lg" my="md">
            <HeadDash/>
            <BodyDash/>
        </Container>
    )
}

export default Dashboard
