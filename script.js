
// moment meal suggestion 
var zeroTest = 0
var nineTime = moment().set("hour",9).format("H");
var tenTime = moment().set("hour",10).format("H");
var elevenTime = moment().set("hour",11).format("H");
var twelveTime = moment().set("hour",12).format("H");
var oneTime = moment().set("hour",13).format("H");
var twoTime = moment().set("hour",14).format("H");
var threeTime = moment().set("hour",15).format("H");
var fourTime = moment().set("hour",16).format("H");
var fiveTime = moment().set("hour",17).format("H");
var sixTime = moment().set("hour", 18).format("H");
var sevenTime = moment().set("hour", 19).format("H");
var eightTime = moment().set("hour", 20).format("H");

//console.log(tenTime)

var hourNow = moment().format('MMMM Do YYYY, HH:mm:ss a')

var currentHour = moment().format('H')

//breakfast lunch and dinner time
// if now > 0 && < 12
console.log(currentHour)
if (currentHour > 0 && currentHour < 11){
    $(".subtitle").text("It's breakfast time!")
    }
//  block of code to be executed if condition1 is true
else if (currentHour >= 11 && currentHour < 16) {
  $(".subtitle").text("It's lunch time!");
} else {
  $(".subtitle").text("It's dinner time!");
}
    
  
//  block of code to be executed if the condition1 is false and condition2 is true
// if (currentHour > 4 && currentHour < 8){
 //  $(".subtitle").text("It's dinner time!")
 //  }
// else (currentHour > 8)
// $(".subtitle").text("It's dinner or snack time!");







// click listener for meal time buttons
// breakfast button
$("#breakfastBox").click(function(){

});

// lunch button

$("#lunchBox").click(function(){

});
// dinner button 

$("#dinnerBox").click(function(){

});


//click listener for see more 

// click listener 

// search bar functionality utilizing API stuff 


// click listener for recipie card pop out
// $(".recipieAPI")




