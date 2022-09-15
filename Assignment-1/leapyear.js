
// program to find whether a given year is a leap year or not.

function leapyear(year)
  {
    if((year % 400 == 0) ||
       (year % 100 != 0) &&
       (year % 4 == 0))
    {
     console.log("Given Year is leap year");
    }
    else
    {
     console.log("Given Year is not a leap year");
    }
  }
leapyear(2020)

