export function rowWeights(array){
    let totalTeams = []
  for(let i = 0; i<array.length;i+2){
    let teamOne_people = array[i];
    let teamOne = [ ];
    teamOne.push(teamOne_people);
    let One = teamOne.length
     totalTeams.push(teamOne.length)
  }
   
   for(let i = 1; i<array.length;i+2){
    let teamTwo_people = array[i];
    let teamTwo = [ ];
    teamTwo.push(teamTwo_people)
     totalTeams.push(teamTwo.length)
     
  }
   
  
   return totalTeams
 }