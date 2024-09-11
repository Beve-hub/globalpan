import { TestimoniaData } from '@/utils/data/Data';
import { Box, Button, Image, Text } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';
import comma from '@/asset/side.png';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimoniaData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + TestimoniaData.length) % TestimoniaData.length
    );
  };

  return (
    <div style={styles.container}>
      <Button onClick={handlePrevious} style={{ ...styles.button, left: '10px' }}>
        <FaChevronLeft />
      </Button>
      <div style={styles.cardsContainer}>
        <div
          style={{
            ...styles.slider,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {TestimoniaData.map((item, index) => (
            <Box key={index} style={styles.card}>
              <Image
                src={comma}
                alt="testimonial_image"
                style={{ width: '20px', height: '20px' }}
              />
              <Text style={styles.text}> {item.desc}</Text>

              <div style={{ display: 'flex', gap: '20px' }}>
                <Image
                  src={item.image}
                  alt="testimonial_image"
                  style={{ width: '50px', height: '50px', borderRadius: '100%' }}
                />
                <div style={{ display: 'grid', alignItems: 'flex-start' }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <div>
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar key={starIndex} size={16} color="#CFBB00" />
                    ))}
                  </div>
                </div>
              </div>
            </Box>
          ))}
        </div>
      </div>
      <Button onClick={handleNext} style={{ ...styles.button, right: '10px' }}>
        <FaChevronRight />
      </Button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '20px auto',
    position: 'relative',
  } as React.CSSProperties,
  cardsContainer: {
    overflow: 'hidden',
    width: '60rem',
    position: 'relative',
  } as React.CSSProperties,
  card: {
    padding: '30px',
    backgroundColor: '#0055CC10',    
    borderRadius: '8px',
    width: '20rem',
    
    textAlign: 'center',
    margin: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
  } as React.CSSProperties,
  button: {
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#293991',
    color: 'white',
    fontSize: '16px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  } as React.CSSProperties,
  text: {
    fontSize: '16px',
    marginBottom: '10px',
  } as React.CSSProperties,
  name: {
    fontSize: '14px',
    fontWeight: 'bold',
  } as React.CSSProperties,
  slider: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  } as React.CSSProperties,
};

export default TestimonialSlider;
