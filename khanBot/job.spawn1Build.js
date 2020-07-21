
var mineStuff = require('job.harvestGeneralResource')
var jobSpawn1Builder = {
/** @param {Creep} creep **/
run: function(creep) {
    var beSafe = {
  run function(staySafe){
  var hostileCreeps = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  if(hostileCreeps) {
    Memory.hostiles = true;
    var turret = Game.getObjectById('Memory.spawn1Turret1');
    creep.moveTo(turret)
    if(creep.transfer(turret, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(turret);
      return 'Turret attack!';}}
    }
}

    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
        creep.memory.building = false;
        creep.say('🔄 harvest');
    }
    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
        creep.memory.building = true;
        creep.say('🚧 build');
    }
    if(creep.memory.building) {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffabab'}});
            }
        }
    }
    elif(Memory.spawn1RoomControllerLevel == 1 || Memory.spawn1RoomControllerLevel == 2) {
        mineStuff.run(harvest)
    }
};

module.exports = jobSpawn1Builder;
