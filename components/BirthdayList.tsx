import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

interface BirthdayData {
  name: string;
  date: string;
}

const BirthdayList: React.FC = () => {
  const [birthdays, setBirthdays] = useState<BirthdayData[]>([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "birthdays"));
    const birthdays: BirthdayData[] = [];
    querySnapshot.forEach((doc) => {
      birthdays.push(doc.data() as BirthdayData);
    });
    setBirthdays(birthdays);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {birthdays.map((birthday, index) => (
        <div key={index}>
          <p>Name: {birthday.name}</p>
          <p>Date: {birthday.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BirthdayList;