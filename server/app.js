require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { createJiraTicket } = require('./jira');
const Comment = require('./comment');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/comments', async (req, res) => {
  const { text, comment } = req.body;
  const newComment = new Comment({ text, comment });
  await newComment.save();
  await createJiraTicket(comment);
  res.status(200).send({ message: 'Comment saved and ticket created' });
});

app.listen(3000, () => console.log('Server running on port 3000'));