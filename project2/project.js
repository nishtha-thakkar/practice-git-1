// 1. You have a thermometer that measures room temperature. Write an if-elseif condition to determine:

// - If the temperature is below 18°C, print "It's too cold, turn on the heater."
// - If the temperature is between 18°C and 25°C, print "The temperature is comfortable."
// - If the temperature is above 25°C, print "It's too hot, turn on the fan."


let temperature = 20;


if(temperature<18){
    console.log("It's too cold, turn on the heater.")
}else if(temperature>=18 && temperature<25 ){
    console.log("The temperature is comfortable.")
}else if(temperature>25){
    console.log("It's too hot, turn on the fan.")
}else{
    console.log("the temperature is not to hot and cold")
}



// 2.A student gets a score out of 100 in an exam. Write an if-elseif condition to determine:

// - If the score is 90 or above, print "Grade A."
// - If the score is between 75 and 89, print "Grade B."
// - If the score is between 50 and 74, print "Grade C."
// - If the score is below 50, print "Grade D."

let score = 82;

if(score>=90){
    console.log("Grade A.");
}else if(score>=75 && score<=89){
    console.log("Grade B.");
}else if(score>=50 && score<=74){
    console.log("Grade C.");
}else if(score>=50 && score<=74){
    console.log("Grade C.");
}else if(score>50){
    console.log("Grade D.")
}else{
    console.log("Grade F.")
}


// 3.You are driving and approach a traffic signal. Write an if-elseif condition to determine:

// - If the light is "Red", print "Stop."
// - If the light is "Yellow", print "Slow down."
// - If the light is "Green", print "Go."

let light = "Green"

if(light==="Red"){
    console.log("Stop.");
}else if(light==="Yellow"){
    console.log("Slow down.");
}else if(light==="Green"){
    console.log("Go.");
}else{
    console.log("No signal , you can go any side");
}


// 4.A store is giving discounts based on the total bill amount. Write an if-elseif condition to determine:

// - If the bill is less than $50, no discount.
// - If the bill is between $50 and $100, give a 10% discount.
// - If the bill is more than $100, give a 20% discount.

let amount = 70;

if(amount<50){
    console.log("you will get no discount.");
}else if(amount>=50 && amount<=100){
    console.log("you will get 10% discount.")
}else if(amount>100){
    console.log(" you will get 20% discount.")
}else{
    console.log("you will get a small gift on  any purchse the product")
}


// 5.You have different tasks to do based on the time of day. Write an if-elseif condition to determine:

// - If the time is before 7 AM, print "It's too early, sleep a bit more."
// - If the time is between 7 AM and 10 AM, print "Time for breakfast and morning exercise."
// - If the time is between 10 AM and 6 PM, print "Time to work or study."
// - If the time is after 6 PM, print "Relax for the day."


let time = 9;

if(time<7){
    console.log("It's too early, sleep a bit more.");

}else if(time>=7 && time<=10){
    console.log("Time for breakfast and morning exercise.");
}else if(time>10 && time<=6 ){
    console.log("Time to work or study.");
}else if(time>6){
    console.log("Relax for the day.")
}else{
    console.log("time for enjoyment");
}


// 6.Find the Lowest and Highest Temperatures

// You have recorded the temperature for a day: temperature1 = 32°C. Initialize lowestTemperature to Infinity and highestTemperature to -Infinity. Write conditions to:

// Update lowestTemperature if temperature1 is lower than the current lowestTemperature.

// Update highestTemperature if temperature1 is higher than the current highestTemperature.

// Print "Lowest temperature:  and "Highest temperature: " in innerHTML



let temperature1 = 34;


