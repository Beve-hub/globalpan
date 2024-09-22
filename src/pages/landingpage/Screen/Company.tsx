import {Box, Center, Flex, Image, SimpleGrid, Text, } from '@mantine/core';
import IMG from '@/asset/real ceo.png';
import { useMediaQuery } from '@mantine/hooks';
import { PiTimerThin,PiUsersThreeThin } from "react-icons/pi";
import { Color } from '@/utils/reusable/Theme';

const Company = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Center
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        maxWidth: '80vw',
        width: '100%',
        paddingTop:50,
        margin: '0 auto',
        
      }}
    >
      <SimpleGrid
        cols={isMobile ? 1 : 2}
        spacing={20} // Add gap between the image and text content
        
      >
        {!isMobile && ( // Only display the image when not on mobile
          <Image
            src={IMG}
            alt="About Us Image"
            style={{
              height: '25rem',
              width: '100%',
              maxWidth: '25rem',
              borderRadius: '10px',
            }}
          />
        )}
        <div>
          <Text fw={700} fz={24}>
            Company Review
          </Text>
          <Text my={10} fw={500} fz={24} style={{ color: Color.PRIMARY }}>
            Get to know us{' '}
            <span
              style={{
                backgroundColor:  Color.PRIMARY,
                width: '20rem',
                height: '20px',
                fontSize: 4,
              }}
            >
              iusududufhcjjdjdskjalkhdhhdhdhdhdhdxbhhhshshdhomedhjdhdhhddhhdhdhdh
            </span>
          </Text>
          <Text fz={17}>
          As a lifetime business partner, Pan global trade is committed in helping investors maximize profits by giving the upper-hand on increasing capital value with early detection of profitable trends.
          We’re very selective about the investments we recommend. Because we know how hard you’re working to achieve the milestones that mean the most to you. And we want to make sure we’re giving you the best possible choices.
          </Text>

          <Flex direction={{ base: 'column', sm: 'row' }} gap={20}  mt={40}>
      {/* First Item */}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid  #293991',
          borderRadius: 10,
          alignItems: 'center',
          gap: 20,
          padding: 10,
        }}
      >
        <PiTimerThin size={30} color={ Color.PRIMARY} />
        <Box
          style={{
            display: 'grid',
            borderLeft: '0.5px solid  Color.PRIMARY',
            paddingLeft: 10,
          }}
        >
          <Text fz={23} fw={900} color={ Color.PRIMARY} ta="center">
            7+
          </Text>
          <Text fz={18} fw={300} color={ Color.PRIMARY}>
            Years experience
          </Text>
        </Box>
      </Box>

      {/* Second Item */}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid  #293991',
          borderRadius: 10,
          alignItems: 'center',
          gap: 20,
          padding: 10,
        }}
      >
        <PiUsersThreeThin size={30} color={ Color.PRIMARY} />
        <Box
          style={{
            display: 'grid',
            borderLeft: '0.5px solid  Color.PRIMARY',
            paddingLeft: 10,
          }}
        >
          <Text fz={23} fw={900} color={ Color.PRIMARY} ta="center">
            489K
          </Text>
          <Text fz={18} fw={300} color={ Color.PRIMARY}>
            Happy Clients
          </Text>
        </Box>
      </Box>
    </Flex>
          
        </div>
      </SimpleGrid>
    </Center>
  );
};

export default Company;
