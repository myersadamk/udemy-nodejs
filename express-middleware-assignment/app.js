const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./src/js/routes/admin');
const genericRoutes = require('./src/js/routes/generic-routes');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(genericRoutes);

// app.use('/users', (req, res) => {
//   res.json({
//     adam: {
//       age: 31,
//       hair: 'bald'
//     },
//     jon: {
//       age: 34,
//       hair: 'stunning'
//     }
//   });
// });
//
// app.get('/', (req, res) => {
//   console.log("...");
//   res.write("<h1>U want /users to get thangs</h1>")
// });

app.listen(3000);