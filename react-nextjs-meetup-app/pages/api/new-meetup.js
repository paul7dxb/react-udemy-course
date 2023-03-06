// /api/new-meetup
//  POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://<username>:<password>@cluster0.fdlahzk.mongodb.net/<dbName>?retryWrites=true&w=majority"
    );

    //  Get db
    const db = client.db();
    const meetupsCollection = db.collection('meetups')

    // Insert full object as no requirement to use destructuring
    const result = await meetupsCollection.insertOne(data)
    console.log(result);

    // Close connection and send response to application
      client.close();
      res.status(201).json({message: 'Meetup inserted'})
  }
}

export default handler;
