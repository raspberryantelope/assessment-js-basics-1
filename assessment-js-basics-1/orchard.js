///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using a for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
//Create the variable and set it to 0 to add to later
let totalAcres = 0;
//Sum each array value to totalAcres for each type of apple
for (i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i]
    totalAcres += galaAcres[i]
    totalAcres += pinkAcres[i]
}
//Print totalAcres for verification
console.log("Total Acres: " + totalAcres)





// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/
//Create the variable and set it to 0 to add to later
let averageDailyAcres = 0
//Divide totalAcres by length of fujiAcres to get the averageDailyAcres value
averageDailyAcres = (totalAcres/fujiAcres.length)
//Print averageDailyAcres for verification
console.log("Average Daily Acres: " + averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0
//The while loop will run as long as acresLeft is >), ticking up days by one and reducing acresLeft by averageDailyAcres
 while (acresLeft > 0) {
     days++
     acresLeft = (acresLeft - averageDailyAcres)

     console.log('Acres left: ' + acresLeft)
 }
 //logging days as instructed
console.log("Days: " + days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
//Copy the existing arrays so we don't overwrite or change them in any way
let fujiAcresCopy = fujiAcres.slice()
let galaAcresCopy = galaAcres.slice()
let pinkAcresCopy = pinkAcres.slice()

// console.log(fujiAcresCopy)
// console.log(galaAcresCopy)
// console.log(pinkAcresCopy)
//For loop to replace each array value (currently in acres) to tons for each apple type
for (i = 0; i < fujiAcresCopy.length; i++) {
    fujiAcresCopy[i] = fujiAcresCopy[i] * 6.5
    galaAcresCopy[i] = galaAcresCopy[i] * 6.5
    pinkAcresCopy[i] = pinkAcresCopy[i] * 6.5

}
//Log each array as Daily Apple Tonnage
console.log(`Daily Fuji Tonnage: ` + '[' + fujiAcresCopy + ']')
console.log("Daily Gala Tonnage: " + '[' + galaAcresCopy + ']')
console.log("Daily Pink Tonnage: " + '[' + pinkAcresCopy + ']')





// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
let fujiTons = 0
let galaTons = 0
let pinkTons = 0
//For loop to add each array value to the tons variables to get total tonnage
for (i = 0; i < fujiAcresCopy.length; i++) {
    fujiTons += fujiAcresCopy[i]
    galaTons += galaAcresCopy[i]
    pinkTons += pinkAcresCopy[i]
}
console.log("Total Fuji Tonnage: " + fujiTons)
console.log("Total Gala Tonnage: " + galaTons)
console.log("Total Pink Tonnage: " + pinkTons)
//Converting tons to pounds
let fujiPounds = fujiTons * 2000
let galaPounds = galaTons * 2000
let pinkPounds = pinkTons * 2000
//Logging each total as Total Apple Pounds
console.log("Total Fuji Pounds: " + fujiPounds)
console.log("Total Gala Pounds: " + galaPounds)
console.log("Total Pink Pounds: " + pinkPounds)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
//Variables for total weekly profit PER APPLE TYPE
let fujiProfit = fujiPrice * fujiPounds
let galaProfit = galaPrice * galaPounds
let pinkProfit = pinkPrice * pinkPounds
//Logging
console.log("Fuji Profit: " + fujiProfit)
console.log("Gala Profit: " + galaProfit)
console.log("Pink Profit: " + pinkProfit)





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
//Variable for total weekly profit
let totalProfit = fujiProfit + galaProfit + pinkProfit
//Logged
console.log("Total Profit: " + totalProfit)
