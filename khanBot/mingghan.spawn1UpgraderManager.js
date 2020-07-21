var spawn1UpgraderManager = {
  run: function(manageSpawn1Upgraders){
  
    Memory.spawn1BasicUpgraders = _.filter(Game.creeps, (creep) => creep.memory.job == 'spawn1BasicUpgrader'); 
    Memory.spawn1ContainerUpgrader = _.filter(Game.creeps, (creep) => creep.memory.job == 'spawn1ContainerUpgrader'); 

module.exports = spawn1UpgraderManager;
