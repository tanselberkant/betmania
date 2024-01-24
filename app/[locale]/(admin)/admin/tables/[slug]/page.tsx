import Table from '@/components/table/Table';
import React from 'react';

const getTableData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tables?id=${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const AdminSingleTablePage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  //   const coupons = await getTableData(params.slug);
  const table = await getTableData(params.slug);

  return (
    <div>
      <h2>Hi bro</h2>
      <Table results={table[0]} />
    </div>
  );
};

export default AdminSingleTablePage;

// -

// type TipData = {
//   _id?: string;
//   time: string;
//   countryFlagImageUrl: string;
//   country: string;
//   sportIconUrl: string;
//   competition: string;
//   teams: string;
//   tip: string;
//   odds: string;
//   result: string;
//   resultColor: string;
// };

// type TipsData = {
//   _id?: string;
//   day: string;
//   tips: TipData[];
// };

// {
//   _id: '65440072f193a4232949e9ba',
//   day: '2.11.2023',
//   tips: [
//     {
//       time: '19:45',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Anglia.png',
//       country: 'England',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Championship',
//       teams: 'Rotherham – Sunderland',
//       tip: '2',
//       odds: '1.57',
//       result: '1-1',
//       resultColor: '#ff0000',
//       _id: '65906848bd071efcb44241bd'
//     },
//     {
//       time: '17:30',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Italia.png',
//       country: 'Italy',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Serie A',
//       teams: 'Napoli – Monza',
//       tip: '1',
//       odds: '1.65',
//       result: '0-0',
//       resultColor: '#ff0000',
//       _id: '65906848bd071efcb44241be'
//     },
//     {
//       time: '08:45',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Australia.png',
//       country: 'Australia',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'A League',
//       teams: 'Sydney FC – W. Phoenix',
//       tip: 'over 1.5',
//       odds: '1.20',
//       result: '3-1',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241bf'
//     },
//     {
//       time: '14:30',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/India.png',
//       country: 'India',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'ISL',
//       teams: 'North East Utd – Goa',
//       tip: '2',
//       odds: '1.62',
//       result: '1-1',
//       resultColor: '#ff0000',
//       _id: '65906848bd071efcb44241c0'
//     },
//     {
//       time: '13:00',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Israel.png',
//       country: 'Israel',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Leumit League',
//       teams: 'M. Herzliya – Ironi T.',
//       tip: 'x2',
//       odds: '1.22',
//       result: '1-1',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241c1'
//     },
//     { _id: '65906848bd071efcb44241c2' },
//     {
//       time: '15:00',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Maroc.png',
//       country: 'Morocco',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Botola Pro',
//       teams: 'R. Zemamra – M. Oujda',
//       tip: '1x',
//       odds: '1.25',
//       result: '0-1',
//       resultColor: '#ff0000',
//       _id: '65906848bd071efcb44241c3'
//     },
//     {
//       time: '18:45',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Portugalia.png',
//       country: 'Portugal',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Liga Portugal',
//       teams: 'Benfica – Famalicao',
//       tip: '1',
//       odds: '1.29',
//       result: '3-0',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241c4'
//     },
//     {
//       time: '18:00',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Arabia-Saudita.png',
//       country: 'Saudi A.',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Saudi P.L.',
//       teams: 'Al Ahli – Al Khaleej',
//       tip: '1',
//       odds: '1.36',
//       result: '1-0',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241c5'
//     },
//     {
//       time: '19:45',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Scotia.png',
//       country: 'Scotland',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Championship',
//       teams: 'Dundee Utd – P. Thistle',
//       tip: '1',
//       odds: '1.53',
//       result: '3-0',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241c6'
//     },
//     {
//       time: '18:00',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Africa-de-sud.png',
//       country: 'S. Africa',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Premier League',
//       teams: 'Orlando – Stellenbosch',
//       tip: '1x',
//       odds: '1.20',
//       result: '2-3',
//       resultColor: '#ff0000',
//       _id: '65906848bd071efcb44241c7'
//     },
//     {
//       time: '17:45',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Turcia.png',
//       country: 'Turkey',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Super Cup',
//       teams: 'Galatasaray – Fenerbahce',
//       tip: 'over 1.5',
//       odds: '1.25',
//       result: 'Postp.',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241c8'
//     },
//     {
//       time: '15:45',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Emirate.png',
//       country: 'Emirates',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Super Cup',
//       teams: 'Al Ahli Dubai – Al Sharjah',
//       tip: 'over 1.5',
//       odds: '1.20',
//       result: '6-2',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241c9'
//     },
//     {
//       time: '19:30',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Tara-Galilor.png',
//       country: 'Wales',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Cymru South',
//       teams: 'C. Clydach – C. Celtic',
//       tip: '1x',
//       odds: '1.30',
//       result: '2-3',
//       resultColor: '#ff0000',
//       _id: '65906848bd071efcb44241ca'
//     },
//     {
//       time: '15:15',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Lume.png',
//       country: 'World',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/fotbal.gif',
//       competition: 'Friendly I.',
//       teams: 'China – Oman',
//       tip: 'under 3.5',
//       odds: '1.20',
//       result: '0-2',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241cb'
//     },
//     {
//       time: '12:00',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Australia.png',
//       country: 'Australia',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/tenis.gif',
//       competition: 'WTA – U. Cup',
//       teams: 'Boulter K. – Tomljanovic A.',
//       tip: '2',
//       odds: '1.67',
//       result: '2-0',
//       resultColor: '#ff0000',
//       _id: '65906848bd071efcb44241cc'
//     },
//     {
//       time: '20:00',
//       countryFlagImageUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/Europa.png',
//       country: 'Europe',
//       sportIconUrl: 'https://tipsbet.co.uk/wp-content/uploads/2017/01/basket.gif',
//       competition: 'Euroleague',
//       teams: 'Monaco – Barcelona',
//       tip: '1',
//       odds: '1.59',
//       result: '91-71',
//       resultColor: '#008000',
//       _id: '65906848bd071efcb44241cd'
//     }
//   ],
//   __v: 0

// import Table from '@/components/table/Table';
// import React from 'react';

// const getTableData = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/tables?id=${id}`, {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   return res.json();
// };

// const AdminSingleTablePage = async ({
//   params,
// }: {
//   params: { slug: string };
// }) => {
//   //   const coupons = await getTableData(params.slug);
//   const table = await getTableData(params.slug);

//   return (
//     <div>
//       <h2>Hi bro</h2>
//       <Table results={table[0]} />
//     </div>
//   );
// };

// export default AdminSingleTablePage;

// Bu sayfam da gelen tabloyu editleyip update etmek istiyorum bana yardımcı olabilir misin
