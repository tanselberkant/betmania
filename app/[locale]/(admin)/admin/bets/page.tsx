import BetsTable from '@/components/bets/BetsTable';
import React from 'react';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/coupons', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const AdminBetsPage = async () => {
  const coupons = await getData();
  // console.log(coupons);
  return (
    <div>
      {coupons.map((coupon: BetsData, index: number) => (
        <BetsTable coupon={coupon} key={index} />
      ))}
    </div>
  );
};

export default AdminBetsPage;

const couponExample = [
  {
    id: 1,
    advisorName: 'Drake Bet',
    description: 'Kumarcı adam bunu oynar',
    matches: [
      {
        matchCode: 'M123',
        date: '2024-01-20',
        versus: 'Team A vs Team B',
        bets: '2',
        odd: 1.5,
      },
      {
        matchCode: 'M124',
        date: '2024-01-21',
        versus: 'Team C vs Team D',
        bets: 'Over 2.5',
        odd: 2.0,
      },
      {
        matchCode: 'M125',
        date: '2024-01-22',
        versus: 'Team E vs Team F',
        bets: 'KG VAR',
        odd: 1.8,
      },
    ],
  },
  {
    id: 2,
    advisorName: 'Looser Bet',
    description: 'Ezikler için bir bets',
    matches: [
      {
        matchCode: 'M123',
        date: '2024-01-20',
        versus: 'Team A vs Team B',
        bets: '1',
        odd: 1.5,
      },
      {
        matchCode: 'M124',
        date: '2024-01-21',
        versus: 'Team C vs Team D',
        bets: 'Over 2.5',
        odd: 2.0,
      },
      {
        matchCode: 'M125',
        date: '2024-01-22',
        versus: 'Team E vs Team F',
        bets: 'KG VAR',
        odd: 1.8,
      },
      {
        matchCode: 'M125',
        date: '2024-01-22',
        versus: 'Team E vs Team F',
        bets: 'KG VAR',
        odd: 1.8,
      },
      {
        matchCode: 'M124',
        date: '2024-01-21',
        versus: 'Team C vs Team D',
        bets: 'Over 2.5',
        odd: 2.0,
      },
    ],
  },
];
