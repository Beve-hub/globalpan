import { Text } from '@mantine/core';



const SideFooter = () => {
    
    
      return (
        <footer >
          
          <center
          style={{ width: '100%', padding: 'var(--mantine-spacing-xl)', backgroundColor: 'var(--mantine-color-gray-0)', borderTop: '1px solid var(--mantine-color-gray-2)' }}>
        
           <Text color="dimmed" size="sm">
              © 2008 Pan Global All rights reserved.
            </Text>
           
          </center>
        </footer>
      );
}

export default SideFooter
