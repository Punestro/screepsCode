var jobSpawn1GeneralResourceConatainerHarvester = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
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
	    if(creep.store.getFreeCapacity() > 0 ) {
            var sources = Game.getObjectById('Memory.spawn1GeneralResource');
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources), {visualizePathStyle: {stroke: '#f8ffab'}};
        }
        }
        else {
            var targets = Game.getObjectById('Memory.containerSpawn1General')            
            if(targets) {
                if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets)
                }
            }
        }
	}
};

module.exports = jobSpawn1GeneralResourceConatainerHarvester;
