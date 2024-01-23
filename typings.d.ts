type BetMatch = {
  matchCode: string;
  date: string;
  versus: string;
  bets: string;
  odd: number;
};

type BetsData = {
  id: string;
  advisorName: string;
  description: string;
  matches: BetMatch[];
};
