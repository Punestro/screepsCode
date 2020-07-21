var beSafe = require('dain.spawn1BeSafe')


var roleFillerHarvester = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
	   
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = Game.getObjectById(Memory.mineStuff);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources), {visualizePathStyle: {stroke: '#f8ffab'}};
        }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_CONTAINER ) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                     }
            });
	      if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#f8ffab'}});
                }
            }
        }
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

}
};

module.exports = roleFillerHarvester;
