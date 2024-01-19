import BetsTable from '@/components/bets/BetsTable';
import React from 'react';

const AdminBetsPage = () => {
  return (
    <div>
      {couponExample.map((coupon) => (
        <BetsTable coupon={coupon} key={coupon.id} />
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
