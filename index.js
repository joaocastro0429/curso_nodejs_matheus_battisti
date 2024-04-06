const express = require("express")
const port=3000

const path=require('path')

const app=express()
// middleware
function checkAuth(request,response,next){

    request.authStatus=true

    if(request.authStatus){
        console.log("esta logando, faça o login para continuar")
    }else{
        console.log("não esta logado , faça o login para continuar")
    }
    next()

}
app.use(checkAuth)

app.get("/",(request,response)=>{

    return response.sendFile(path.join(__dirname,"templates/index.html"))
})


app.listen(port,()=>{
    console.log("running server")
})