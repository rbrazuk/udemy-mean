var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

module.exports.reviewsGetAll = function(req, res) {
    var hotelId = req.params.hotelId;

    console.log("GET hotelId", hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function (err, doc) {
            res
                .status(200)
                .json(doc.reviews);
    });
};

module.exports.reviewsGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;
    console.log("Get reviewId " + reviewId + " for hotelId " + hotelId);
    
    Hotel   
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, hotel) {
            console.log("Returned hotel", hotel);
            var review = hotel.reviews.id(reviewId);
            res.status(200).json(review);
    });
    
//    Hotel
//        .findById(hotelId)
//        .select('reviews')
//        .exec(function (err, hotel) {
//            var review = hotel.reviews.id(reviewId);
//            res
//                .status(200)
//                .json(review);
//    });
};