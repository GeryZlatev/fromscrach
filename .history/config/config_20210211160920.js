const config = {
    development: {
        port: process.env.PORT || 3000,
        SALT_ROUNDS: 10,
        SECRET: 'navuhodonosor',
        COOKIE_NAME: 'USER_SESSION'
    },
    production: {
        port: process.env.PORT || 80,
        SALT_ROUNDS: 10,
        SECRET: 'navuhodonosor',
        COOKIE_NAME: 'USER_SESSION'
    }
}

// module.exports = config;