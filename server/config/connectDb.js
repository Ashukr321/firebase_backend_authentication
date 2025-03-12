// import mongoose 
import mongoose from 'mongoose';
import envConfig from './envConfig.js';
const connectDb = async () => {
  try {
    await mongoose.connect(envConfig.mongo_uri, {
      dbName: envConfig.db_name,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("databae connected successfully!");
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDb;