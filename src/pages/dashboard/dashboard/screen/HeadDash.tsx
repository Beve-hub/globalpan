import { Text } from "@mantine/core"
import { firestore } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const HeadDash = () => {
    const [name, setName] = useState<string>(() => {
        return localStorage.getItem('name') || '';
      });
    
      const { state } = useLocation();
      const userId = state?.userId || '';

      useEffect(() => {
        const fetchData = async () => {
          try {
            const userDocRef = doc(firestore, 'users', userId);
            const snapshot = await getDoc(userDocRef);
            if (snapshot.exists()) {
              const userDetails = snapshot.data();
              const newName = userDetails?.firstName || '';
              setName(newName);
              localStorage.setItem('name', newName);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, [userId]);
    
    return (
        <div>
            <Text fz={30} fw={700} mb={50}>
                Welcome, {name}
            </Text>
        </div>
    )
}

export default HeadDash
