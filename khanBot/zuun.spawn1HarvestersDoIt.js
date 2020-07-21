var spawn1HarvesterFillers = require('job.spawn1FillerHarvester');
var spawn1UpgraderResourceConatainerHarvester = require('job.spawn1UpgraderResourceConatainerHarvester')
var spawn1GeneralResourceConatainerHarvester = require('job.spawn1GeneralResourceConatainerHarvester')

var spawn1HarvestersDoIt = {
  run: function(makeThemWork){
    
    if(creep.memory.job == 'spawn1GeneralResourceConatainerHarvester') { 
    spawn1GeneralResourceConatainerHarvester.run(creep); 
    }
    
    if(creep.memory.job == 'spawn1FillerHarvester') { 
    spawn1HarvesterFillers.run(creep); 
    }
    
    if(creep.memory.job == 'spawn1UpgraderResourceConatainerHarvester') { 
    spawn1UpgraderResourceConatainerHarvester.run(creep); 
    }
  }
}
module.exports = spawn1HarvestersDoIt;
