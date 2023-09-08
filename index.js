const express = require("express")
const cors = require("cors")
const route = require("./Routing/userRouting")

const port = 4001

const server = express()
server.use(cors())

const appMiddleware = (req, res, next) =>{
    console.log("Application middleware is running......")
    next()
}

server.use(appMiddleware)
server.use("/user", route)
server.get("/", (req, res) =>{
    res.send("<h2>Welcome to the Handson-3 Page of NodeJs</h2><p>In this Handson i made two middlewares :</p><ol><li>Application Level Middleware</li><li>Routing (Specifc) Level Middleware</li></ol>")
})

server.listen(port, ()=>{
    try {
        console.log(`Server is listening on port ${port}`)
    } catch (error) {
        console.log(`On starting the server on port ${port} we get ${error}`)        
    }
})