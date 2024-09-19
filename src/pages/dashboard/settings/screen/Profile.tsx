import React, { useEffect, useState } from 'react';
import CustomButton from '@/utils/reusable/CustomButton';
import { useMediaQuery } from '@mantine/hooks';
import { Box, Group, Text, Modal,  Avatar,Button } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/firebase';
import { useAuth } from '@/layout/AuthProvider';
import { notifications } from '@mantine/notifications';

const Profile = () => {
  const { state } = useLocation();
  const userId = state?.userId || '';
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const [isIcon, setIsIcon] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const { deleteAccount } = useAuth(); // Use deleteAccount from context
// Function to return a random color from a set of Mantine colors
const getRandomColor = () => {
  const colors = ['blue', 'red', 'green', 'orange', 'pink', 'violet'];
  return colors[Math.floor(Math.random() * colors.length)];
};
  const validateName = (name: string): string => {
    if (name.length < 4) {
      return 'User'; // Default name for too short names
    }
    if (name.length > 12) {
      return name.substring(0, 12); // Truncate names longer than 12 characters
    }
    return name; // Return the name as is if it is within the valid range
  };

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(firestore, 'users', userId);
        const snapshot = await getDoc(userDocRef);
        if (snapshot.exists()) {
          const userDetails = snapshot.data();
          const validatedName = validateName(userDetails.firstName);
          setName(validatedName);
          localStorage.setItem('name', validatedName);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        const userDocRef = doc(firestore, 'users', userId);
        const snapshot = await getDoc(userDocRef);
        if (snapshot.exists()) {
          const userDetails = snapshot.data();
          console.log('userDetails', userDetails);

          if (userDetails) {
            setName(userDetails.name || '');
            setRole(userDetails.role || '');
            setEmail(userDetails.email || '');
          }
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchPersonalInfo();
  }, [userId]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsIcon(!isIcon);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteAccount(); // Call deleteAccount function
      notifications.show({
        title: `Account Successfully Deleted `,
        message: `Account successfully deleted`,
        color: '#299165',
        position:'top-right',
    });
      
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error deleting account:', error);
      notifications.show({
        title: 'Failed Attempt',
        message: 'Failed to delete account',
        color: 'red',
        position:'top-right',
    });
     
    }
  };

  return (
    <div style={{
      backgroundColor: '#0055CC15',
      height: 'auto',
      padding: '2rem',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40
    }}>
      <Box style={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
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
              tabIndex={0}
              onClick={() => setIsIcon(!isIcon)}
              onKeyPress={handleKeyPress}
            >
             <Avatar radius="md" color={getRandomColor()} size='xl'>
                {name ? name.substring(0, 2).toUpperCase() : "?"}
              </Avatar>
            </div>

          </div>
          <div style={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: '#121212' }}>{name}</Text>
            <Text style={{ fontSize: 14, fontWeight: 500, color: '#121212' }}>{role}</Text>
            <Text style={{ fontSize: 14, color: '#12121280' }}>{email}</Text>
          </div>
        </Group>
        <Group>
          <CustomButton
            label='Delete Account'
            onClick={() => setModalOpen(true)} // Open modal on click
            variant="filled"
            color="#CC0000"
            size="md"
            radius="md"
          />
        </Group>
      </Box>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Account Deletion"
        centered
      >
        <Text>Are you sure you want to delete your account? This action cannot be undone.</Text>
        <Group  style={{ marginTop: '1rem' }}>
          <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button color="red" onClick={handleDelete}>Delete Account</Button>
        </Group>
      </Modal>
    </div>
  );
};

export default Profile;
