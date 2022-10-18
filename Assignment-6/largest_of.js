
let number;
let result;
let pow;

function largest(number)
{
    let number1 = number-1;
    let array = [3,45,6,7,23,5,7,8];
    array.sort((a,b) => (b-a));
    // console.log(array);
    result = array[number1];
    if(number%10 == 1)
    {
        pow = "st";
    }
    if (number%10 == 2)
    {
        pow = "nd";
    }
    if(number%10 == 3);
    {
        pow = "rd";
    }
    if(number%10 >3)
    {
        pow = "th";
    }
    console.log(`${number} ${pow} largest number from the array is : "${result}"`)
}
largest(3)