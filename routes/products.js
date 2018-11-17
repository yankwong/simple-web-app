const express = require('express');
const router = express.Router();
const connection = require('../database/connection');
const databaseHelper = require('../database/databaseHelper');

connection.connect();

router.get('/', function (request, response) {
    const query = 'SELECT * FROM `products`';

    connection.query(query, function (error, products) {
        if (error) {
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
        const responseStatus = error ? 400 : 200;
        
        response.sendStatus(responseStatus);
        connection.end();
    });
});

module.exports = router;
