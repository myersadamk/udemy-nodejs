const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const genericRoutes = require('./routes/generic-routes');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(genericRoutes);

app.set('views-engine', 'ejs');
app.listen(3000);