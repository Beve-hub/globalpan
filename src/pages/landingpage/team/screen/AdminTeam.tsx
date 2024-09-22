import { AdminBar } from '@/utils/data/TeamData'
import { Color } from '@/utils/reusable/Theme';
import { Center, Image, SimpleGrid, Text, UnstyledButton } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface InvestBarItem {
    image: string;
    name: string;
    title: string;
    description: string;
    contact1: string;
    contact2: string;
}

const AdminTeam = () => {
    const navigate = useNavigate();

    const handleNext = (item: InvestBarItem) => {
        navigate('/teamSub',  { state: { item }});
    }
    return (
        <Center my={50} style={{display:'grid', justifyContent:'Center', alignItems:'center',}}>
           <Text  my={50} fw={700} fz={30} color={Color.PRIMARY} style={{display:'grid', justifyContent:'Center', alignItems:'center',textAlign:'center'}}>Administrative Team</Text>
           <SimpleGrid
            cols={{ base: 1, sm: 1, lg: 3}}
            spacing="lg">
                {AdminBar.map((item,index) => {
                    return (
                        <UnstyledButton onClick={() => handleNext(item)} key={index}>
                            <div>
                                <Image  src={item.image} alt='' style={{
                                    width:'300px',
                                    height:'300px'
                                }}/>
                            </div>
                            <div style={{marginTop:20}}>
                                <Text fz={18} fw={600}>{item.name}</Text>
                                <Text fz={14}>{item.title}</Text>
                                
                            </div>
                        </UnstyledButton>
                    );
                })}
           </SimpleGrid>
        </Center>
    )
}

export default AdminTeam
