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
    //need to figure out how to allow negative numbers, so can put them in red w/ a 
    //warning message{
      //pin: 5489,
      //balance: -25.00 
    //},
  ];
  
  function deposit(){
      let pin = parseInt(document.getElementById("pinput").value); 
    for(let i=0; i < bankAccounts.length; i++){
      if( bankAccounts[i].balance >= 0 ){
          document.getElementById("account").innerHTML = `Your previous balance was: $${bankAccounts[i].balance} <br> 
          Your new balance is: $${bankAccounts[i].balance + pin}`;
          return; 
      }   
    }
  }

function withdrawal() {
    let pin = parseInt(document.getElementById("pinput").value); 
    for(let i=0; i < bankAccounts.length; i++){
      if( bankAccounts[i].balance >= 0 ){
          document.getElementById("account").innerHTML = `Your previous was: $${bankAccounts[i].balance} <br> 
          Your new balance is: $${bankAccounts[i].balance - pin}`;
          return; 
        }   
    }
}

