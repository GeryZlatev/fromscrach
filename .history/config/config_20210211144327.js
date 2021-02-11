module.exports = {
    development: {
        port: process.env.PORT || 3000,
        SALT_ROUNDS: 10,
        SECRET: 'navuhodonosor'
    },
    production: {
        port: process.env.PORT || 80,
        SECRET: 'navuhodonosor'
    }
}