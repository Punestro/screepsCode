var spawn1Manage = {
  
  run: function(spawn1Manage){
  //Tells how to run the tumen tier of spawn1's code
  var whatBuildings = require('tumen.spawn1Buildings');
  var whatCreeps = require('tumen.spawn1Creeps');
  
  //Specifies the resourses for both upgraders and general creeps
  Memeory.spawn1GeneralResource = Game.getObjectById('changeDis');
  Memory.spawn1upgraderResource = Game.getObjectById('changeDis');
  
  //Finds all of the towers in Spawn1's room
  Memory.spawn1Turret1 = Game.getObjectbyId('changeDis');
  Memory.spawn1Turret2 = Game.getObjectbyId('changeDis');
  Memory.spawn1Turret3 = Game.getObjectbyId('changeDis');
  Memory.spawn1Turret4 = Game.getObjectbyId('changeDis');
  
  //Get's spawn1's id so it can prosess the controller level.
  var spawn1 = Game.getObjectById('changeDis');
  Memory.spawn1RoomControllerLevel = spawn1.room.controller.level;
  
  //Grabs the container Id's
  Memory.containerSpawn1Upgrader = Game.getObjectById('changeDis')
  Memory.containerSpawn1General = Game.getObjectById('changeDis')

run: function(manage){
  //Runs the tumen code
  whatBuildings.run(manageBuildings)
  whatCreeps.run(manageCreeps)
  if(Game.spawns['Spawn1'].spawning) {
    var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
    Game.spawns['Spawn1'].room.visual.text( '🛠️', Game.spawns['Spawn1'].pos.x + 1, Game.spawns['Spawn1'].pos.y, {align: 'left', opacity: .8}); 
    
  for(var name in Memory.creeps) { if(!Game.creeps[name]) { delete Memory.creeps[name]; console.log('This tick we mourn the loss of the loyal mongol:', name); }
}
  
  
}
}
module.exports = spawn1Manage;
