import { Text } from '@mantine/core';
import React from 'react';
import TestimonialSlider from './TestimonialSlider';

interface Props {}

const Testimonia: React.FC<Props> = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80vh',
        paddingTop: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',       
        }}
      >
        <Text fz={{ base: 20, sm: 25 }} fw={700}>
          Testimonials
        </Text>
        <Text fz={{ base: 16, sm: 20 }} fw={500} color="#293991" style={{alignItems:"center"}}>
          What our Client say{' '}
          <span
              style={{
                backgroundColor: '#293991',
                width: '20rem',
                height: '20px',
                fontSize: 4,
              }}
            >
              iusududufhcjjdjdskjalkhdhhdhdhdhdhdxbhhhshshdhomedhjdhdhhddhhdhdhdh
            </span>
        </Text>
      </div>
      <TestimonialSlider />
    </div>
  );
};

export default Testimonia;
