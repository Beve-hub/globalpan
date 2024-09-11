import { Group, Image, SimpleGrid, Tabs, Text } from '@mantine/core';
import IMG from '@/asset/about.png';
import { useMediaQuery } from '@mantine/hooks';
import CustomButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate(); // Import the useNavigate hook from react-router-dom
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleLogin = () => {
    // Navigate to the login page
    navigate('/about');
  }
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 1, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      mx="70"
      mt={50}
    >
      <div>
        {!isMobile && ( // Only display the image when not on mobile
          <Image
            src={IMG}
            alt="About Us Image"
            style={{
              height: '30rem',
              width: '100%',
              maxWidth: '30rem',
              borderRadius: '50px 0 0 50px',
            }}
          />
        )}
      </div>

      <div>
        <div>
          <Text fw={700} fz={24} >
            ABOUT US
          </Text>
          <Text my={10} fw={500} fz={20} style={{ color: '#293991' }}>
            Who is Pan Global?{' '}
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
          <Text fz={17}>
            Pan Global is the investors gateway to the world’s markets. we’re the core in real estate, stocks and E-currencies. our transparent, low commissions and financing rates, support for best price, stock yield enhancement program which help minimize costs to maximize your returns.
          </Text>
        </div>
        <Group mt="40">
        <Tabs        
          defaultValue="gallery"
          styles={{
            tab: {
                color: '#293991',
            },
            tabLabel: {
                color: '#293991',
                fontWeight: 500,
                fontSize: '20px',               
            width:'10rem'
          }}}
        >
          <Tabs.List>
            <Tabs.Tab value="gallery">Our Mission</Tabs.Tab>
            <Tabs.Tab value="messages">Our Vision</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" fz={16}>
          Pan global was founded with a clear mission: to make cryptocurrency trading accessible, transparent, and secure for everyone. We believe in creating a platform where our users can easily trade a wide range of cryptocurrencies with confidence. Our commitment to security and compliance ensures that your investments are safe and your trading is in line with global standards.
          </Tabs.Panel>

          <Tabs.Panel value="messages" fz={16}>
          Pan global aims to continue leading the way in innovation within the crypto trading industry. We strive to introduce new features that enhance user experience and broaden market access, all while maintaining the highest standards of security and compliance. Join us at Pan global and be part of a community that is shaping the future of cryptocurrency trading.
          </Tabs.Panel>
        </Tabs>
        </Group> 
        <Group mt={30}>
        <CustomButton
                    label="Read More"
                    onClick={handleLogin}
                    variant="filled"
                    color="#293991"
                    radius="xs"
                    fz="lg"
                    size='lg'
                  />  
        </Group>
                  
      </div>
    </SimpleGrid>
  );
};

export default AboutUs;
