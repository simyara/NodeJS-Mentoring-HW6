const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./models/index');
const sequelize = db.sequelize;

const productController = require('./controllers/productController');
const reviewController = require('./controllers/reviewController');
const userController = require('./controllers/userController');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.post('/importProducts', productController.importProducts);
app.get('/api/users', userController.getAllUsers);
app.get('/api/products', productController.getAllProducts);
app.get('/api/products/:id', productController.getProductById);
app.get('/api/products/:id/reviews', reviewController.getAllProductReviews);
app.post('/api/products', bodyParser.json(), productController.addNewProduct);

app.listen(port, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }
    console.log(`Server is listening on ${port}`);
});

