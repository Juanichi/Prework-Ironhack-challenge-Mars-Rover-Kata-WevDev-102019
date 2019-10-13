// Rover Object Goes Here
// ======================
let  curiosity = {
    direction : "N",
    name: "Rover1",
    x: 0,
    y: 0,
    travelLog : [],
     barrier:[[1,4], [3,7], [5,5], [7,4], [8,6], [9,8]]
  };
  
  let  opportunity = {
    direction : "N",
    name: "Rover2",
    x: 5,
    y: 5,
    travelLog : [],
    barrier:[[1,4], [3,7], [5,5], [7,4], [8,6], [9,8]]
  };
  
  let board = [ 
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, "hole1", null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, "hole2", null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, "hole3", null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, "rock1", null, null, null, null, null],
    [null, null, null, null, null, null, "rock2", null, null, null],
    [null, null, null, null, null, null, null, null, "rock3", null],];
  
  
  // ======================
  function turnLeft(rover){
  console.log(`turnLeft was called!`);
    switch(rover.direction){
  
      case "N": 
        rover.direction = "W";
        break; 
  
      case "E": 
        rover.direction = "N";
        break;
  
      case "S": 
        rover.direction = "E";
        break;
  
      case "W": 
        rover.direction = "S";
        break;
  
    }
    console.log(rover.direction);
  }
  
  
  
  function turnRight(rover){
  console.log(`turnRight was called!`);
     switch(rover.direction){
  
        case "N": 
        rover.direction = "E";
        break;
  
        case "E": 
        rover.direction = "S";
        break;
  
        case "S": 
        rover.direction = "W";
        break;
  
        case "W": 
        rover.direction = "N";
        break;
  
    }
    console.log(rover.direction);
  }
  
  
  function moveForward(rover){
  
    console.log(`moveForward was called`);
  
    if (rover.x <0 || rover.x >10){
      console.log("the vehicle left the limit board");
      
      }
      else{
     switch(rover.direction){
        case 'N': rover.x++;
        break;
        case 'S': rover.x--;
        break;}
      }
      
    if (rover.y <0 || rover.y >10){
      console.log("the vehicle left the limit board");
      
      }
      else{
     switch(rover.direction){
        case 'E': rover.y++;
        break;
        case 'W': rover.y--;
        break;
      }
      }
    let place= [rover.x, rover.y];
    rover.travelLog.push(place);
  }
  
  
  
  function moveBackward(rover){
  
   console.log(`moveBackward was called`);
  
   if (rover.x <0 || rover.x >10){
      console.log("the vehicle left the limit board");
      
      }
      else{
     switch(rover.direction){
        case 'N': rover.x--;
        break;
        case 'S': rover.x++;
        break;}
      }
      
    if (rover.y <0 || rover.y >10){
      console.log("the vehicle left the limit board");
      
      }
      else{
     switch(rover.direction){
        case 'E': rover.y--;
        break;
        case 'W': rover.y++;
        break;
      }
      }
   let place= [rover.x, rover.y];
    rover.travelLog.push(place);
  }
    
    
    
  
   
  function roverOrders(rover, str){
    for(let i = 0; i < str.length; i++){
  
    if (rover.barrier ===  rover.travelLog) {
  
      console.log("Don´t move");}
      else {
      
      for(let i = 0; i < str.length; i++){
  
      
       if (str[i] === "f"){
         moveForward(rover);
          } else if (str[i] === "b"){
         moveBackward(rover);
          } else if (str[i] === "l"){
         turnLeft(rover);
          } else if (str[i] === "r"){
         turnRight(rover);
          } else {
         console.log(`Character not recognized, try again!!`);
       }
  
      }
      let place= [rover.x, rover.y];
      console.log(`The ${rover.name} is ${place}`);
  }
  
    
  }
  }
  
  
  
  
    
  
  roverOrders(curiosity, "rfflrffflfl");
  console.log(curiosity.direction);
  console.log(curiosity.x, curiosity.y);
  console.log(curiosity.travelLog);
  
  roverOrders(opportunity, `rfffrfflfl`);
  console.log(opportunity.direction);
  console.log(opportunity.x, opportunity.y);
  console.log(opportunity.travelLog);
  