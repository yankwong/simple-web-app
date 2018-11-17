const express = require('express');
const router = express.Router();
const connection = require('../database/connection');
const databaseHelper = require('../database/databaseHelper');

connection.connect();

router.get('/', function (request, response) {
    const query = 'SELECT * FROM `products`';

    connection.query(query, function (error, products) {
        if (error) {
            console.log('------ get all products error', error);
            response.sendStatus(400);
            connection.end();
        }
        else {
            response.json(databaseHelper.productsArrayToJson(products));
            connection.end();
        }
    });
});

router.post('/add', function (request, response) {
    const productName = request.body.name;
    const query = "INSERT INTO `products` (`name`, `createdDate`) VALUES ('" + productName + "', NOW())";

    connection.query(query, (error, result) => {
        if (error) {
            console.log('------ get all products error', error);
            response.sendStatus(400);
            connection.end();
        }
        else {
            response.sendStatus(200);
        }
    });
});

module.exports = router;
