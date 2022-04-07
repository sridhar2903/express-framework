const express=require("express");

const server=express();

const middleware1=((req,res,next)=>{
console.log("this is middleware 1");
next();
})
server.use(middleware1)

const middleware2=(req,res,next)=>{
    console.log("this is middleware 2");
    next();
    }


server.get("/",(request,response)=>{
    response.send("request and response in express")
})

server.get("/users",middleware2,(request,response)=>{
    response.send("hello users,<h1>http methods:get,post,put/update,delete</h1>")
})

server.listen(4001,()=>{
    console.log("server running at 4001 port");
})