import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now, // Şu anki zamanı varsayılan olarak ayarlar
    },
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
  },
  { timestamps: true }
);

const tipSchema = new mongoose.Schema(
  {
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
        win: { type: String, default: 'win' },
      },
    ],
  },
  { timestamps: true }
);

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
    imgUrl: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    authorName: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    metaKeyword: {
      type: String,
    },
    metaTitle: {
      type: String,
    },
    content: {
      type: String,
    },
    language: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Coupon =
  mongoose.models?.Coupon || mongoose.model('Coupon', couponSchema);
export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);
export const Tip = mongoose.models.Tip || mongoose.model('Tip', tipSchema);
