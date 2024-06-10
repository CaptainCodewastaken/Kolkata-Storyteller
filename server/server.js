const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

const uri = "mongodb+srv://admin:RWu57e7HavZyG19y@cluster0.tabebj2.mongodb.net/Kolkata-Storyteller?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());

app.get('/api/blogs', async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const collection = client.db().collection('Blogs');
    const blogs = await collection.find({}).toArray();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching data: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
