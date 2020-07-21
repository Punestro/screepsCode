//Define all of your spawns
var spawn1Manage = require('noyan.spawn1')

module.exports.loop = function () {
  spawn1Manage.run(spawn1Manage);
}
