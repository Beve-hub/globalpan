import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import TeamTop from './TeamTop';
import { Button, Center, Image, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import { IoIosArrowBack } from "react-icons/io";

const TeamSub = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const navigate = useNavigate();
    const theme = useMantineTheme();

    const handleBack = () => {
        navigate('/team');
    }

    return (
        <Center style={{ display: 'grid', padding: '1rem' }}>
            <TeamTop />
            <SimpleGrid 
                cols={{ base: 1, sm: 1, lg: 2}} 
                spacing="lg"                 
                m={theme.spacing.lg}
                style={{ justifyContent: 'center', maxWidth: '100%',alignItems:'center' }}
            >
                <div>
                    <div>
                        <Text fz={18} fw={600}>{item.title}</Text>
                        <Text>{item.name}</Text>
                    </div>

                    <div style={{
                        marginTop: theme.spacing.md,
                        marginBottom: theme.spacing.md,
                    }}>
                        <Text>{item.description}</Text>
                        <Text>{item.name}</Text>
                    </div>

                    <div>
                        <Text>{item.contact1}</Text>
                        <Text>{item.contact1}</Text>
                    </div>

                    <Button variant='outline' mt={theme.spacing.md} onClick={handleBack}>
                        <Text style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <IoIosArrowBack /> Go Back Home
                        </Text>
                    </Button>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Image 
                        src={item.image} 
                        alt='' 
                        style={{
                            width: '100%', 
                            maxWidth: '30rem', 
                            height: 'auto', 
                            margin: '0 auto'
                        }} 
                    />
                </div>
            </SimpleGrid>
        </Center>
    )
}

export default TeamSub;
