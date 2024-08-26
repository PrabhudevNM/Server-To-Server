import axios from "axios"
import User from "../model/user-model.js"

const usersCltr={}

usersCltr.show= async (req,res)=>{
    const uid=req.params.uid
    try{
        const user= await User.findOne({uid})
        if(!user){
            const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${uid}`)
            const userObj=new User ({
                uid:response.data.id,
                name:response.data.name,
                email:response.data.email,
                city:response.data.address.city
            })
            await userObj.save()
            res.status(201).json(userObj)
        } else{
            return res.json(user)
        }
    }catch(err){
        return res.status(500).json(err)
    }
}

export default usersCltr