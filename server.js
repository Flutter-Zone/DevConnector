const express = require('express');
const mongoose = require('mongoose');

// local modules
const keys = require('./configs/keys');
const users = require('./routes/api/users'); 
const profile = require('./routes/api/profile'); 
const posts = require('./routes/api/posts'); 

const app = express();

// connect to MongoDB
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected.'))
.catch(err => console.log(`An error occurred: ${err}`));

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});