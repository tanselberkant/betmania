'use server';

import { revalidatePath } from 'next/cache';
import { connectToDb } from '@/utils/connectDb';
import { Coupon, Tip, Post, Subscriber } from './models';
import { sendMail } from './sendMail';

// >>>>>> COUPON ACTIONS
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

// >>>>>> TABLE ACTIONS
export const addTable = async (prevState: any, formData: TipsData) => {
  const { day, tips } = formData;

  if (!day || day === '') return 'No date provided';

  try {
    await connectToDb();
    const newCoupon = new Tip({
      day,
      tips,
    });

    await newCoupon.save();
    revalidatePath('/', 'layout');

    // E-posta gönderme işlemi
    try {
      await sendMail(); // sendMail fonksiyonunu çağır
      console.log('Email sent successfully after adding a table.');
    } catch (emailError) {
      console.error(
        'Failed to send email, but the table was added successfully:',
        emailError
      );
      // Burada e-posta gönderme hatası yakalandı, ancak işleme devam ediliyor.
    }
    return 'Table saved successfully';
  } catch (err: any) {
    console.error(err);
    return 'Something went wrong';
  }
};

export const deleteTable = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Tip.findByIdAndDelete(id);
    revalidatePath('/', 'layout');
    revalidatePath('/admin');

    return 'Table deleted successfully';
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
};

// >>>>>> POST ACTIONS
export const addPost = async (prevState: any, formData: any) => {
  const {
    metaDescription,
    metaKeyword,
    metaTitle,
    title,
    slug,
    desc,
    imgUrl,
    authorName,
    language,
    content,
  } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      metaDescription,
      metaKeyword,
      metaTitle,
      title,
      slug,
      desc,
      imgUrl,
      authorName,
      language,
      content,
    });

    await newPost.save();
    console.log('saved to db');
    revalidatePath('/', 'layout');
    revalidatePath('/admin');
    return 'Post added successfully';
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  // console.log('here??', id);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/', 'layout');
    revalidatePath('/admin');

    return 'Post deleted successfully';
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
};

// >>>>>> Subscriber ACTIONS
export const addSubscriber = async (prevState: any, email: any) => {
  try {
    await connectToDb(); // Veritabanına bağlan

    //Check if email exist
    const existingSubscriber = await Subscriber.findOne({ email: email });
    if (existingSubscriber) return 'Mail allready exist';
    else {
      // Create new subscriber
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
      return 'Subscriber saved successfully';
    }
  } catch (err) {
    console.error(err); // Hata yakala ve konsola yaz
    return 'An error was encountered while registering a subscriber'; // Hata mesajı dön
  }
};
