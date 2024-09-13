import React from 'react'
import { Tabs, } from '@mantine/core';
import CyptoBody from './CyptoBody';
import ForexBody from './ForexBody';

interface Props {
    
}

const BodyAnalysis: React.FC<Props> = () => {
    return (
      <div style={{marginTop:20}}>
        
         <Tabs variant="pills" defaultValue="forex" color="#293991" >
      <Tabs.List style={{marginBottom:40}}>
        <Tabs.Tab value="forex">
          Forex Trends
        </Tabs.Tab>
        <Tabs.Tab value="crypto">
          Crypto Trends
        </Tabs.Tab>
        
      </Tabs.List>

      <Tabs.Panel value="forex">
        <ForexBody/>
      </Tabs.Panel>

      <Tabs.Panel value="crypto">
        <CyptoBody />
      </Tabs.Panel>

    </Tabs>
      </div>
       
    )
}

export default BodyAnalysis
