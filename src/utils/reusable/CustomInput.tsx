import React, { useState } from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { IconType } from 'react-icons';
import { FiLock, FiUnlock } from 'react-icons/fi'; // Import lock/unlock icons

interface InputFieldProps extends TextInputProps {
  icon?: IconType; // Use IconType for React Icons
}

const CustomInput: React.FC<InputFieldProps> = ({ icon, type, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Determine if the input type is password and use default icons accordingly
  const isPasswordType = type === 'password';
  const Icon = isPasswordType
    ? (isPasswordVisible ? FiUnlock : FiLock) // Toggle between lock and unlock icons
    : icon; // Use provided icon for other types

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    if (isPasswordType) {
      setIsPasswordVisible((prev) => !prev);
    }
  };

  return (
    <TextInput
      {...props}
      type={isPasswordType ? (isPasswordVisible ? 'text' : 'password') : type} // Conditionally change type
      rightSection={
        Icon ? (
          <Icon
            size={18}
            onClick={isPasswordType ? togglePasswordVisibility : undefined} // Handle click for password type
            style={{ cursor: isPasswordType ? 'pointer' : 'default' }} // Show pointer cursor for password icon
          />
        ) : null
      }
    />
  );
};

export default CustomInput;
