import {  Input, Text } from '@mantine/core'
import React from 'react'

interface Props {
   
}

const Personal: React.FC<Props> = () => {
    return (
        <div style={{backgroundColor:'#0055CC10', height:'auto', padding:20}}>
            <Text fz={20} fw={600} mb={20}>
                Personal Information
            </Text>
            <div>
            <Input.Wrapper label="Full Name">
          <Input value="John Doe" disabled />
        </Input.Wrapper>

        <Input.Wrapper label="Phone Number">
          <Input value="123-456-7890" disabled />
        </Input.Wrapper>
        <Input.Wrapper label="Occupation">
          <Input value="123 Example Street" disabled />
        </Input.Wrapper>
        <Input.Wrapper label="Address">
          <Input value="123 Example Street" disabled />
        </Input.Wrapper>
        <Input.Wrapper label="ZIp Code">
          <Input value="123 Example Street" disabled />
        </Input.Wrapper>
        <Input.Wrapper label="Country">
          <Input value="123 Example Street" disabled />
        </Input.Wrapper>
        
            </div>
        </div>
    )
}

export default Personal
