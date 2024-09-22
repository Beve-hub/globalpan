import { Box, Center, Group, Image, SimpleGrid,  Text } from '@mantine/core';
import IMG from '@/asset/about1.png';
import { useMediaQuery } from '@mantine/hooks';
import { serviceData } from '@/utils/data/Data';
import { Color } from '@/utils/reusable/Theme';


const AboutMain = () => {
    
    const isMobile = useMediaQuery('(max-width: 768px)');
  
   
    return (
        <Center style={{
            display:'grid'
        }}>
            <Box style={{
                display:"grid",
                justifyContent: 'center',
                alignItems:'center',  
                marginTop:40              
            }}>
            <Text fw={500} fz={16} style={{
                display:"grid",
                justifyContent: 'center',
                alignItems:'center',   
                color: Color.PRIMARY            
            }}>
               About  Pan Global
            </Text>
            <Text  fw={700} fz={30} style={{ color: Color.PRIMARY }}>
                We Are Helping People get Success
            </Text>
            </Box>
            
            <SimpleGrid
        cols={{ base: 1, sm: 1, lg: 2 }}        
        mx="70"
        mt={50}
      >
        <div>
          {!isMobile && ( // Only display the image when not on mobile
            <Image
              src={IMG}
              alt="About Us Image"
              style={{
                height: '25rem',
                width: '100%',
                maxWidth: '30rem',
                borderRadius: '10px ',
              }}
            />
          )}
        </div>
  
        <div>
          <div>      
          <Text fw={700} fz={24} my={10} color={Color.PRIMARY } >
           What we do at Pan Global{' '}
            <span
              style={{
                backgroundColor: Color.PRIMARY ,
                width: '10rem',
                height: '20px',
                fontSize: 4,
              }}
            >
              iusududufhcjjdjdskjalkhdhhdhdhdhdh
            </span>
            </Text>      
            <Text fz={17}>
            Pan Global Trade is the investors gateway to the world’s markets. we’re the core in real estate, stocks and E-currencies. our transparent, low commissions and financing rates, support for best price, stock yield enhancement program which help minimize costs to maximize your returns.
We strive to provide you an experience that is so simple, that anyone can start building their own investment portfolio whiles earning Hourly with us.

We offer various  services which the includes the following :
            </Text>
          </div>
          <Group mt="40">
          <SimpleGrid cols={{ base: 1, sm: 1, lg: 2 }}>
                {serviceData.map((item, index) => {
                    return (
                    <div key={index} >
                        <Text style={{display:'flex', textAlign:'center'}}>{item.icon}{item.mini}</Text>
                    </div>
                    );
                })}
          </SimpleGrid>
          </Group> 
          
                    
        </div>
      </SimpleGrid>
        </Center>
     
    );
}

export default AboutMain
