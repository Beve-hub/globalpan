import React from 'react';
import { Textarea, TextareaProps } from '@mantine/core';

interface CustomTextareaProps extends TextareaProps {
  // Add any custom props you want to use
  highlightColor?: string;
}

const CustomTextArea: React.FC<CustomTextareaProps> = ({ highlightColor = 'blue', ...props }) => {
    return (
        <Textarea
      {...props}
      styles={{
        input: {
          borderColor: highlightColor, // Custom border color
          '&:focus': {
            borderColor: highlightColor, // Custom border color on focus
            boxShadow: `0 0 0 1px ${highlightColor}`, // Custom shadow on focus
          },
        },
      }}
    />
    )
}

export default CustomTextArea
