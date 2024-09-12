import { Center, Image } from '@mantine/core'
import React from 'react'
import IMG from '@/asset/about2.png'
import IMG2 from '@/asset/about3.png'

interface Props {
    
}

const Certificate: React.FC<Props> = () => {
    return (
        <Center  style={{
            height: '80vh',
            backgroundImage: `url(${IMG})`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <Image src={IMG2} alt='' style={{           
            height: '65vh',
            width: '100%',            
            zIndex: 0,
          }}/>
        </Center>
    )
}

export default Certificate
