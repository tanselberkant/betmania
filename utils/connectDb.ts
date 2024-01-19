import mongoose from 'mongoose';

const connection: any = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }

    const mongoUri = process.env.MONGO;
    if (!mongoUri) {
      throw new Error('MONGO environment variable is not defined');
    }

    const db = await mongoose.connect(mongoUri);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to the database');
  }
};
