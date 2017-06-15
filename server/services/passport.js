var passport = require('passport')
var LocalStrategy = require('passport-local')
   .Strategy

// BCRYPT //
var bcrypt = require('bcryptjs')

// APP //
var app = require('./../index')
var db = app.get('db')

// VERIFY PASSWORD //
function verifyPassword(submitedPass, userPass) {
   return bcrypt.compareSync(submitedPass, userPass)
}

// RUN WHEN LOGGING IN //
passport.use(new LocalStrategy({
   usernameField: 'email'
   , passwordField: 'password'
}, function (email, password, done) {
   email = email.toLowerCase()

   db.user.read_email([email], function (err, user) {
      user = user[0]
      if (err) done(err)
      if (!user) return done(null, false)
      if (verifyPassword(password, user.password)) {
         delete user.password
         return done(null, user)
      }

      return done(null, false)
   })
}))

// PUT USER ON SESSION //
passport.serializeUser(function (user, done) {
   done(null, user)
})
passport.deserializeUser(function (user, done) {
   done(null, user)
})

module.exports = passport