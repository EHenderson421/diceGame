"use strict"


//function test(){
    // alert ("test1");
    // rollDice();

//}


function rollDice(numberOfSides) {
    //gives random number between 1 and #of sides
        //alert ("test2");
        
        return Math.floor(Math.random() * numberOfSides) + 1;
        
}

alert ("Are You Ready For Some FOOTBALL!!!")

function runGame() {
    let firstRoll = rollDice(4); // four sided die roll, 1 or 3 is a pass play, 2 or 4 is a pass paly

    if (firstRoll === 1 || firstRoll === 3) {
		console.log ("You rolled a" +" \""+ firstRoll +"\" "+ "Your going to use a Run-Play.");
        alert ("You rolled a" +" \""+ firstRoll +"\" "+ "Your going to use a Run-Play.");
    }          
    
    else if (firstRoll === 2 || firstRoll === 4) {
        console.log("You rolled a" +" \""+ firstRoll +"\" "+ "Your going to use a Pass-Play.");
        alert ("You rolled a" +" \""+ firstRoll +"\" "+ "Your going to use a Pass-Play.");
    }

    let secondRoll = rollDice(6); // six sided die roll, helps decide outcome of play
    if (secondRoll === 1 || secondRoll === 3) {
        console.log ("You rolled a" +" \""+ secondRoll +"\" "+ "Your team executed the play.");   
        alert ("You rolled a" +" \""+ secondRoll +"\" "+ "Your team executed the play.");
    } 
    
    else if (secondRoll === 2 || secondRoll === 4) {
        console.log ("You rolled a" +" \""+ secondRoll +"\" "+ "Your player dropped the Ball.");
        alert ("You rolled a" +" \""+ secondRoll +"\" "+ "Your player dropped the Ball.");
    }
    else if (secondRoll === 6 && (firstRoll === 2 || firstRoll === 4)) {
        console.log ("You rolled a" +" \""+ secondRoll +"\" "+ "Your receiver was out of postion and the ball was Intercepted.");
        alert ("You rolled a" +" \""+ secondRoll +"\" "+ "Your receiver was out of postion and the ball was Intercepted.");
    }
    else if (secondRoll === 5 && (firstRoll === 1 || firstRoll === 3)) {
        console.log ("You rolled a" +" \""+ secondRoll +"\" "+ "Fumble fingers dropped the Ball and the other team picked it up.");
        alert ("You rolled a" +" \""+ secondRoll +"\" "+ "Fumble fingers dropped the Ball and the other team picked it up.");
    } 
        
    else {
        console.log ("You rolled a" +" \""+ secondRoll +"\" "+ "Your team executed the play."); 
        alert ("You rolled a" +" \""+ secondRoll +"\" "+ "Your team executed the play.");
    }
        
    let thirdRollA = rollDice(8); //eight sided die roll, negitive yards for running plays
    let thirdRollB = rollDice(10); //ten sided die roll, negitive yards for passing plays
    let thirdRollC = rollDice(20); //twelve sided die roll, positive yards for running plays
    let thirdRollD = rollDice(30); //forty sided die roll, positive yards for passing plays
    if (secondRoll === 2 || secondRoll === 4) {
        console.log ("Sorry Try Again.");
        alert ("Sorry Try Again.");
    }
    
    else if (secondRoll === 5 && (firstRoll === 1 || firstRoll === 3)) {
        console.log ("YOUR TEAM LOST THE BALL!!!");
        console.log ("Next Player Please.");
        alert ("YOUR TEAM LOST THE BALL!!!");
        alert ("Next Player Please.");
    }
    else if (secondRoll === 6 && (firstRoll === 2 || firstRoll === 4)) {
        console.log ("YOUR TEAM LOST THE BALL!!!");
        console.log ("How does it feel to overpay for someone that can't pay attention in team meetings.");
        console.log ("Next Player Please.");
        alert ("YOUR TEAM LOST THE BALL!!!");
        alert ("How does it feel to overpay for someone that can't pay attention in team meetings.");
        alert ("Next Player Please.");
    }
    else if ((firstRoll === 1 || firstRoll === 3) && (secondRoll === 1 || secondRoll === 3)) {
        console.log ("Dropback roll" +" \""+ thirdRollA +"\" "+ "Forward progress roll" +" \""+ thirdRollC +"\" "+ "Net Yards On The Play" +"  "+ (thirdRollC - thirdRollA));
        alert ("Dropback roll" +" \""+ thirdRollA +"\" "+ "Forward progress roll" +" \""+ thirdRollC +"\" "+ "Net Yards On The Play" +"  "+ (thirdRollC - thirdRollA));
    }

    else if ((firstRoll === 2 || firstRoll === 4) && (secondRoll === 1 || secondRoll === 3)) {
        console.log ("Dropback roll" +" \""+ thirdRollB +"\" "+ "Forward progress roll" +" \""+ thirdRollD +"\" "+ "Net Yards On The Play" +"  "+ (thirdRollD - thirdRollB));
        alert ("Dropback roll" +" \""+ thirdRollB +"\" "+ "Forward progress roll" +" \""+ thirdRollD +"\" "+ "Net Yards On The Play" +"  "+ (thirdRollD - thirdRollB));
    }
    else if ((firstRoll === 2 || firstRoll === 4) && secondRoll === 5) {
        console.log ("Dropback roll" +" \""+ thirdRollB +"\" "+ "Forward progress roll" +" \""+ thirdRollD +"\" "+ "Net Yards On The Play" +"  "+ (thirdRollD - thirdRollB));
        alert ("Dropback roll" +" \""+ thirdRollB +"\" "+ "Forward progress roll" +" \""+ thirdRollD +"\" "+ "Net Yards On The Play" +"  "+ (thirdRollD - thirdRollB));
    }
    else if ((firstRoll === 1 || firstRoll === 3) && secondRoll === 6) {
        console.log ("Dropback roll" +" \""+ thirdRollA +"\" "+ "Forward progress roll" +" \""+ thirdRollC +"\" "+ "Net Yards On The Play" +"  "+ (thirdRollC - thirdRollA));
        alert ("Dropback roll" +" \""+ thirdRollA +"\" "+ "Forward progress roll" +" \""+ thirdRollC +"\" "+ "Net Yards On The Play" +"  "+ (thirdRollC - thirdRollA));
    }

    else {
        console.log ("YOUR TEAM LOST THE BALL!!!");
        console.log ("Next Player Please.");
        alert ("YOUR TEAM LOST THE BALL!!!");
        alert ("Next Player Please.");
    }
}
    rollDice();




















