var spawn1Buildings = {
  run: function(manageBuildings)
  //The format of each flag is Level, Spawn, and then Type
  if (Memory.spawn1RoomControllerLevel == 1){
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R1.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R10.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R9.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R8.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R7.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R6.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R5.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R4.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R3.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L1S1R2.pos STRUCTURE_ROAD );  
  }
  if (Memory.spawn1RoomControllerLevel == 2){
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1E1.pos STRUCTURE_EXTENSION );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1E2.pos STRUCTURE_EXTENSION ); 
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1E3.pos STRUCTURE_EXTENSION ); 
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1E4.pos STRUCTURE_EXTENSION ); 
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1E5.pos STRUCTURE_EXTENSION ); 
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R19.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R18.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R17.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R16.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R15.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R14.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R13.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R12.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R11.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1C2.pos STRUCTURE_CONTAINER );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1C2.pos STRUCTURE_CONTAINER );  
  }
  if (Memory.spawn1RoomControllerLevel == 3){
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L3S1E6.pos STRUCTURE_EXTENSION );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L3S1E7.pos STRUCTURE_EXTENSION ); 
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L3S1E8.pos STRUCTURE_EXTENSION ); 
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L3S1E9.pos STRUCTURE_EXTENSION ); 
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L3S1E10.pos STRUCTURE_EXTENSION ); 
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L3S1T1).pos STRUCTRURE_TOWER);
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L3S1R28.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R27.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R26.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R25.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R24.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R23.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R22.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R21.pos STRUCTURE_ROAD );  
    Game.spawns['SpawnName'].room.createConstructionSite( Game.flags.L2S1R20.pos STRUCTURE_ROAD );  
  }
  
}
}
module.exports = spawn1Buildings
