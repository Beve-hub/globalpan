import React, { useState } from 'react';
import CustomButton from '@/utils/reusable/CustomButton';
import { FaUser } from "react-icons/fa";
import { useMediaQuery } from '@mantine/hooks';
import { Box, Group, Input, Text } from '@mantine/core';
import { RiEdit2Fill } from "react-icons/ri";
interface Props {}

const Profile: React.FC<Props> = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const [isIcon, setIsIcon] = useState(true); // To toggle between icon and image
  const [image, setImage] = useState<string | null>(null); // Store uploaded image

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setIsIcon(false); // Switch to image view
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle key press for accessibility
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsIcon(!isIcon);
    }
  };

  return (
    <div style={{
      backgroundColor: '#0055CC15',
      height: 'auto', // Allow auto height for responsiveness
      padding: '2rem',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column', // Stack items on small screens
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40
    }}>
      <Box style={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row', // Change flex direction based on screen size
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: '1rem',
      }}>
        <Group style={{
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'center',
        }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div
              style={{
                backgroundColor: '#ffff',
                padding: 10,
                borderRadius: 10,
                cursor: 'pointer',
              }}
              role="button"
              tabIndex={0} // Make the div focusable
              onClick={() => setIsIcon(!isIcon)} // Toggle between icon and image
              onKeyPress={handleKeyPress} // Handle keyboard interaction for accessibility
            >
              {isIcon ? (
                <FaUser size={50} />
              ) : (
                <img
                  src={image || 'https://via.placeholder.com/150'} // Default image or selected image
                  alt="Selected"
                  style={{ width: 100, height: 100, borderRadius: '10%' }}
                />
              )}
            </div>

            {/* Edit icon */}
            <RiEdit2Fill
            size={30}
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                cursor: 'pointer',               
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: 5,
              }}
              onClick={() => document.getElementById('image-upload')?.click()} // Trigger file input click
            />

            {/* Hidden file input */}
            <Input
              type="file"
              id="image-upload"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div style={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: '#121212' }}>Believe</Text>
            <Text style={{ fontSize: 14, fontWeight: 500, color: '#121212' }}>Investor</Text>
            <Text style={{ fontSize: 14, color: '#12121280' }}>victor@gmail.com</Text>
          </div>
        </Group>
        <Group>
          <CustomButton
            label='Delete Account'
            onClick={() => console.log('Account deleted')}
            variant="filled"
            color="#CC0000"
            size="md"
            radius="md"
          />
        </Group>
      </Box>
    </div>
  );
};

export default Profile;
