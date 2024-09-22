import { Image, Text, Overlay,  Button, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import IMG from '@/asset/start.png'
import { Color } from '@/utils/reusable/Theme';

const Started = () => {
    const navigate = useNavigate();
    return (
      <div style={{ height: '40vh', position:'relative',marginTop:50}}>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            zIndex: 2,
          }}
        >
         <Image
          src={IMG}
          alt="hero_image"
          fit="cover"
          style={{
            objectFit: 'cover',
            height: '40vh',
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
          style={{ height: '40vh' }}
        />
        <div
          style={{           
            color: 'white',
            width: '80%',
            maxWidth: '600px',
            padding: '0 1rem',
            margin: 'auto',
            textAlign: 'center',
            zIndex: 3,
            position: 'relative',
            height:'18rem',
            display: 'grid',
            justifyContent:'center',
            alignItems: 'center'
          }}
        >
          <div>
          <Title
            order={3}
            style={{
              fontWeight: 700,
              color: Color.WHITE,
              lineHeight: 1.2,
              fontSize: '28px',
              marginTop: 'var(--mantine-spacing-xs)',
              cursor: 'default',
            }}
          >
           Get Started With Us Today 
          </Title>
          <Text
            style={{
              color: 'white',
              opacity: 0.7,
              fontWeight: 400,
              cursor: 'default',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
            size="md"
          >
           Open account for free and start trading Now!
          </Text>
          <Button variant="filled" color={Color.PRIMARY} onClick={() => navigate('/login')}>
          Register Now
          </Button>
          </div>
          
        </div>
        </div>
      </div>
    );
}

export default Started
