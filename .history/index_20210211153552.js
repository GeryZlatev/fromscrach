const express = require('express');
const env = process.env.NODE_ENV || 'development';
const { port } = require('./config/config')[env];
const routes = require('./routes');
const app = express();
// const expressConfig = require('./config/express');
// expressConfig(app);
require('./config/express')(app);
require('./config/mongoose')(app);
app.use(routes);


app.listen(port, () => console.log(`Server is running on port ${config.port}...`));