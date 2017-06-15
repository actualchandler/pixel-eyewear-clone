var app = require('./../index')
   , db = app.get('db')

module.exports = {
   read: function (req, res, next) {
      db.products.get_products(function (err, products) {
         if (err) {
            console.log("Get all products ERROR:", err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(products)
         }
      })
   },

   getById: function (req, res, next){
      db.products.get_by_id([product_id], function (err, product){
         if(err) {
            console.log("Get product by id ERROR:", err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(product)
         }
      })
   }


}