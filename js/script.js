"use strict";

//declare global vars here

var btnCalculate,btnCreate;

//wait for document load
window.addEventListener('load',function (){Initialize()});

function Initialize()
{
    divResult       = document.querySelector('#divResult');
    btnCalculate    = document.querySelector('#btnCalculate');
    btnCreate       = document.querySelector('#btnCreate');
}