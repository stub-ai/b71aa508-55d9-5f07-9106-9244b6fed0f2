import React, { useState } from 'react';
import BirthdayForm from '../components/BirthdayForm';
import BirthdayList from '../components/BirthdayList';

interface BirthdayData {
  name: string;
  date: string;
}

const Home: React.FC = () => {
  const [birthdays, setBirthdays] = useState<BirthdayData[]>([]);

  const addBirthday = (data: BirthdayData) => {
    setBirthdays([...birthdays, data]);
  };

  return (
    <div>
      <BirthdayForm addBirthday={addBirthday} />
      <BirthdayList />
    </div>
  );
};

export default Home;