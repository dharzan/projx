import mongoose from "mongoose";

interface Connection{
    isConnected: number | null;
}

const connection: Connection = {
    isConnected: null
};

async function dbConnect(){
    if (!process.env.MONGODB_URI){

        return;

    }

    if(connection.isConnected){
        return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI)
        connection.isConnected = db.connections[0].readyState;

    }
    catch(error)
    {
        console.error('Error connecting to the database', error);
        throw new Error('Error connecting to the database');

    }

}

export default dbConnect;

