type BetMatch = {
  matchCode: string;
  date: string;
  versus: string;
  bets: string;
  odd: number;
};

type BetsData = {
  _id?: string;
  advisorName: string;
  description: string;
  matches: BetMatch[];
};

type SessionData = {
  user: {
    name: string;
    email: string | any;
    image: string | any;
  };
};
