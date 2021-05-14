//wk1-2 countdown timer, will run 10...1 then "Blastoff!!!
function startCountdown() //defines the function "startCountdown" on button press
{
    var count = 10;  //defines the "count" function starting point

    //countdown should display 10
    document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
    count = count - 1;  // decrease count by 1

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 9
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
    }, 1000); //wait 1 second

    setTimeout(function () //creates a timeout function
    {
        //countdown should display 8
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count -1; //decrease count by 1
    }, 2000);  //wait 2 seconds
    
    setTimeout(function () //creates a timeout function
    {
        //countdown should display 7
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count -1; //decrease count by 1
    }, 3000); //wait 3 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 6
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count -1; //decrease count by 1
    }, 4000); //wait 4 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 5
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count -1; //decrease count by 1
    }, 5000); //wait 5 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 4
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count -1; //decrease count by 1
    }, 6000); //wait 6 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 3
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count -1; //decrease count by 1
    }, 7000); //wait 7 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 2
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count -1; //decrease count by 1
    }, 8000); //wait 8 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 1
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count -1; //decrease count by 1
    }, 9000); //wait 9 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display "Blastoff!!!"
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!"; //prints "Blastoff!!!" to "countdownTimer in the .html document"
        count = count -1; //decrease count by 1
    }, 10000); //wait 10 seconds
}