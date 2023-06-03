const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./data/database');
const expenseRoutes = require('./routes/userRoute')
const cors = require('cors');


const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : false}));

app.set('views', 'views');

app.use(expenseRoutes);

sequelize.sync()
.then(() => {
    app.listen('3000', () => {
        console.log("listening on port 3000");
    })
})
.catch(err => {
    console.log(err);
})