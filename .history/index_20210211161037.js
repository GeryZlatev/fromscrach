const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config');
config = config[env];
const routes = require('./routes');
const app = express();
// const expressConfig = require('./config/express');
// expressConfig(app);
require('./config/express')(app);
require('./config/mongoose')(app);
app.use(routes);


app.listen(config.port, () => console.log(`Server is running on port ${config.port}...`));