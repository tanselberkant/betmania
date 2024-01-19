'use server';

import { revalidatePath } from 'next/cache';

import { connectToDb } from '@/utils/connectDb';
import { Coupon } from './models';

export const addBet = async (prevState: any, formData: any) => {
  const { advisorName, matches, description } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newCoupon = new Coupon({
      advisorName,
      matches,
    });

    await newCoupon.save();
    console.log('saved to db');
    revalidatePath('');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

// export const deletePost = async (formData: any) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     connectToDb();

//     await Post.findByIdAndDelete(id);
//     console.log('deleted from db');
//     revalidatePath('/blog');
//     revalidatePath('/admin');
//   } catch (err) {
//     console.log(err);
//     return { error: 'Something went wrong!' };
//   }
// };
