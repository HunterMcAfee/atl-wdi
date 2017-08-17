//your code here
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

const pirateController = require('./controllers/pirates.js');
app.use('/pirates', pirateController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});