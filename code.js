//wk1-2 countdown timer, will run 10...1 then "Blastoff!!!
function startCountdown() 
{
    var count = 10;  //defines the "count" function

    //countdown should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;  // decrease count by 1

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 1000);

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 2000);  
    
    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 3000);

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 4000);

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 5000);

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 6000);

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 7000);

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 8000);

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count -1;
    }, 9000);

    setTimeout(function () {
        //after 1 sec count will decrease by 1
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
        count = count -1;
    }, 10000);
}