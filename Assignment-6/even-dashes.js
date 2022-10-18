// Computing Dashes between even numbers....

let number;

function computedash(number)
{
let string = number.toString();
let f_res = [string[0]];

for(var x=1; x<string.length; x++)
{
    if((string[x-1]%2 === 0) && (string[x]%2 == 0))
    {
        f_res.push('-',string[x]);
    }
    else
    {
        f_res.push(string[x]);
    }
}
console.log(f_res.join(''))
}
computedash(025468)
