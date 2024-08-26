import mongoose from "mongoose";

const configureDB= async ()=> {
    try{
        const db=await mongoose.connect('mongodb://localhost:27017/server2server')
        console.log('connected to db',db.connections[0].name)
    }catch(err){
        console.log('error connecting to db',err)
    }
}

export default configureDB 