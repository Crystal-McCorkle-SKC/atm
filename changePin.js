"use strict";

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

//bank account 
let bankAccount = [];
///add the below in? 
let currentAccount;

function Account(pin){
	this.pin = pin;
    this.balance = 0;
    
    //add a withrdraw method
    //add a get balance method etc. 
    }
    
function changePin(){
	let pin = parseInt(document.getElementById("pinput").value); 
    for(let i=0; i < bankAccount.length; i++){
      if( bankAccount[i].pin != pin  ){
          //alert("This account already exists!");
          //window.open("atm_menu.html"); 
          //update the page for menu options 
          return; 
          }   
      }
  //create a bank account
  // { pin : 1234, balance : 100.00 } 
  let newAccount = new Account(pin); 
                     
  bankAccount.push(newAccount); 

  //document.getElementById("account").innerHTML += "New account balance: $" +  newAccount.balance + "  New pin: " + newAccount.pin + "<br>";
  document.getElementById("account").innerHTML += `Your pin number has successfully been changed to ${newAccount.pin}. <br>`;

  return; 
}
