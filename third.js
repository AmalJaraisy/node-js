/*
*Task#3 
*Programmers names: Aseel Monther and Amal Jarayse
*This program counts the number of zeros in an array. 
*We use a for loop to check each element. 
*We use a ternary operator instead of an if statement. 
*If the element is zero, we add 1 to the counter. 
*Otherwise, we add 0.
*We print the total number of zeros. 
*/ 
const arr = [5, 0, 3, 0, 8, 0, 2];
let count =0; 
for(let i=0; i<arr.length; i++)
{
    count += (arr[i] == 0) ? 1 : 0;
}
console.log(count);
