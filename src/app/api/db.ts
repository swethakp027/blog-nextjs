import { MongoClient, ServerApiVersion, Db } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectTODb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = `mongodb+srv://Vercel-Admin-blog-nextjs-mongodb:C6wlGr7WiekZhSzM@blog-nextjs-mongodb.kua6gyi.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  cachedClient = client;
  cachedDb = client.db("blog-posts");

  return { client, db: client.db("blog-posts") };
}