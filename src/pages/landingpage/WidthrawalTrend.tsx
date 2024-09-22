import { WithrawalTestData } from '@/utils/data/Data';
import { Color } from '@/utils/reusable/Theme';
import { Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';

interface Props {}

const WidthrawalTrend: React.FC<Props> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % WithrawalTestData.length);
    }, 10000); 

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [WithrawalTestData.length]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10vh', // Adjusted for responsiveness
        right: '2vw', // Adjusted for responsiveness
        zIndex: 1000,
        padding: '10px',
        borderRadius: '30rem 0rem 30rem 30rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '80vw', // Maximum width for small screens
      }}
    >
      {WithrawalTestData.map((item, index) =>
        index === currentIndex ? (
          <Text
            key={index} // Added key for each item
            style={{
              width: '100%',
              height: 'auto',
              backgroundColor: Color.WHITE,
              padding: '15px',
              borderRadius: '30rem 0rem 30rem 30rem',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', // Responsive font size
              wordBreak: 'break-word', // Ensure long words break properly
            }}
          >
            <span style={{fontWeight:500,}}>{item.name}</span> from <span style={{fontWeight:500,}}>{item.country}</span> has just withdrew <span style={{fontWeight:600,}}>${item.amount}</span>
          </Text>
        ) : null
      )}
    </div>
  );
};

export default WidthrawalTrend;
