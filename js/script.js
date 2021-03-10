"use strict";

//declare global vars here

var btnCalculate,btnCreate;
var divResult;

//wait for document load
window.addEventListener('load',function (){Initialize()});

function Initialize()
{
    BindElements();
    AddEventListeners();
}

function BindElements()
{
    divResult      = document.querySelector('#divResult');
    btnCalculate   = document.querySelector('#btnCalculate');
    btnCreate      = document.querySelector('#btnCreate');
}


function AddEventListeners()
{

}