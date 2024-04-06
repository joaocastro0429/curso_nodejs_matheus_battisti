const express = require("express")
const port=3000

const app=express()

app.get("/",(request,response)=>{
    return response.json("aprendendo nodejs")
})


app.listen(port,()=>{
    console.log("running server")
})