const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/DynWebSiteThapa"

mongoose.connect(DATABASE_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
})
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});