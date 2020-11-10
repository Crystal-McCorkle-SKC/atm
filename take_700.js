"use strict"; 

//function to change background color of page
function chBackColor(color) {
   document.body.style.background = color;
}

//Function to hide the home page 
function hide() {
    document.getElementById("start").style.display = "none";
}

//declares yesBtn, when button is clicked yes, display the balInquiry id section and hide home page
let yesBtn = document.querySelector("#yes");
yesBtn.onclick = function () {
   if (document.getElementById("balInquiry").style.display = "block") {
    document.body.style.background = "none";
        return hide();
    }
}

//declares noBtn, when button is clicked no, display the createaAcctInfo id and hide home page 
let noBtn = document.querySelector("#no");
noBtn.onclick = function() {
    if (document.getElementById("createAcctInfo").style.display = "block") {
        document.body.style.background = "none";
        return hide();
    }  
} 

//this shows only the element that is clicked (see html buttons in html file--onclick event) 
//hides the rest of the document 
function show(elementId) {
 document.getElementById("balInquiry").style.display="none";
 document.getElementById("changeP").style.display="none";
 document.getElementById("depositInfo").style.display="none";
 document.getElementById("withdrawalInfo").style.display="none";
 document.getElementById("createAcctInfo").style.display="none";
 document.getElementById("start").style.display="none";
 document.getElementById(elementId).style.display="block";
}

//this function displays the menu buttons at the bottom of the page
function displayMenu() {
    document.getElementById("menu").style.display = "block";
    
} 

//declare the global currentAccount variable 
let currentAccount; 

//create an array with a list of objects (pin: and balance:)
//these are the atm's current account(s) 
let bankAccounts = [
    {
      pin : 1111,
      balance: 100.00
    }, 
]; 
  
//BALANCE INQUIRY 
//getAccount function
function getAcct() {
    //goes to the dom, gets the element w/ id "pinput" and converts that value to an integer, then it's assigned to var pin
    let pin = parseInt(document.getElementById("pinput").value);
        //the for loop iterates over the above array (bankAccounts)
        for (let i = 0; i < bankAccounts.length; i++) {
            //if the key, pin, inside of the object of the bankAccounts array is equal to the pin variable 
            if (bankAccounts[i].pin === pin  ) {
              //go to the innerHTML where id "account" is listed and put the current balance for the given account
              document.getElementById("account").innerHTML = `Your current balance: $${bankAccounts[i].balance}`;
              //display menu buttons  
            return displayMenu();
          }   
        }
        //alert if invalid pin is entered 
        alert("Invalid pin! Please try again! Or, click create new account below."); 
} 

//DEPOSIT function 
function deposit() {
    //goes to the dom, gets the element w/ id "depositInput" and converts that value to an integer, then it's assigned to var pin
    let pin = parseInt(document.getElementById("depositInput").value); 
        //for loop iterates over the bankAccounts array 
        for (let i = 0; i < bankAccounts.length; i++) {
            //if the key, balance, inside of the object of the bankAccounts array is >= 0
            if (bankAccounts[i].balance >= 0 ) {
              //go to the innerHTML where id "depositNum" is listed and put the previous balance and the new balance
              document.getElementById("depositNum").innerHTML = `Your previous balance was: $${bankAccounts[i].balance} <br> 
              Your new balance is: $${bankAccounts[i].balance + pin}`;
            //display the menu buttons   
            return displayMenu();  
        }   
    }
}


//WITHDRAWAL function 
function withdrawal() {
    //goes to the dom, gets the element w/ id "withdrawalInput" and converts that value to an integer, then it's assigned to var pin
    let pin = parseInt(document.getElementById("withdrawalInput").value); 
        //for loop iterates over the bankAccounts array 
        for (let i = 0; i < bankAccounts.length; i++) {
            //if the key, balance, inside of the object of the bankAccounts array is >= 0  
            if (bankAccounts[i].balance >= 0 ) {
                //go to the innerHTML where id "withdrawalNum" is listed and put the previous balance and the new balance
                document.getElementById("withdrawalNum").innerHTML = `Your previous was: $${bankAccounts[i].balance} <br> 
                Your new balance is: $${bankAccounts[i].balance - pin}`;
            //display the menu buttons 
            return displayMenu();  
            }   
        }
}


//sets bankAccount to an empty array 
let bankAccount = [];

//constructor function, takes argument of pin, establishes pin and balance 
function Account(pin) {
    this.pin = pin;
    this.balance = 0;
}
 
//CREATE ACCT function 
function createAcct() {
    //goes to the dom, gets the element w/ id "newAcctInput" and converts that value to an integer, then it's assigned to var pin
    let pin = parseInt(document.getElementById("newAcctInput").value); 
        //for loop iterates over the bankAccount array 
        for (let i = 0; i < bankAccount.length; i++) {
            //if the key, pin, inside of the object of the bankAccount array is equal to the pin variable 
            if( bankAccount[i].pin === pin) {
            alert("This account already exists!"); 
            return; 
            }   
        }

    //create a bank account
    //this instantiates the object from the contstructor function above 
    let newAccount = new Account(pin); 
  
    //adds the new account to the array, at least this should, but it's not working for me 
    bankAccount.push(newAccount); 

    //goes to the document, finds the id "newAcctNum" and shows the user the new bal and new pin
    //returns the menu buttons 
    document.getElementById("newAcctNum").innerHTML += `New account balance: $${newAccount.balance} New pin: ${newAccount.pin} <br>`;
    return displayMenu(); 
}


 //CHANGE PIN function    
function changePin() {
    //goes to the dom, gets the element w/ id "changePinInput" and converts that value to an integer, then it's assigned to var pin
    let pin = parseInt(document.getElementById("changePinInput").value); 
        //for loop iterates over the bankAccount array 
        for (let i = 0; i < bankAccount.length; i++) {
            //if the key, pin, inside of the object of the bankAccount array is not equal to the pin variable, return display menu  
            if( bankAccount[i].pin != pin  ) {
            return displayMenu ();  
            }   
        }

        //create a bank account
        // { pin : 1234, balance : 100.00 } 
        let newAccount = new Account(pin); 
        
        //adds new account (pin) to the array, at least it should...it's not working  
        bankAccount.push(newAccount); 
        //go to the innerHTML where id "newPin" is listed and put tell user pin has been changed, show new pin number 
        document.getElementById("newPin").innerHTML += `Your pin number has successfully been changed to ${newAccount.pin}. <br>`;
        displayMenu();  
}








