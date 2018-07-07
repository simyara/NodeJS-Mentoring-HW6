'use strict';
const reviews = [{
    userId: 71,
    productId: 10,
    mark: 3.9,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 60,
    productId: 9,
    mark: 2.6,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 96,
    productId: 4,
    mark: 4.1,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 39,
    productId: 9,
    mark: 1.7,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 44,
    productId: 1,
    mark: 1.6,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 42,
    productId: 9,
    mark: 2.0,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 23,
    productId: 8,
    mark: 4.6,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 96,
    productId: 1,
    mark: 4.8,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 46,
    productId: 10,
    mark: 1.5,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 1,
    productId: 3,
    mark: 2.5,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 32,
    productId: 10,
    mark: 3.4,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 95,
    productId: 10,
    mark: 3.6,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 60,
    productId: 4,
    mark: 3.7,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 78,
    productId: 10,
    mark: 4.8,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 11,
    productId: 6,
    mark: 2.5,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 3,
    productId: 6,
    mark: 4.5,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 48,
    productId: 5,
    mark: 4.0,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 44,
    productId: 7,
    mark: 4.1,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 6,
    productId: 3,
    mark: 3.8,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 97,
    productId: 7,
    mark: 2.4,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 62,
    productId: 4,
    mark: 3.3,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 12,
    productId: 5,
    mark: 2.9,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 61,
    productId: 7,
    mark: 1.2,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 6,
    productId: 7,
    mark: 3.3,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 94,
    productId: 2,
    mark: 1.1,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 39,
    productId: 1,
    mark: 2.6,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 1,
    productId: 2,
    mark: 2.7,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 6,
    productId: 2,
    mark: 2.4,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 68,
    productId: 4,
    mark: 3.0,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 26,
    productId: 4,
    mark: 3.9,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 99,
    productId: 8,
    mark: 1.9,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 63,
    productId: 2,
    mark: 2.3,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 77,
    productId: 5,
    mark: 4.8,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 2,
    productId: 2,
    mark: 1.3,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 78,
    productId: 8,
    mark: 3.3,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 12,
    productId: 7,
    mark: 1.6,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 63,
    productId: 6,
    mark: 2.1,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 7,
    productId: 3,
    mark: 4.9,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 58,
    productId: 3,
    mark: 1.4,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 23,
    productId: 9,
    mark: 4.6,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 11,
    productId: 2,
    mark: 3.7,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 98,
    productId: 6,
    mark: 4.0,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 75,
    productId: 3,
    mark: 1.1,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 80,
    productId: 10,
    mark: 2.6,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 67,
    productId: 5,
    mark: 4.7,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 12,
    productId: 8,
    mark: 3.5,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 17,
    productId: 8,
    mark: 3.0,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 62,
    productId: 6,
    mark: 4.0,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 93,
    productId: 1,
    mark: 1.5,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    userId: 65,
    productId: 1,
    mark: 2.7,
    createdAt: new Date(),
    updatedAt: new Date()
}
];
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Reviews', reviews, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Reviews', null, {});
    }
};
