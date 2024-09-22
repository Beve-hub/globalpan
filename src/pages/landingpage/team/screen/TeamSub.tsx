import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import TeamTop from './TeamTop';
import { Button, Center, Image, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import { IoIosArrowBack } from "react-icons/io";
import { Color } from '@/utils/reusable/Theme';

const TeamSub = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const navigate = useNavigate();
    const theme = useMantineTheme();

    const handleBack = () => {
        navigate('/team');
    }

    return (
        <Center  style={{ display: 'grid',  }}>
            <TeamTop />
            <SimpleGrid 
                cols={{ base: 1, sm: 1,md:1, lg: 2}} 
                spacing="lg"                 
                my={60}
                mx={theme.spacing.xl}
                style={{ justifyContent: 'center', maxWidth: '100%',alignItems:'center' }}
            >
                <div>
                    <div>
                        <Text fz={24} fw={600} c={Color.BLACK} >{item.title}</Text>
                        <Text c={Color.DARK_GRAY} fz={20} >{item.name}</Text>
                    </div>

                    <div style={{
                        marginTop: theme.spacing.md,
                        marginBottom: theme.spacing.md,
                    }}>
                        <Text fz={18} c={Color.BLACK} >{item.description}</Text>
                        <Text fz={20} c={Color.BLACK} my={20}>{item.name}</Text>
                    </div>

                    <div>
                        <Text fz={18} c={Color.BLACK}>{item.contact1}</Text>
                        <Text fz={18} c={Color.BLACK}>{item.contact1}</Text>
                    </div>

                    <Button variant='outline' my={theme.spacing.md} onClick={handleBack}>
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
