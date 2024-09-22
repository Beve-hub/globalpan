import { heroFont } from '@/utils/data/Data';
import CustomButton from '@/utils/reusable/CustomButton';
import Loader from '@/utils/reusable/Loader';
import { Color } from '@/utils/reusable/Theme';
import {  Center, Group, useMantineTheme } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroScreen = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(true); // State to manage loading

  // Simulate loading state
  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false); // Hide loader after 2 seconds
      }, 2000); // Adjust the duration as needed
      return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const handleSubmit = () => {
      setLoading(true);
      setTimeout(() => {
          navigate('/register');
          setLoading(false);
      }, 2000); // Simulate a loading delay of 2 seconds
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroFont.length);
    }, 10000);

    return () => clearInterval(slideInterval);
  }, [heroFont.length]);

  if (loading) {
    return <Loader />; // Show loader if loading state is true
}
  return (
    <div
      style={{
        height: "90vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center", // Center content vertically
        justifyContent: "center", // Center content horizontally
      }}
    >
      {heroFont.map((item, index) => (
        <div
          key={index}
          style={{
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? "translateX(0)" : "translateX(100%)",
            transition: "opacity 1s ease, transform 1s ease",
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: Color.BLACK,
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Center h='60vh'>
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              zIndex: 2,
              padding: "0 5%",
              width: "90%",
              height: '20vh',
              maxWidth: "1000px",
              display:'grid',
              justifyContent:'center',
              alignItems: 'center'
            }}
          >
            <h1
              style={{
                fontSize: theme.breakpoints.xs ? "2.5rem" : theme.breakpoints.sm ? "3rem" : "4rem", // More refined responsive font size
                marginBottom: "1rem",
              }}
            >
              {item.title}
            </h1>
            <p
              style={{
                fontSize: theme.breakpoints.xs ? "1rem" : theme.breakpoints.sm ? "2.5rem" : "3rem", // More refined responsive font size
                marginBottom: "1.5rem",
              }}
            >
              {item.description}
            </p>
            <Group justify='center'>
            <CustomButton
            label='Get Started'
            size='md'
            onClick={handleSubmit}
            variant="filled"
            color={Color.PRIMARY}            
            />
            </Group>
            
          </div>
          </Center>
          
        </div>
      ))}
    </div>
  );
};

export default HeroScreen;
