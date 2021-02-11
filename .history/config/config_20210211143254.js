module.exports = {
    development: {
        port: process.env.PORT || 3000,
        SALT_ROUNDS: 10,
        SECRET: ''
    },
    production: {
        port: process.env.PORT || 80
    }
}