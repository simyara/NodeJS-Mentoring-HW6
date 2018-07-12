const fs = require('fs');
const csv = require('fast-csv');
const filePath = './data/MOCK_DATA.csv';
const db = require('../models/index');
const Product = db.Product;

module.exports = {
    importProducts : (request, response) => {
        let importedCount = 0;
        let createdCount = 0;
        let csvStream = csv.fromPath(filePath, { headers: true})
            .on('data', function (record) {
                console.log(`${JSON.stringify(record)}`);
                let {name, brand, price, color, size} = record;
                importedCount++;

                Product.create({
                    name: name,
                    brand: brand,
                    price: price,
                    color: color,
                    size: size,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                    .then(function(){
                        createdCount++;
                        if (createdCount === importedCount){
                            console.log(`${createdCount} records created in DB`);
                            response.status(200).send({result: `${createdCount} records created in DB`});
                        }
                    }).catch(function (err) {
                        console.log(err);
                        response.status(400).send({error: err});

                    }
                    );
            }).on('end', function () {
                console.log(`Import done! ${importedCount} records imported from file`);
            }).on('error', function (err) {
                console.log(err);
                response.status(400).send({error: err});
            });
    },
    getAllProducts: (request, response) => {
        Product.findAll().then(products => {
            response.send(products);
        });
    },
    getProductById: (request, response) => {
        Product.findById(request.params.id).then(products => {
            response.send(products);
        });
    },
    addNewProduct: (request, response) => {
        console.log(JSON.stringify(request.body));
        let {name, brand, price, color, size} = request.body;
        Product.create({
            name: name,
            brand: brand,
            price: price,
            color: color,
            size: size,
            createdAt: new Date(),
            updatedAt: new Date()
        })
            .then(function(product){
                response.send(product);
            }).catch(function (err) {
                response.send(err);
            });
    }
};