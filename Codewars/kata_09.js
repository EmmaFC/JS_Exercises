export function largestCrossSum(matrix) {

    let countingArray = []
    let HigherRowSum = 0

      matrix.forEach((array)=>{
        let count = 0

        for(let i=0; i<array.length; i++){
          let number = array[i]
          count + number
          countingArray.push(count)
        }

        for(let e = 0; e<countingArray.length; e++){
          if(HigherRowSum < countingArray[e]){
             HigherRowSum = countingArray[e]
          }
        }

        
      for(let z=0; z < matrix.length; z++){
        let column = array[z]
        count + number
        countingArray.push(count)
      }
        
      })

  }