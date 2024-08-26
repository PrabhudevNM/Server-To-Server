import {Schema, model} from 'mongoose'

const userSchema= new Schema({
    uid:Number,
    name:String,
    email:String,
    city:String,
},{timestamps:true})

const User=model('User',userSchema)

export default User