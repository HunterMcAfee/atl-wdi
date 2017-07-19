const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Pizza Express!')
});

app.get ('/topping/:type', (req, res, next) => {
    res.send(`${req.params.type} pizza! Good choice.`)
});

app.get ('/order/:amount/:size', (req, res, next) => {
    res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`)
});

const port = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

