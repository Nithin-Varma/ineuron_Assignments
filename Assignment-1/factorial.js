
// program to find the factorial of a number.

let count = 1;

function factorial(num)
{
    if(num == 0 || num == 1)
    {
        console.log(1)
    }
    else
    {
        for(let i=1; i<=num; i++)
        {
            count *= i;
        }
       
    }

    console.log("Factorial of "+num+" is "+ count)
}

factorial(6)