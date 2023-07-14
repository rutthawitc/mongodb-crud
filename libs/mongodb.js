import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connect Success');
  } catch (error) {
    throw new Error('Connect fail!');
  }
};
export default connectMongoDB;
