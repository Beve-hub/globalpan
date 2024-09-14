import React, { useEffect } from 'react'
import { Modal, ActionIcon, Box, Center, CopyButton, Group, Text, Tooltip, UnstyledButton, Image } from '@mantine/core';
import CustomButton from '@/utils/reusable/CustomButton';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";
import { IoCopyOutline,IoCheckmark } from "react-icons/io5";
import { useDisclosure } from '@mantine/hooks';
import Gif from '@/asset/7efs.gif'

const Payment = () => {
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
  
      const handleInvest = () => {
        navigate('/invest');
      };

      useEffect(() => {
        // Dynamically load the Lottie Player script
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
        script.type = "module";
        document.body.appendChild(script);
    
        return () => {
          // Cleanup the script when component unmounts
          document.body.removeChild(script);
        };
      }, []);
    return (
        <div >
            <UnstyledButton onClick={handleInvest} style={{
           display:'flex',
           justifyItems: 'center',
           alignItems: 'center',
           marginLeft:'10rem',
            marginTop:'2rem',
            gap:10
        }}>
                <div style={{display:'flex',backgroundColor:'#12121210',padding:'0.5rem', borderRadius:90}}>
                <FiChevronLeft size={20}/>
                </div>
                <Text fz={18} >Back</Text>
            </UnstyledButton>
             <Center  h='40rem' style={{display:'grid',}}>
           <div>
           <div style={{width:'30rem', marginBottom:30}}>
           <Text fz={25} fw={700}> Proceed To Payment</Text>
           <Text fz={16} fw={300}>Please follow the instruction below
           copy wallet address and network, pls confirm wallet address and network channel before payment  </Text>
           
           </div>
          <Box mb={40}>
            <Group  my={20} style={{justifyContent:'space-between'}}>
                <Text fz={18}>Wallet  :</Text>
                <Text fz={18}>Bitcoin</Text>                
            </Group>
            <Group  my={20} style={{justifyContent:'space-between'}}>
                <Text fz={18}>Wallet Address  :</Text>
                <Text fz={18}>2345678736hxncj 
                    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IoCheckmark size={20}/>
            ) : (
              <IoCopyOutline size={20} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
            </Text>                
            </Group>
            <Group  my={20} style={{justifyContent:'space-between'}}>
                <Text fz={18}>Network Channel  :</Text>
                <Text fz={18}>Bitcoin 
                <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IoCheckmark size={20}/>
            ) : (
              <IoCopyOutline size={20} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
                </Text>                
            </Group>
            
           </Box>
           <CustomButton 
           label='Click when payment is completed'
            onClick={open}
          variant="filled"
          color="#293991"
          size="md"
          fullWidth
          radius="md"/>
           </div>
           

           <Modal opened={opened} onClose={close}  centered>
            <div>
                <Group style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{textAlign:'center'}} fz={25} fw={600}>Payment Successful</Text>
                <Image src={Gif}/>
                
                </Group>
                
                <CustomButton label='Go Back' onClick={close} variant="filled" color="#293991" size="md" fullWidth radius="md"/>
            </div>
      </Modal>
        </Center>
        </div>
       
    )
}

export default Payment
