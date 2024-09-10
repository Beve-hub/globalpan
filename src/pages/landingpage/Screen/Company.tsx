import { Image, SimpleGrid ,Text } from '@mantine/core';
import IMG from '@/asset/real ceo.png';
import { useMediaQuery } from '@mantine/hooks';



const Company = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
  
    return (
        <div style={{
            padding: '50px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',            
            maxWidth: '120vw',
           
        }}>
            <SimpleGrid
        cols={{ base: 1, sm: 1, lg: 2 }}
        spacing={{ base: 10, sm: 'xl' }}
        mx="70"
      >
        <div>
          <div>
            <Text fw={700} fz={24} >
              Compnay Review
            </Text>
            <Text my={10} fw={500} fz={20} style={{ color: '#293991' }}>
              Get to know us <span style={{backgroundColor:'#293991',width:'20rem', height:'20px', fontSize:4,}}>iusududufhcjjdjdskjalkhdhhdhdhdhdhdxbhhhshshdhomedhjdhdhhddhhdhdhdh </span>
            </Text>
            <Text fz={17}>
              Pan Global is the investors gateway to the world’s markets. we’re the core in real estate, stocks and E-currencies. our transparent, low commissions and financing rates, support for best price, stock yield enhancement program which help minimize costs to maximize your returns.
            </Text>
          </div>
          
        </div>
        <div>
          {!isMobile && ( // Only display the image when not on mobile
            <Image
              src={IMG}
              alt="About Us Image"
              style={{
                height: '30rem',
                width: '100%',
                maxWidth: '30rem',
                borderRadius: '10px',
              }}
            />
          )}
        </div>
      </SimpleGrid>
        </div>
      
    );
}

export default Company
