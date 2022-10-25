const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const models = require('./models');
// synchronize DB
models.sequelize.sync().then(function() {
    console.log("Database synchronization completed.");
}).catch(function(err) {
    console.log(err, "Database synchronization failed !");
});

require('./routes')(app);
// default route
app.get('*', (req, res) => {
    res.status(200).send({
        message: "Welcome to Address Book Sample"
    });
});

const port = 8081;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;