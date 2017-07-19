const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

const welcomeController = require('./controllers/welcome_controller')
app.use('/', welcomeController);

const toppingController = require('./controllers/topping_controller')
app.use('/topping', toppingController);

const orderController = require('./controllers/order_controller');
app.use('/order', orderController);

const port = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

