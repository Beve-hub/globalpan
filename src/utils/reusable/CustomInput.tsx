import React from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { IconType } from 'react-icons';

interface InputFieldProps extends TextInputProps {
  icon?: IconType; // Use IconType for React Icons
}

const CustomInput: React.FC<InputFieldProps> = ({ icon: Icon, ...props }) => {
    return (
        <TextInput
        {...props}
        rightSection={Icon ? <Icon size={18} /> : null}
      />
    )
}

export default CustomInput
