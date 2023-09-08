const validate = (req, res, next) => {
    if (req.params.age >= 18) {
        next()
    }
    else {
        res.send("<h2>User is not allowed for further step......</h2>")
    }
}

module.exports = validate