//Task#2
//Programmers names: Aseel Monther and Amal Jarayse
//This program prints all prime numbers less than 237. 
//A prime number is divisible only by 1 and itself.
for(let num=2; num<237; num++)
{
    let isPrime = true;
    for(let i=2; i<num; i++)
    {
        if(num % i == 0)
            isPrime = false;
    }
    if(isPrime)
    console.log(num); 
}