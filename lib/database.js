import mongoose from 'mongoose';
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_CONN;

const connect = async () => {
  mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) console.log('Error connecting to MongoDB');
      else console.log('Connected to MongoDB');
    },
  );
};

export default connect;
