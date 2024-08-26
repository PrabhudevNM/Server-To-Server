import express from "express"
import configureDB from "./config/db.js"
import usersCltr from "./app/controller/users-cltr.js"
const app=express()
const PORT=3060
configureDB()

app.get('/api/users/:uid',usersCltr.show)

app.listen(PORT,()=>{
    console.log('server is running on port',PORT)
})