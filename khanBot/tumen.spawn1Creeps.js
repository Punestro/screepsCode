var manageSpawn1Harvesters = require('mingghan.spawn1HarvesterManager') var manageSpawn1Builders = require('mingghan.spawn1BuilderManager')
var manageSpawn1Upgraders = require('mingghan.spawn1UpgraderManager') 

var spawn1Creeps = {
  run: function(manageCreeps)
  if(Memory.spawn1RoomControllerLevel == 1){
    Memory.upgraderStats = [WORK,CARRY,MOVE,MOVE];
    Memory.builderStats = [WORK,CARRY,MOVE,MOVE];
    Memory.harvesterStats = [WORK,CARRY,CARRY,MOVE,MOVE];
  } 
  if(Memory.spawn1RoomControllerLevel == 2){
    Memory.upgraderStats = [WORK,CARRY,WORK,CARRY,MOVE,MOVE];
    Memory.builderStats = [WORK,CARRY,WORK,CARRY,MOVE,MOVE];
    Memory.harvesterStats = [WORK,CARRY,WORK,CARRY,MOVE,MOVE];
  } 
  if(Memory.spawn1RoomControllerLevel == 3){
    Memory.upgraderStats = [WORK,CARRY,WORK,CARRY,MOVE,MOVE];
    Memory.builderStats = [WORK,CARRY,WORK,CARRY,MOVE,MOVE];
    Memory.minerStats = [WORK,WORK,WORK,WORK,WORK,MOVE,MOVE];
    Memory.fillerStats = [CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,];
    Memory.turretStats = [CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,];
    
  } 
  manageSpawn1Harvesters.run(manageSpawn1Harvesters);
  manageSpawn1Upgraders.run(manageSpawn1Upgraders);
  manageSpawn1Builders.run(manageSpawn1Builders);
}
}
module.exports = spawn1Creeps
