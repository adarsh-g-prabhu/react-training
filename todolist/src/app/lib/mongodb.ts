import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = "todos";

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const cached = (global as any).mNEXT_PUBLIC_GOOGLE_GEN_AI_API_KEYongoose || { conn: null, promise: null };

export async function connectDb() {
    try
  {if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: DATABASE_NAME, // 👈 Manually specify the database name
            bufferCommands: false,
        }).then(mongoose => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;}
    catch{
      console.log('error connect')
    }
}
