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

type TipData = {
  _id?: string;
  time: string;
  countryFlagImageUrl: string;
  country: string;
  sportIconUrl: string;
  competition: string;
  teams: string;
  tip: string;
  odds: string;
  result: string;
  resultColor: string;
  win: string;
};

type TipsData = {
  _id?: string;
  day: string;
  tips: TipData[];
};

type PostData = {
  _id?: string;
  title: string;
  slug: string;
  desc: string;
  imgUrl: string;
  authorName: string;
  metaDescription: string;
  metaKeyword: string;
  metaTitle: string;
  content: string;
};

type PostsData = {
  _id?: string;
  posts: PostData[];
};
