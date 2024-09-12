import { useState } from 'react';
import { Box, Center, Image, SimpleGrid, Text, Button } from '@mantine/core';
import IMG from '@/asset/real ceo.png';
import { useMediaQuery } from '@mantine/hooks';

const TeamCeo = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to control "Read More"
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleReadMoreToggle = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <Center
      style={{
        display: 'grid',
      }}
    >
      <Box
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        <Text
          fw={500}
          fz={16}
          style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#293991',
          }}
        >
          Our Staff Profiles
        </Text>
        <Text fw={700} fz={30} style={{ color: '#121212' }}>
          GET TO KNOW OUR TEAM OF EXPERTS
        </Text>
      </Box>

      <SimpleGrid cols={isMobile ? 1 : 2} mx="70" mt={50}>
        {!isMobile && (
          <Image
            src={IMG}
            alt="About Us Image"
            style={{
              height: '25rem',
              width: '100%',
              maxWidth: '30rem',
              borderRadius: '10px',
            }}
          />
        )}

        <div>
          <Text fw={700} fz={24} my={10} color="#293991">
            Our CEO
          </Text>
          <Text fz={17}>
            Edward Campbell is an Australian American-born businessman, investor, and the founder of Optimums Exchange. With years of experience in the investment industry, Edward has gained a reputation as a knowledgeable and successful investor. His dedication and commitment to the industry led him to establish Pan Global, an investment company that provides cutting-edge trading solutions to clients around the world.
            <br />
            <br />
            Under his leadership, Optimums Exchange has become a trusted name in the investment world, known for its innovative strategies and exceptional customer service. He has assembled a team of experts who share his vision for excellence, and together they continue to push the boundaries of what is possible in the world of finance.
            <br />
            <br />
            {isExpanded && (
              <>
                Our firm's business structure provides distinct client service advantages. Portfolio managers, analysts, and investment committee members are one and the same. They also meet directly with our clients. On a daily basis, they are involved in the analysis, design, and implementation of portfolios.
                <br />
                <br />
                As a result of our team approach, each member must synthesize and analyze relevant macro-economic data, industry trends, and company financials as a basis for investment recommendations. This level of daily involvement keeps each member acutely aware of market fundamentals and emphasizes the accountability links between idea generation, analysis, investment recommendation, and ultimately, account performance. This increased accountability helps align interests more closely with our clients’ interests. Accessibility and accountability, combined with an experienced support staff, provide us the tools to deliver a superior level of customer service.
              </>
            )}
          </Text>
          {!isExpanded ? (
            <Button
              onClick={handleReadMoreToggle}
              variant="outline"
              mt={10}
              style={{ color: '#293991', borderColor: '#293991' }}
            >
              Read More
            </Button>
          ) : (
            <Button
              onClick={handleReadMoreToggle}
              variant="outline"
              mt={10}
              style={{ color: '#293991', borderColor: '#293991' }}
            >
              Read Less
            </Button>
          )}
        </div>
      </SimpleGrid>
    </Center>
  );
};

export default TeamCeo;
