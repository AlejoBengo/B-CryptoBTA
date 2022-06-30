require('dotenv').config();
const mongoose = require('mongoose');
const { DB_PASSWORD, DB_NAME, USER_NAME } = process.env;

export const databaseConnection = async () => {
   try {
      const db = await mongoose.connect(
         `mongodb+srv://${USER_NAME}:${DB_PASSWORD}@btaprotocol.3ntfs.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
      );
      console.log('Database is connected to', DB_NAME);
   } catch (err) {
      console.log(err);
   }
};

databaseConnection();

module.exports = mongoose;
