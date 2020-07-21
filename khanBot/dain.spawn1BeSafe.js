var beSafe = {
  run function(staySafe){
  var hostileCreeps = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  if(hostileCreeps) {
    var turret = Game.getObjectById('Memory.spawn1Turret1');
    creep.moveTo(turret)
    if(creep.transfer(turret, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(turret);
      return 'Turret attack!';}}
    }
}
