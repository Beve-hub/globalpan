import { Box, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import vision from '@/asset/misson.png';
import mision from '@/asset/vision.png';
import { Color } from '@/utils/reusable/Theme';

const Vision = () => {
  // Use media query hook to create responsive breakpoints
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); 

  return (
    <div style={isSmallScreen ? styles.containerSmall : styles.container}>
      <div style={isSmallScreen ? styles.cardsContainerSmall : styles.cardsContainer}>
        <Box style={styles.card}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Image
              src={vision}
              alt="testimonial_image"
              style={{ width: '40px', height: '40px', borderRadius: 10 }}
            />
            <div style={{ display: 'grid', alignItems: 'flex-start' }}>
              <Text fz={24} fw={700}>Our Vision</Text>
            </div>
          </div>
          <Text style={styles.text}>
            Pan global aims to continue leading the way in innovation within the crypto trading industry. We strive to
            introduce new features that enhance user experience and broaden market access, all while maintaining the
            highest standards of security and compliance. Join us at Pan global and be part of a community that is
            shaping the future of cryptocurrency trading.
          </Text>
        </Box>
        <Box style={styles.card}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Image
              src={mision}
              alt="testimonial_image"
              style={{ width: '40px', height: '40px', borderRadius: 10 }}
            />
            <div style={{ display: 'grid', alignItems: 'flex-start' }}>
              <Text fz={24} fw={700}>Our Mission</Text>
            </div>
          </div>
          <Text style={styles.text}>
            Pan global was founded with a clear mission: to make cryptocurrency trading accessible, transparent, and
            secure for everyone. We believe in creating a platform where our users can easily trade a wide range of
            cryptocurrencies with confidence. Our commitment to security and compliance ensures that your investments
            are safe and your trading is in line with global standards.
          </Text>
        </Box>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50vh',
    marginTop: '120px',
    marginBottom: '100px',
    position: 'relative',
  } as React.CSSProperties,
  containerSmall: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '50px auto',
    position: 'relative',
  } as React.CSSProperties,
  cardsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '60rem',
    gap:20,
    position: 'relative',
  } as React.CSSProperties,
  cardsContainerSmall: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    padding: '0 20px',
  } as React.CSSProperties,
  card: {
    padding: '30px',
    backgroundColor: Color.INFO_COLOR ,
    borderRadius: '8px',
    width: '30rem',
    textAlign: 'start',
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
  } as React.CSSProperties,
  text: {
    fontSize: '16px',
    marginBottom: '10px',
  } as React.CSSProperties,
  name: {
    fontSize: '14px',
    fontWeight: 'bold',
  } as React.CSSProperties,
};

export default Vision;
