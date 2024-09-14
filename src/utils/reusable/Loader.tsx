import { Center } from '@mantine/core';
import  RingLoader  from 'react-spinners/RingLoader'
const Loader = () => {
  return (
    <Center style={{ width: '100vw', height: '100vh', backgroundColor: '#121212',overflow:'hidden' }}>
      <RingLoader
       color="#1000ee"
       size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
         />
    </Center>
  );
};

export default Loader;
