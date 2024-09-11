import { heroFont } from '@/utils/data/Data';
import { Button, useMantineTheme } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const HeroScreen = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const theme = useMantineTheme();

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroFont.length);
    }, 10000);

    return () => clearInterval(slideInterval);
  }, [heroFont.length]);

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
            backgroundColor: '#121212',
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
              maxWidth: "1000px",
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
            <Button
              style={{
                padding: theme.breakpoints.xs ? "8px 16px" : "10px 20px",
                fontSize: theme.breakpoints.xs ? "0.875rem" : "1rem", // Adjust font size for smaller screens
                backgroundColor: "#1a73e8",
                color: "white",
                border: "none",
                cursor: "pointer",
                width: "auto",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroScreen;
