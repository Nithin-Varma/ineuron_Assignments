/*
JavaScript program to find the sum of the multiples of 3 and 5
under 1000
*/

let count = 0;
for(let i=0; i<1000; i++)
{
    if(i%3 == 0 && i%5 == 0)
    {
        count +=i;
    }
    else
    {
        continue;
    }
}
console.log(count);