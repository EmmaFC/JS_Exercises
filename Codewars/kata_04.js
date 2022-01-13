/* Kata_04
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

'Hello world' = true
' Hello world' = false
'Hello world  ' = false
'Hello  world' = false
'Hello' = true
// Even though there are no spaces, it is still valid because none are needed
'Helloworld' = true 
// true because we are not checking for the validity of words.
'Helloworld ' = false
' ' = false
'' = true */

export function validSpacing(s) {

  let i =0
  let a = Array.from(s);
  let arrayWord=[];
  let arraySpaces=[];
  a.forEach((space) => {
    if(space == ' '){
      arraySpaces.push(space);
    }  
     
  })

 arrayWord = s.split(/[:;?!~,`"&|()<>{}\[\]\r\n/\\]+/).join('. ').split('.');

console.log(arrayWord) 
  console.log('expecting: ' + arraySpaces.length+ ' to equal: ' + arrayWord.length)   
  
   if(arraySpaces.length == 1 && arrayWord.length == 2){
    return true
  }
 
   if(arraySpaces.length == 1 && arrayWord.length == 1){
    return false
  }
   if (arraySpaces.length == arrayWord.length-1){
    return true
  }
  return false
      
  
}