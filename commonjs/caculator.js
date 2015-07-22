
var math = require("./math");

function Caculator (container){

  this.left = container.querySelector( ".j-left" );
  this.right = container.querySelector( ".j-right" );
  this.add = container.querySelector( ".j-add" );
  this.result = container.querySelector( ".j-result" );

  this.add.addEventListener("click", 
    this.compute.bind( this) );
}

Caculator.prototype.compute  = function(){
  this.result.textContent = math.add( +this.left.value, +this.right.value )
}

exports.Caculator = Caculator;
