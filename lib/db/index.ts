import mongoose from "mongoose";

type MongooseCache = {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
};

const cached = (global as { mongoose?: MongooseCache }).mongoose || { conn: null, promise: null };

const connectToDb = async () => {

    const MONGODB_URI = process.env.MONGODB_URI as string;

    if (cached.conn) {
        return cached.conn;
    }

    if (!MONGODB_URI) {
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env.local"
        );
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
            connectTimeoutMS: 20000
        }).then((mongoose) => mongoose.connection);
    }
    cached.conn = await cached.promise;
    return cached.conn;
};

export default connectToDb;
