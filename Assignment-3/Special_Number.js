/*
Write a program to find whether a given number is special number or

not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 145
*/

let number = 145;
let sum = 1;
let temp = number;
let sum1 = 0;


while(temp > 0)
{
    let remainder = temp % 10;
    for(var i=1; i<=remainder; i++)
    {
        sum *= i;
    }
    sum1 += sum;
    sum = 1;

    temp = parseInt(temp/10)
}

if(sum1 == number)
{
    console.log("Special Number");
}
else
{
    console.log("Not a Special Number");
}