/*
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
*/


function prime(from,to)
{
    var _prime = true;
    var count = 1;

    for(var i=from; i<to; i++)
    {
        for(var j=2; j<i; j++)
        {
            if(i%j == 0)
            {
                _prime = false;
                break
            }
        }
            if(_prime)
            {
                if(i== 0 || i == 1)
                {
                    console.log(i);
                }
                else
                {
                    for(var k=i; k>=1; k--)
                    {
                        count = count*k
                    }
                    console.log(count);
        }
        console.log(i)
    }
}
}
prime(4,20)