module.exports = function() {
    return (req, res, next) => {
        console.log(req.cookies);
        next();
    };
}