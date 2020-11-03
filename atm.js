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

//check to see if you have a bank acct
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
    
"use strict";

alert("Testing!");

