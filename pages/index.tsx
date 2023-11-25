import Image from 'next/image'
import { Inter } from 'next/font/google'
import BirthdayForm from '../components/BirthdayForm'
import BirthdayList from '../components/BirthdayList'
import { useState } from 'react'

interface BirthdayData {
  name: string;
  date: string;
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [birthdays, setBirthdays] = useState<BirthdayData[]>([]);

  const addBirthday = (data: BirthdayData) => {
    setBirthdays([...birthdays, data]);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <BirthdayForm addBirthday={addBirthday} />
      <BirthdayList birthdays={birthdays} />
    </main>
  )
}