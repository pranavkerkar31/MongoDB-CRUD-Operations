import mongoose from 'mongoose';

export const ConnectDB = async()=>{
  try{
  await mongoose.connect(process.env.MONGO_URI as string);
  console.log('Database connected');
  } 
  catch(error){
    console.error('Error while connecting',error);
  }
}
export default ConnectDB;