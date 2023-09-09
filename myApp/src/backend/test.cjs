
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const database = client.db('Algorizz'); // Replace 'your-database-name' with your actual database name
    const collection = database.collection('Quiz-Topics');
    // Fetch all documents from the collection
    const query = {};
    let allData = await collection.find(query).toArray();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const datastructuresNames = [];
    allData = allData[0]['topics'];
    // console.log(Object.keys(allData));
    console.log(allData)
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
