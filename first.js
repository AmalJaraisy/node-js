//Task#1
//Programmers names: Aseel Monther and Amal Jarayse
//Check whether the number is divisible by 2, 3, or 5. 
//Count how many divisibilty conditions are true. 
//If arithmetic, true is converted to 1 and false to 0.    
const num=123; 
const a=num % 2 == 0;
const b=num % 3 == 0;
const c=num % 5 == 0;
const result = a + b + c;
console.log(result);