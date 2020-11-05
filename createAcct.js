"use strict";

function pathToCreateAcct () {
    window.open("createAcct.html", "_self");
}


//bank account 
let bankAccount = [];

function Account(pin){
	this.pin = pin;
    this.balance = 0;
    
    //add a withrdraw method
    //add a get balance method etc. 
    }
    
function createAcct(){
	let pin = parseInt(document.getElementById("pinput").value); 
    for(let i=0; i < bankAccount.length; i++){
      if( bankAccount[i].pin === pin  ){
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
  document.getElementById("account").innerHTML += `New account balance: $${newAccount.balance} New pin: ${newAccount.pin} <br>`;

  return; 
}
