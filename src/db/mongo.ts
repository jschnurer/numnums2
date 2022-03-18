//import { Collection, Db, MongoClient, Document } from "mongodb";
import * as mongodb from 'mongodb'
import settings from "../local.settings.json";

export async function getMongo(collectionName?: MongoCollections): Promise<[mongodb.MongoClient, mongodb.Collection<mongodb.Document> | undefined, mongodb.Db]> {
  const client = new mongodb.MongoClient(settings.mongo.connectionString);
  await client.connect();
  const db = client.db(settings.mongo.db);

  if (!db.collection(collectionName)) {
    await db.createCollection(collectionName);
  }

  return [client, collectionName ? db.collection(collectionName) : undefined, db];
}

export async function find(collection: mongodb.Collection<mongodb.Document>, findFilters: any): Promise<mongodb.WithId<mongodb.Document>> {
  return (await (collection.find as any)(findFilters).toArray()) as any;
}

export enum MongoCollections {
  Reviews = "reviews",
  Restaurants = "restaurants",
  Food = "food",
  Users = "users",
}