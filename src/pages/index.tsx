// pages/index.tsx
import Header from "@/components/NavBar";
import UserList from "@/components/UserList";
import { db } from '@/firestore';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

interface DataItem {
  id: string;
  name: string;
}

const dbInstance = collection(db, 'test');

export default function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(dbInstance, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });

    return () => {
      // Unsubscribe from the Firestore listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const saveNote = async () => {
    try {
      const docRef = await addDoc(dbInstance, {
        name: 'test12',
      });
      console.log('🚀 Data added to Firestore with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding data to Firestore:', error);
    }
  };

  return (
    <>
    <Header/>
    <UserList/>
    
    
    </>
   
  
  );
}
