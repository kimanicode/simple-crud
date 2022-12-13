const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT

app.get("/api/books" ,(req,res)=>{
    res.json({title:"Ego is the enemy"})
})

app.post("/api/books" ,(req,res)=>{
    res.json({title:"Ego is the enemy"})
})
app.put("/api/books/:id" ,(req,res)=>{
    res.json({description:`Added book ${req.params.id}`})
})
app.delete("/api/books/:id" ,(req,res)=>{
    res.json({description:`Deleted book ${req.params.id}`})
})


app.listen(port, ()=>{
    console.log(`server  is running on port ${port}`);
})