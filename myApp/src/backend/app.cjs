const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 3000;
const uri = process.env.DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.json());

// http://localhost:3000/api/quiz-topics
app.get('/api/quiz-topics', async (req, res) => {
  try {
    await client.connect();
    // Give database name and collection name
    const database = client.db('Algorizz'); 
    const collection = database.collection('Quiz-Topics');

    // Write query equivalent to SELECT * FROM TABLE
    const query = {};
    let allData = await collection.find(query).toArray();
    // Notice that we query for everything and then filter in Javascript. Need to write a query to do filtering 
    // instead of doing it in javascript. That makes more sense right?
    allData = allData[0]['topics']
    res.json(allData);
  } 
  catch (error) {
    console.error('Error:', error);
  } 
  finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
