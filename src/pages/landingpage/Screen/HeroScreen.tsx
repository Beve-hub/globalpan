import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image, Text, Overlay,  Button, Title } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';

import { useNavigate } from 'react-router-dom';
import { heroFont, HeroFontItem } from '@/utils/data/Data';

const HeroScreen = () => {
  const navigate = useNavigate();
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [slides, setSlides] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Generate slides only if heroFont data changes
    // Const test = heroFont.map( (item: any) => item );
    // Console.log({ test });

    const uniqueItems = Array.from(new Set(heroFont.map(item => item.title)))
      .map(title => {
        return heroFont.find(item => item.title === title);
      })
      .filter(item => item !== undefined) as HeroFontItem[];

    const slideComponents = uniqueItems.map((item, index) => (
      <Carousel.Slide key={index}>
        <Image
          src={item.image}
          alt="hero_image"
          fit="cover"
          style={{
            objectFit: 'cover',
            height: '90vh',
            width: '100%',
            position: 'absolute',
            top: '0',
            zIndex: 0,
          }}
        />
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.85) 100%)"
          opacity={0.8}
          zIndex={1}
          style={{ height: '90vh' }}
        />
        <div
          style={{           
            color: 'white',
            width: '80%',
            maxWidth: '600px',
            padding: '0 1rem',
            margin: 'auto',
            textAlign: 'start',
            zIndex: 3,
            position: 'relative',
          }}
        >
          <Title
            order={3}
            style={{
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
              fontSize: '32px',
              marginTop: 'var(--mantine-spacing-xs)',
              cursor: 'default',
            }}
          >
            {item.title}
          </Title>
          <Text
            style={{
              color: 'white',
              opacity: 0.7,
              fontWeight: 400,
              cursor: 'default',
            }}
            size="md"
          >
            {item.description}
          </Text>
          <Button variant="filled" color="#293991" onClick={() => navigate('/login')}>
            Get started Now
          </Button>
        </div>
      </Carousel.Slide>
    ));

    setSlides(slideComponents);
  }, [heroFont, navigate]);

  console.log('slides', slides);
 
  return (
    <div style={{ height: '90vh', position: 'relative' }}>
      <Carousel
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.reset()}
        loop
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          zIndex: 2,
        }}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default HeroScreen;
