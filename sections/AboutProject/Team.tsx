import { TeamDataType } from '@sections/types';
import React from 'react';

const Team = () => {
  const mockTeam: Array<TeamDataType> = [
    { name: 'V K', role: 'Chaos' },
    { name: 'Alisa Fursa', role: 'Strategy' },
    { name: 'Kevin Lista Navarro', role: 'Assistant Director' },
    { name: 'Oleksandr Pokhylenko', role: 'Technology' },
    { name: 'Alexander Yavorskyy', role: 'Voice' },
    { name: 'Oleksandra Shamonova', role: 'Project manager' },
    { name: 'Anastasiya Shyshenok', role: 'Identity' },
    { name: 'Serhii Revva', role: 'Experience' },
    { name: 'Elina Norden', role: 'Voice' },
    { name: 'Liliana Kolodka', role: 'Project manager' },
    { name: 'Glib Kaporikov', role: 'Identity' },
    { name: 'Rustam Abduvaliiev', role: 'Frontend' },
    { name: 'Valeriia Kucheriavenko', role: 'Description Journalist' },
    { name: 'Oleksandra Postoieva', role: 'Description Journalist' },
    { name: 'Alyosha Kovalenko', role: 'Author' },
    { name: 'Oleh Zasadnyy', role: 'Frontend' },
  ];

  return (
    <div className="mb-3% mt-48px">
      <div
        className="grid 
        desktop:grid-cols-4 desktop:gap-x-60px
        tablet:grid-cols-2 tablet:gap-x-40px
        mobile:grid-cols-1"
      >
        {mockTeam.map((teamData, idx) => (
          <div key={idx} className="pt-20px">
            <p className="text-18px font-rnarrow">{teamData.name}</p>
            <p className="text-16px font-rlight">{teamData.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
