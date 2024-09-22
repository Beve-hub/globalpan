import { Image,  Overlay, Title, UnstyledButton, Group } from '@mantine/core';
import IMG from '@/asset/top.png'
import { useNavigate } from 'react-router-dom';
import { Color } from '@/utils/reusable/Theme';


const ContactTop = () => {
    const navigate = useNavigate();

    const handleHome = () => {
      navigate('/');
    };
      return (
          <div style={{marginTop:90, height: '30vh', position:'relative'}}>
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
                height: '30vh',
                width: '100%',
                position: 'absolute',
                top: '0',
                zIndex: 0,
              }}
            />
            <Overlay
              gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.85) 100%)"
              opacity={2}
              zIndex={1}
              style={{ height: '30vh' }}
            />
            <div
              style={{           
                color: Color.WHITE,
                width: '80%',
                maxWidth: '600px',
                padding: '0 1rem',
                margin: 'auto',
                textAlign: 'center',
                zIndex: 3,
                position: 'relative',
                height:'15rem',
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
              Contact
              </Title>   
              <Group
                style={{
                  color: Color.WHITE,             
                  fontWeight: 400,
                  cursor: 'default',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                  fontSize:20,
                }}
               
              >
               <UnstyledButton onClick={handleHome} style={{cursor: 'pointer', fontSize:18}}>Home</UnstyledButton>  /  
                  <UnstyledButton style={{
                color: Color.PRIMARY,             
                  cursor: 'default',
                  fontSize:18}}>Contact</UnstyledButton>
              </Group>
              
              </div>
              
            </div>
            </div>
          </div>
        );
}

export default ContactTop
