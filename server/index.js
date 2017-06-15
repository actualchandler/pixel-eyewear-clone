// EXTERNAL MODULES //
const express = require('express')
   , bodyParser = require('body-parser')
   , session = require('express-session')
   , massive = require('massive')

// CONFIG //
var config = require('./config');

// EXPRESS //
var app = module.exports = express();

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json());


app.use(session({
   secret: config.SESSION_SECRET,
   saveUninitialized: false,
   resave: false
}));

// MASSIVE AND DB SETUP //
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
   connectionString: massiveUri
});

app.set('db', massiveServer);
var db = app.get('db');

var dbSetup = require('./services/dbSetup');
dbSetup.run();

// PASSPORT //
var passport = require('./services/passport')
app.use(passport.initialize())
app.use(passport.session())

// PASSPORT ENDPOINTS //
// app.post('/api/login', passport.authenticate('local', {
//    successRedirect: '/api/me'
// }))

// app.get('/api/logout', function (req, res, next) {
//    req.logout()
//    return res.status(200).send('logged out')
// })

// POLICIES //
// var isAuthed = function (req, res, next) {
//    if (!req.isAuthenticated()) return res.status(401).send()
//    return next()
// }



// CONTROLLERS //
var userCtrl = require('./controllers/userCtrl')
, productCtrl = require('./controllers/productCtrl')
, reviewCtrl = require('./controllers/reviewCtrl')


// USER ENDPOINTS //
// app.post('/api/register', userCtrl.register)
// app.get('/api/me', isAuthed, userCtrl.me)
// app.put('/api/user/current', isAuthed, userCtrl.updateCurrent)

// PRODUCT ENDPOINTS //
app.get('/api/products', productCtrl.read)
app.get('/api/product/:product_id', productCtrl.getById)

// REVIEW ENDPOINTS //
app.get('/api/reviews', reviewCtrl.read)
app.post('/api/review', reviewCtrl.create)




// CONNECTIONS //
var port = config.PORT;
app.listen(port, function () {
   console.log('Listening on ' + port);
});