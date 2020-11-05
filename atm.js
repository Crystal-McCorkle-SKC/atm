"use strict";

/*# atm
 atm lab
For Lab3 you will be creating an ATM program.

* Write a program that behaves like an ATM that you can interact with. You should be able to:

    * If you have a bank account, access it with a pin

    * Create a new bank account with a unique pin

    * Deposit money into the bank account and print the new balance

    * Withdraw money from the bank account and print the new balance

    * Get the balance of the bank account

    * Change the pin of the bank account

    * Your accounts should persist across sessions.

* You should take advantage of objects and functions to organize your ATM simulator.

* The code should be well documented with comments, have good code structure, and follow naming conventions.

* Push your code to your repository. */


//Pseudocode below of what I need: 
//will need to add ids to my html 
//then sub getElmentById for the prompts 

///check to see if you have a bank acct---make it function welcome()? 
//let bankAccount = prompt("Do you have a KC Bank account? Type Yes or No"); 

/*if (bankAccount === "Yes") {  //should this be if true? 
    parseInt(prompt("Please enter your pin number.")); //make a digit requirement? 4 digits? 
    options (); //calls the options function to ask the user what they would like to do
    } else if (bankAccount === "No") {
       createAccount(); //calls the createAccount function 
}*/ 

//if user has a bank acct, this function asks the user to enter their pin 
function enterPin () {
    alert("test! enter pin");
}

//Add this in even??! 
let currentAccount;


//create array w/ list of objects (pin: and balance:)
let bankAccounts = [
    //pin
    //balance
    //0
    {
      pin : 1239,
      balance: 100.00
    }, 
    //1 
    {
      pin: 3209,
      balance: 5.00 
    },
    //2 
      {
      pin: 2345,
      balance: 205800.00 
    },
      {
      pin: 6542,
      balance: 163.00 
    },
    {
      pin: 6732,
      balance: 985.00 
    },
  ];



  
//getAccount function---use object from Willie's code? 
function getAcct() {
    let pin = parseInt(document.getElementById("pinput").value); 
        for(let i=0; i < bankAccounts.length; i++){
          if( bankAccounts[i].pin === pin  ){
              document.getElementById("account").innerHTML = "Your current balance: $" + bankAccounts[i].balance; 
              return; 
           //return bankAccounts[i]; 
          }   
        }
        alert("Invalid pin! Please try again! Or, click create new account below."); 
        //instead of the alert box, maybe make all text go away and say 'Oh no, invalid
        //pin! Please try again or create a new account using the button below. 
        //make this text appear only if this happens and do it in red w/ a robber?!
        //going across background
        return; 
}

function pathToGetAcct() {
    window.open("getAcct.html", "_self");
    return; ///???
}


function pathToCreateAcct() {
    window.open("createAcct.html", "_self");
    return; //????
}

function pathToDeposit () {
    window.open("deposit.html", "_self");
    return;
}

function pathToWithdrawal () {
    window.open("withdrawal.html", "_self");
    return;
}

function pathToHome () {
    window.open("index.html", "_self");
    return;
}

function pathToChangePin () {
    window.open("changePin.html", "_self");
    return;
}

//just playing
/*let elem = document.getElementById("pig");
      var pos = 0;
      var id = setInterval(frame, 75);
function frame() {
          if (pos >= 1000) {
              pos = -10;
          } else {
              pos=pos+0.50;
              elem.style.left = pos + '%';
          }
      }*/





    

function options () {
    prompt("Welcome! What would you like to do? A. Deposit B. Withdraw C. Balance Inquiry D. Change Pin");
        //Then (if true, you do have a bank acct) give options to deposit, withdrawl,
        // balance inquiry, change pin (maybe an exit? option too??)
}

//taking out for now
/*function createAcct () {
    window.open("createAcct.html", "_self");
    //this will need to add to the bankAccounts array/object below
    //add Willie's Code
    //acctNum = parseInit(prompt("Please create a bank account number (9 number minimum)"));
           // if (acctNum < 9) {
             //   parseInit(prompt("Please enter 9 digits.")); {
              //  } else if ({
               //     createAccount (); //calls the create account function 
               // }
} */




function withdrawal () {

}

function balInquiry () {   //use an object here? 

}

function changePin () {

}




//if true, enter pin
    //Then (if true, you do have a bank acct) give options to deposit, withdrawl, balance inquiry, change pin (maybe an exit? option too??)
        //if deposit is true
            //enter amt to deposit 
            //add amt of deposit plus current bal
            //print new bal 
        //if withdrawal is true
            //enter amt to withdrawal
            //subtract amt from the current bal 
            //print new bal 
        //if balance inquiry is true
            //return the current bal amt 
        //if change pin is true
            //ask for new pin number
            //replace old pin w/ new pin number
            //confirmation, your new pin number is _ _ _ _!
//if false (no bank account number), please create a bank acct 
    //create a new acct number
    //ask user to create a pin 
    //return confirmation, Congrats! Your bank acct number is ____ and your pin number is _ _ _ _. Also, print current bal $0
    //then what would you like to do? --give options deposit, withdrawl, balance inquiry, change pin (takes through loop again)
    

//*********look at game loop2 in teams to help with ideas */




//alert("Testing!");



