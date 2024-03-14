import mongoose from 'mongoose';

// Connect to the MongoDB database
const mongoDBURI = 'mongodb://127.0.0.1:27017/ITFrogTest_Databse';

mongoose.connect(mongoDBURI);
export default mongoose;
