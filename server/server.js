const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const uri = "mongodb+srv://admin:SyMqttJ3sN8A35hj@cluster0.tabebj2.mongodb.net/Kolkata-Storyteller?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

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

// Fallback to serve the index.html for any other requests (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Ensure the app is exportable for Vercel
