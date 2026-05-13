console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) 
{
    if (count < 0) 
    {
        console.log("The number is negative. Please enter a positive number.");
        return;
    }
    for (let i = 1; i <= count; i+=2) 
    {
        console.log(i);
    }
}
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName="John Doe", age = 0)
{
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16)
    {
        console.log(aboveSixteen);
    }
    else
    {
        console.log(belowSixteen);
    }
}
checkAge("Alice", 20);
checkAge("Bob", 15);
checkAge();

console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y)
{   if (x === 0 && y === 0)
    {
        console.log("The point is at the origin.");
    }   
    else if (x === 0)
    {
        console.log("The point is on the y-axis.");
    }           
    else if (y === 0)
    {
        console.log("The point is on the x-axis.");
    }   
    else if (x > 0 && y > 0)
    {
        console.log("The point is in Quadrant 1.");
    }               
    else if (x < 0 && y > 0)
    {
        console.log("The point is in Quadrant 2.");
    }   
    else if (x < 0 && y < 0)
    {
        console.log("The point is in Quadrant 3.");
    }   
    else if (x > 0 && y < 0)
    {
        console.log("The point is in Quadrant 4.");
    }   
    
    else
    {
        console.log("Invalid input.");
    }
}
whichQuadrant(0, 0);   
whichQuadrant(0, 5);   
whichQuadrant(5, 0);  
whichQuadrant(5, 5);  
whichQuadrant(-5, 5); 
whichQuadrant(-5, -5); 
whichQuadrant(5, -5);  

console.log("EXERCISE 4:\n==========\n");

function planUsage (planLimit, day, usage)
{
    const periodLength = 30;
    const dailyLimit = planLimit / periodLength;
    const currentAvg = usage / day;
    const projectedUsage = currentAvg * periodLength;
    const remainingData = planLimit - usage;
    const remainingDays = periodLength - day;
    const requiredDailyUsage = remainingData / remainingDays;
    console.log(`${day} days used, ${remainingDays} days remaining`);
    console.log(`Average daily use: ${currentAvg.toFixed(2)} GB/day`);
    console.log(`Projected usage: ${projectedUsage.toFixed(2)} GB`);
    if (remainingData <= 0)
    {
        console.log(`You have EXCEEDED your data plan by ${Math.abs(remainingData).toFixed(2)} GB.`);
    }
    else if (projectedUsage > planLimit)
    {
        console.log(`You are EXCEEDING your data plan by ${(projectedUsage - planLimit).toFixed(2)} GB.`);
        console.log(`To stay within your data plan, use no more than ${requiredDailyUsage.toFixed(2)} GB/day.`);
    }   
    else if (projectedUsage < planLimit)
    {
        console.log(`You are UNDER your data plan by ${(planLimit - projectedUsage).toFixed(2)} GB.`);
        console.log(`To stay within your data plan, you can use up to ${requiredDailyUsage.toFixed(2)} GB/day.`);
    }   
    else
    {
        console.log("You are on track with your data plan.");
    }
}
planUsage(100, 15, 56);   // exceeding projected
planUsage(100, 15, 40);   // under projected
planUsage(100, 15, 50);   // right on track
planUsage(100, 15, 105);  // run out of data
