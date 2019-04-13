const express = require('express');
const bodyParser = require('body-parser');

const paths = require('./app-paths');
const adminRoutes = require('./routes/admin');
const genericRoutes = require('./routes/generic-routes');

const app = express();

app.set('view-engine', 'ejs');
app.set('views', paths.fromView());
console.log(paths.fromView());

app.use('/public', express.static(paths.fromBase('public')));

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(genericRoutes);

app.listen(3000);