'use server';

import { revalidatePath } from 'next/cache';
import { connectToDb } from '@/utils/connectDb';
import { Coupon } from './models';

export const addBet = async (prevState: any, formData: BetsData) => {
  const { advisorName, matches, description } = formData;

  try {
    await connectToDb();
    const newCoupon = new Coupon({
      advisorName,
      matches,
      description,
    });

    await newCoupon.save();
    revalidatePath('/', 'layout');
    return 'Bet saved successfully';
  } catch (err: any) {
    console.error(err);
    return 'An error was encountered while registering a bet';
  }
};

export const deleteBet = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Coupon.findByIdAndDelete(id);
    revalidatePath('/', 'layout');
    revalidatePath('/admin');

    return 'Bet deleted successfully';
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
};
