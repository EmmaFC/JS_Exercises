export function flyBy(lamps, drone){
    let arr = Array.from(lamps)
  let distance = drone.indexOf('T')
 
  for(let i =0; i<=distance; i++){
      if(arr[i] == 'x'){
      arr[i] = arr[i].replace(/x/g, 'o')
    }
  }
  
  console.log(arr.join(''))
  return arr.join('')
  }