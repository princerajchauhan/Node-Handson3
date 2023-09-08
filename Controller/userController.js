
const login = (req, res) =>{
    res.send("<h2>Welcome to the Login page.........</h2>")
}

const register = (req, res) =>{
    res.send("<h2>Welcome to the Register page.........</h2>")
}

const logout = (req, res) =>{
    res.send("<h2>Welcome to the Logout page.........</h2>")
}

module.exports = {login, register, logout}