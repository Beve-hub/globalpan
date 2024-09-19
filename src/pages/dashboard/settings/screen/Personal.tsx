import { Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/firebase'; // Assuming you have set up Firebase and Firestore

const Personal = () => {
  const { state } = useLocation();
  const userId = state?.userId || ''; // Retrieve userId from location state
  
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        const userDocRef = doc(firestore, 'users', userId); // Adjust collection and doc id as needed
        const snapshot = await getDoc(userDocRef);        
        if (snapshot.exists()) {
          const userDetails = snapshot.data();
          console.log('userDetails', userDetails);

          // Update state with user details from Firestore
          if (userDetails) {
            setName(userDetails.name || '');
            setPhoneNumber(userDetails.phoneNumber || '');
            setZipCode(userDetails.zip || '');
            setAddress(userDetails.address || '');
            setCountry(userDetails.country || '');
          }
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchPersonalInfo();
  }, [userId]);

  return (
    <div style={{ backgroundColor: '#0055CC10', height: 'auto', padding: 20 }}>
      <Text fz={20} fw={600} mb={20}>
        Personal Information
      </Text>
      <div>
        <div>
          <Text my={10}>Full Name</Text>
          <Text color='#12121260' style={{border:'1px solid #12121240', padding:'5px 5px 10px 15px', borderRadius:5, backgroundColor:'#F4F6FF'}}>{name}</Text>
        </div>
        <div>
          <Text my={10}>Phone Number</Text>
          <Text color='#12121260' style={{border:'1px solid #12121240', padding:'5px 5px 10px 15px', borderRadius:5, backgroundColor:'#F4F6FF'}}>{phoneNumber}</Text>
        </div>
        <div>
          <Text my={10}>Address</Text>
          <Text color='#12121260' style={{border:'1px solid #12121240', padding:'5px 5px 10px 15px', borderRadius:5, backgroundColor:'#F4F6FF'}}>{address}</Text>
        </div>
        <div>
          <Text my={10}>Zip Code</Text>
          <Text color='#12121260' style={{border:'1px solid #12121240', padding:'5px 5px 10px 15px', borderRadius:5, backgroundColor:'#F4F6FF'}}>{zipCode}</Text>
        </div>
        <div>
          <Text my={10}>Country</Text>
          <Text  color='#12121260'style={{border:'1px solid #12121240', padding:'5px 5px 10px 15px', borderRadius:5, backgroundColor:'#F4F6FF'}}>{country}</Text>
        </div>
      </div>
    </div>
  );
};

export default Personal;
