import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  advisorName: String,
  description: String,
  matches: [
    {
      matchCode: String,
      date: String,
      versus: String,
      bets: String,
      odd: { type: Number, default: 1.0 },
    },
  ],
});

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const tipSchema = new mongoose.Schema({
  day: {
    type: String,
  },
  tips: [
    {
      time: String,
      countryFlagImageUrl: String,
      country: String,
      sportIconUrl: String,
      competition: String,
      teams: String,
      tip: String,
      odds: String,
      result: String,
      resultColor: String,
    },
  ],
});

export const Coupon =
  mongoose.models?.Coupon || mongoose.model('Coupon', couponSchema);
export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);
export const Tip = mongoose.models.Tip || mongoose.model('Tip', tipSchema);
