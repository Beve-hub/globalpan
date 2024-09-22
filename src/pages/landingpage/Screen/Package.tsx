import { PlanData } from '@/utils/data/Data';
import { Color } from '@/utils/reusable/Theme';
import { Box, Button, Card, Group, SimpleGrid, Text } from '@mantine/core';
import React from 'react';

interface Props {}

const Package: React.FC<Props> = () => {
  return (
    <div
      style={{
        maxWidth: '80rem', // Maximum width of the container
        width: '100%', // Full width for responsiveness
        margin: '0 auto', // Centering the container
      }}
    >
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Our Packages</Text>
        <Text style={{ color: Color.BLACK }}>
          Below are our professional package plan to help maximize your portfolio
          in a standard manner.
        </Text>
      </div>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 10, sm: 'xl', lg: 'sm' }}
        style={{ width: '100%' }}
        my="50"
      >
        {PlanData.map((item, index) => (
          <Card
            key={index}
            style={{
              border: '1px solid #12121270',
              width: '100%',
              maxWidth: '70rem',
              margin: '0 auto',
              cursor:'pointer',
              paddingTop: '2rem',
              paddingBottom: '2rem',
              transition: 'transform 0.3s, background-color 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: Color.INFO_COLOR, // Light blue background on hover
              },
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
              <Box
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  padding: 5,
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}
                >
                  {item.name}
                </Text>
                <Group
                  style={{
                    backgroundColor: Color.INFO_COLOR,
                    justifyContent: 'center',
                    borderRadius: 30,
                    padding: 5,
                    margin: 10,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: Color.PRIMARY,
                    }}
                  >
                    {item.range}
                  </Text>
                </Group>
                <Text>{item.profit}</Text>
              </Box>

              <Group
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  textAlign: 'start',
                  marginTop: '1rem',
                  height: '12rem',
                  width: '15rem',
                }}
              >
                <Text
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    color: Color.BLACK,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  {item.icon}
                  {item.mini}
                </Text>
                <Text
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    color: Color.BLACK,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  {item.icon}
                  {item.max}
                </Text>
                <Text
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    color: Color.BLACK,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  {item.icon}
                  {item.desc}
                </Text>
                <Text
                  style={{
                    fontSize: '18px',
                    fontWeight: 'normal',
                    color: Color.BLACK,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  {item.icon}
                  {item.referral}
                </Text>
              </Group>

              <Group justify='center' mt={20}>
                <Button style={{backgroundColor:Color.PRIMARY, borderRadius:30}}>
                  Invest Now 
                </Button>
              </Group>
            </div>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Package;
