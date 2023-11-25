import React from 'react';

interface BirthdayData {
  name: string;
  date: string;
}

interface Props {
  birthdays: BirthdayData[];
}

const BirthdayList: React.FC<Props> = ({ birthdays }) => {
  return (
    <table className="table-auto w-full mt-6">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {birthdays.map((birthday, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
            <td className="border px-4 py-2">{birthday.name}</td>
            <td className="border px-4 py-2">{birthday.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BirthdayList;