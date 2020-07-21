var spawn1HarvesterManager = {
  run: function(manageSpawn1Harvesters){
  
  Memory.spawn1FillerHarvesters = _.filter(Game.creeps, (creep) => creep.memory.job == 'spawn1FillerHarvester'); 
  Memory.spawn1UpgraderContainerHarvesters = _.filter(Game.creeps, (creep) => creep.memory.job == 'spawn1UpgraderContainerHarvesters'); 
  Memory.spawn1GeneralContainerHarvesters = _.filter(Game.creeps, (creep) => creep.memory.job == 'spawn1UpgraderResourceConatainerHarvester'); 
  
  //Auto-Spawn code for the fillerHarvesters
  if(spawn1FillerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 1) {
    var newName = 'spawn1FillerHarvesters' + Game.time;
    console.log('Spawning new spawn1FillerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.harvesterStats, newName, {memory: {job: 'spawn1FillerHarvester'}}); } 
    
  if(spawn1FillerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 2) {
    var newName = 'spawn1FillerHarvesters' + Game.time;
    console.log('Spawning new spawn1FillerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.harvesterStats, newName, {memory: {job: 'spawn1FillerHarvester'}}); }
  
  //Auto-Spawn code for the generalContainerHarvesters
  //Make sure to change the amount of minimum guys depending on the open mining slots
  if(spawn1GeneralContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 3) {
    var newName = 'spawn1GeneralContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1GeneralContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1GeneralResourceConatainerHarvester'}}); }

  if(spawn1GeneralContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 4) {
    var newName = 'spawn1GeneralContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1GeneralContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1GeneralResourceConatainerHarvester'}}); }

  if(spawn1GeneralContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 5) {
    var newName = 'spawn1GeneralContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1GeneralContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1GeneralResourceConatainerHarvester'}}); }

  if(spawn1GeneralContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 6) {
    var newName = 'spawn1GeneralContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1GeneralContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1GeneralResourceConatainerHarvester'}}); }

  if(spawn1GeneralContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 7) {
    var newName = 'spawn1GeneralContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1GeneralContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1GeneralResourceConatainerHarvester'}}); }

  if(spawn1GeneralContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 8) {
    var newName = 'spawn1GeneralContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1GeneralContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1GeneralResourceConatainerHarvester'}}); }
  
  //Auto-Spawn code for the upgraderContainerHarvesters
  //Make sure to change the amount of minimum guys depending on the open mining slots
  if(spawn1UpgraderContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 3) {
    var newName = 'spawn1UpgraderContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1UpgraderContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1UpgraderResourceConatainerHarvester'}}); }

  if(spawn1UpgraderContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 4) {
    var newName = 'spawn1UpgraderContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1UpgraderContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1UpgraderResourceConatainerHarvester'}}); }

  if(spawn1UpgraderContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 5) {
    var newName = 'spawn1UpgraderContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1UpgraderContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1UpgraderResourceConatainerHarvester'}}); }

  if(spawn1UpgraderContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 6) {
    var newName = 'spawn1UpgraderContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1UpgraderContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1UpgraderResourceConatainerHarvester'}}); }

  if(spawn1UpgraderContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 7) {
    var newName = 'spawn1UpgraderContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1UpgraderContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1UpgraderResourceConatainerHarvester'}}); }

  if(spawn1UpgraderContainerHarvesters.length < 3 && Memory.spawn1RoomControllerLevel == 8) {
    var newName = 'spawn1UpgraderContainerHarvesters' + Game.time;
    console.log('Spawning new spawn1UpgraderContainerHarvesters: ' + newName);
    Game.spawns['Spawn1'].spawnCreep(Memory.minerStats, newName, {memory: {job: 'spawn1UpgraderResourceConatainerHarvester'}}); }
  }
  }
module.exports = manageSpawn1Harvesters;
