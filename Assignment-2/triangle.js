

/*
Javascript function to check whether a triangle is equilateral,
isosceles or scalene
*/


function triangle(side1,side2,side3)
{
    if(side1==side2 && side2==side3 && side3==side1)
    {
        console.log("Equilateral Triangle")
    }
    else if(side1==side2 || side2==side3 || side3==side1)
    {
        console.log("Isosceles Triangle")
    }
    else
    {
        console.log("Scalene Triangle")
    }
}
triangle(10,10,10)