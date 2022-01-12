/* 
7 KYU - Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.*/


export function getSum( a,b ){
    let sum;

    if(a<b){
        for (let i = a; i<=b; i++){
        sum += i; 
        }
    }
    
    if(b<a){
        for ( let i = b; i<=a; i++){
        sum += i; 
        }
    }
    
    if(b==a){
        sum = a;
    }

   // console.log(sum);
   return sum;
    
}