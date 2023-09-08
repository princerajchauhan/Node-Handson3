
const route = require("express").Router()
const {login, register, logout} = require("../Controller/userController")
const validate = require("../Middleware/userMiddleware")

route.get("/", (req, res)=> {
    res.send("<h2>This is user Home Page.....</h2>")
})

route.get("/api/login/:age", validate, login)
route.get("/api/register", register)
route.get("/api/logout", validate, logout)


module.exports = route