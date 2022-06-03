import { TeamDataType } from '@sections/types';
import React from 'react';

const Team = () => {
  const mockTeam: Array<TeamDataType> = [
    { name: 'V K', role: 'Chaos' },
    { name: 'Glib Kaporikov', role: 'Identity' },
    { name: 'Serhii Revva', role: 'Experience' },
    { name: 'Oleksandr Pokhylenko', role: 'Technology' },
    { name: 'Neonila Vodolska', role: 'Order' },
    { name: 'Alexander Yavorskyy', role: 'Voice' },
    { name: 'Kateryna Dranova', role: 'Voice' },
    { name: 'Nick Zinchenko', role: 'Art Support' },
    { name: 'Kevin Lista Navarro', role: 'Assistant Director' },
    { name: 'Valeria Panina', role: 'Government Communications' },
    { name: 'Rustam Abduvaliiev', role: 'Frontend' },
  ];

  return (
    <div className="mb-3% mt-48px">
      <div
        className="grid 
        desktop:grid-cols-4 desktop:gap-x-60px
        tablet:grid-cols-2 tablet:gap-x-40px
        mobile:grid-cols-1 pb-50px"
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
