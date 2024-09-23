import { Box, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import vision from '@/asset/misson.png';
import mision from '@/asset/vision.png';
import { Color } from '@/utils/reusable/Theme';

const Vision = () => {
  // Use media query hook to create responsive breakpoints
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: isSmallScreen ? 'auto' : '50vh',
        marginTop: isSmallScreen ? '50px' : '120px',
        marginBottom: isSmallScreen ? '50px' : '100px',
        padding: '20px',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          width: isSmallScreen ? '100%' : '60rem',
          gap: 20,
          padding: isSmallScreen ? '0 20px' : '0',
        }}
      >
        <Box
          style={{
            padding: '25px',
            backgroundColor: Color.INFO_COLOR,
            borderRadius: '8px',
            width: '100%',
            maxWidth: '30rem',
            textAlign: 'start',
            margin: '10px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            <Image
              src={vision}
              alt="vision_image"
              style={{ width: '40px', height: '40px', borderRadius: 10 }}
            />
            <div style={{ display: 'grid', alignItems: 'flex-start' }}>
              <Text fz={24} fw={700}>Our Vision</Text>
            </div>
          </div>
          <Text
            style={{
              fontSize: '16px',
              marginBottom: '10px',
            }}
          >
            Nexcel global aims to continue leading the way in innovation within the crypto trading industry. We strive to
            introduce new features that enhance user experience and broaden market access, all while maintaining the
            highest standards of security and compliance. Join us at Pan global and be part of a community that is
            shaping the future of cryptocurrency trading.
          </Text>
        </Box>

        <Box
          style={{
            padding: '25px',
            backgroundColor: Color.INFO_COLOR,
            borderRadius: '8px',
            width: '100%',
            maxWidth: '30rem',
            textAlign: 'start',
            margin: '10px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            <Image
              src={mision}
              alt="mission_image"
              style={{ width: '40px', height: '40px', borderRadius: 10 }}
            />
            <div style={{ display: 'grid', alignItems: 'flex-start' }}>
              <Text fz={24} fw={700}>Our Mission</Text>
            </div>
          </div>
          <Text
            style={{
              fontSize: '16px',
              marginBottom: '10px',
            }}
          >
           Nexcel global was founded with a clear mission: to make cryptocurrency trading accessible, transparent, and
            secure for everyone. We believe in creating a platform where our users can easily trade a wide range of
            cryptocurrencies with confidence. Our commitment to security and compliance ensures that your investments
            are safe and your trading is in line with global standards.
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default Vision;
