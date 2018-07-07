const db = require('../models/index');
const Review = db.Review;

module.exports = {
    getAllProductReviews: (request, response) => {
        Review.findAll({
            attributes: ['userId', 'mark'],
            where: {
                productId: request.params.id
            }
        }).then(reviews => {
            response.send(reviews);
        })
    }
}