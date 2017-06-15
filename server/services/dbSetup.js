// APP AND CONFIG REQUIRE //
const app = require('./../index')
   , db = app.get('db')
   , config = require('./../config')

// ALLOW CONSOLE OUTPUT //
var allowConsoleOutput = config.INITIALIZE_LOG
var log = function (input) {
   if (allowConsoleOutput) {
      console.log(input)
   }
}

// INITIALIZE FUNCTION //
module.exports = {
   run: function () {
      log('Initializing database');

      db.initialize.tables_initialize(function (err, table) {
         if (err) return log('Some tables failed to create', err);
         else log('Tables successfully initialized');
      });
   }
};