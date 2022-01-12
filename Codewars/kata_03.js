/* KATA=03

Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false 
*/

export function solution(str, ending){
  
    let arr = Array.from(str)
    let arr2 = Array.from(ending)
    let arr3 = []
    
    for(let i=0; i<arr2.length; i++){
        let letter = arr.pop(i)
        arr3.push(letter)
    }
    
    let str2 = arr3.reverse().join('')
  
    if (str2 == ending){
        return true;
    }
      
    return false;

}