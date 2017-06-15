var app = require('./../index')
, db = app.get('db')

module.exports = {
   read: function (req, res, next) {
      db.reviews.get_reviews(function (err, review) {
         if (err) {
            console.log("Get review ERROR:", err)
            return res.status(500).send(err)
         }

         return res.status(200).send(review)
      })
   },

   create: function(req, res, next){
      console.log("Congratulations Genius")
         let review = req.body
      db.reviews.add_review([review.name, review.content, review.rating], function(err, review){
         if (err) {
            console.log("Post review ERROR:", err)
            return res.status(500).send(err)
         }

         return res.status(200).json(review)
      })
   }

}