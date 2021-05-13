//wk1-2 countdown timer, will run 10...1 then "Blastoff!!!
function startcountdown();

{
    var count = 10;  //defines the "count" function

    //countdown should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 1000); //afer 1 sec run code

    //countdown should display 9
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 2000); //afer 2 sec run code

    //countdown should display 8
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() { }, 3000); //afer 3 sec run code

    //countdown should display 7
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 4000); //afer 4 sec run code

    //countdown should display 6
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 5000); //afer 5 sec run code

    //countdown should display 5
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 6000); //afer 6 sec run code

    //countdown should display 4
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 7000); //afer 7 sec run code

    //countdown should display 3
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 8000); //afer 8 sec run code

    //countdown should display 2
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 9000); //afer 9 sec run code

    //countdown should display 1
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1
    setTimeout(function() {  
    }, 10000); //afer 10 sec run code

    //Countdown should display "Blastoff!!!"
    document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    setTimeout(function(){})
    
}