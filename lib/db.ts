import { MongoClient } from "mongodb";
const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.wu4lq.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function connectToDatabase() {
  const client = await MongoClient.connect(connectionString);

  return client;
}
