const express = require('express');
const bodyParser = require('body-parser');

const genericRoutes = require('./routes/generic');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
require('./routes/users').registerRoutes(app);
require('./routes/generic').registerRoutes(app);

app.set('views-engine', 'ejs');
app.listen(3000);