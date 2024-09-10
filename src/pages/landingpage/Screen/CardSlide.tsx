import { CardData } from '@/utils/data/Data';
import { Box, Card,  Image, SimpleGrid, Text } from '@mantine/core';
import React from 'react';

interface Props {}

const CardSide: React.FC<Props> = () => {
  return (
    <div  style={{
        maxWidth: '80rem', // Maximum width of the container
        width: '100%', // Full width for responsiveness
        margin: '0 auto', // Centering the container
        
     

      }}>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl', lg: 'sm' }}
        style={{ width: '100%' }}
        my="50"
      >
        {CardData.map((item, index) => (
          <Card
            key={index}
            style={{
              
              width: '100%',
              maxWidth: '70rem',
              margin: '0 auto', // Center align each card
            }}
          >
            <div
              style={{               
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',               
                margin: '0 auto', // Center align the icon container
              }}
            >
                <div  style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',          
                margin: '0 auto', // Center align the icon container
              }}>
                <Image
                src={item.image}
                alt={item.title}
                style={{
                  height: '70px',
                  width: '70px',
                }}
              />
                </div>
              
              <Box
                style={{ textAlign: 'center', marginTop: '1rem', height:'15rem'}}
            >
              <Text style={{fontWeight:'bold',fontSize:'20px'}}>{item.title}</Text>
              <Text style={{fontWeight:'normal', color:'#121212'}}>{item.desc}</Text>
            </Box> 
            </div>
            
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default CardSide;
