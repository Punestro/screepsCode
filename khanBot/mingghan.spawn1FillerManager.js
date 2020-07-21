var manageFillers{
  run: function(manageFillers){
  Memory.spawn1Fillers = _.filter(Game.creeps, (creep) => creep.memory.job == 'spawn1Fillers'); 
    
  if(spawn1Filler.length < 2 && Memory.spawn1RoomControllerLevel == 3) {
    var newName = 'spawn1Filler' + Game.time;
    console.log('Spawning new spawn1Filler: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.fillerStats, newName, {memory: {job: 'spawn1Filler'}}); }
 if(spawn1Filler.length < 2 && Memory.spawn1RoomControllerLevel == 4) {
    var newName = 'spawn1Filler' + Game.time;
    console.log('Spawning new spawn1Filler: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.fillerStats, newName, {memory: {job: 'spawn1Filler'}}); }
 if(spawn1Filler.length < 2 && Memory.spawn1RoomControllerLevel == 5) {
    var newName = 'spawn1Filler' + Game.time;
    console.log('Spawning new spawn1Filler: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.fillerStats, newName, {memory: {job: 'spawn1Filler'}}); }
 if(spawn1Filler.length < 2 && Memory.spawn1RoomControllerLevel == 6) {
    var newName = 'spawn1Filler' + Game.time;
    console.log('Spawning new spawn1Filler: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.fillerStats, newName, {memory: {job: 'spawn1Filler'}}); }
 if(spawn1Filler.length < 2 && Memory.spawn1RoomControllerLevel == 7) {
    var newName = 'spawn1Filler' + Game.time;
    console.log('Spawning new spawn1Filler: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.fillerStats, newName, {memory: {job: 'spawn1Filler'}}); }
 if(spawn1Filler.length < 2 && Memory.spawn1RoomControllerLevel == 8) {
    var newName = 'spawn1Filler' + Game.time;
    console.log('Spawning new spawn1Filler: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.fillerStats, newName, {memory: {job: 'spawn1Filler'}}); }
}
}
module.exports = spawn1FillerManager;
