import { CardData } from '@/utils/data/Data';
import { Box, Center, Image, SimpleGrid, Text } from '@mantine/core';
import React from 'react';

interface Props {}

const CardSide: React.FC<Props> = () => {
  return (
    <div
      style={{
        backgroundColor: '#121212',
        padding: '1rem', // Adding some padding for better responsiveness
      }}
    >
      <Center
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '80rem', // Maximum width of the container
          width: '100%', // Full width for responsiveness
          margin: '0 auto', // Centering the container
        }}
      >
        <SimpleGrid
          cols={{ base: 1, sm: 1, lg: 3 }}       
          spacing="lg"
          style={{ width: '100%' }}
          my="lg"
        >
          {CardData.map((item, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                margin: '0 auto',
              }}
            >
              <SimpleGrid
              cols={{ base: 1, sm: 1, lg: 2 }} 
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '1rem', // Use relative units for gap
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: '50px',
                    width: '50px',
                  }}
                />
                <Box style={{ textAlign: 'start', height: 'auto' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: '20px', color: '#fff' }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontWeight: 'normal', color: '#fff',fontSize: '14px', width:'17rem'}}>
                    {item.desc}
                  </Text>
                </Box>
              </SimpleGrid>
            </div>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
};

export default CardSide;
