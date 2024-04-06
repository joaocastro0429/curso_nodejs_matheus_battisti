const express = require("express")
const port=3000

const path=require('path')

const app=express()

app.get("/",(request,response)=>{

    return response.sendFile(path.join(__dirname,"templates/index.html"))
})


app.listen(port,()=>{
    console.log("running server")
})