var spawn1Upgrader = require('job.spawn1Upgrader');

var spawn1UpgradersDoIt = {
  run: function(makeThemWork){
    
    if(creep.memory.job == 'spawn1Upgrader') { 
    spawn1Upgrader.run(creep); }
  }
}
module.exports = spawn1UpgradersDoIt;

