import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectedDB = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(
      `MONGO_DB connected ${connectedDB.connection.host}`.cyan.underline
    );
  } catch (e) {
    console.log('e', `${e.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
