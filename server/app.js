const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const moongoose = require('mongoose');
const cors = require('cors');


moongoose.connect('mongodb://localhost:27017/BloodBank').then(() => {
    console.log('connected to db');
}
).catch((err) => {
    console.log(err);
});

const patientRoute = require('./route/admin.route');
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/api', patientRoute);

//set up port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
}
);

//404 error
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

//500 error
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}
);

module.exports = app;