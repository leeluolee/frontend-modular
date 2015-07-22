define(function( require, exports ){
  
  var math = require("./math");

  function Caculator ( container ){

      this.left = container.querySelector( ".j-left" );
      this.right = container.querySelector( ".j-right" );
      this.add = container.querySelector( ".j-add" );
      this.result = container.querySelector( ".j-result" );

      this.add.addEventListener("click", this.compute.bind( this) );
  }

  Caculator.prototype.compute  = function(){
       this.result.textContent = math.add( +this.left.value, +this.right.value )
  }

  exports.Caculator = Caculator;
})


// define( [ "./math" ], function( math ){

//   function Caculator ( container ){

//       this.left = container.querySelector( ".j-left" );
//       this.right = container.querySelector( ".j-right" );
//       this.add = container.querySelector( ".j-add" );
//       this.result = container.querySelector( ".j-result" );

//       // 略..
//   }

//   Caculator.prototype.compute  = function(){}

//   return {
//     Caculator: Caculator
//   }
// })


// define( ["regularjs", "text!path/to/foo.html", "css!path/to/style.css"], function(Regular, template){
//   // 通过text插件， template是通过ajax加载的纯文本
//   var ast = Regular.parse( template )
//   // 略...
// })

// namespace
var namespace = (function(){
  var cache = {}
  function createModule( name, deps, definition ){

    if( arguments.length === 1 ) return cache[name]

    deps = deps.map(function(depName){
      return ns( depName )
    })

    cache[name] = definition.apply(null, deps)

    return cache[name];

  }
  return createModule
})()


// namespace("math", [], function(){

//   function add(a, b){ return a + b }
//   function sub(a, b){ return a - b }

//   return {
//     add: add,
//     sub: sub
//  } 
// })

// namespace("caculator", ["math"], function( m ){

//   var action = "add"
//   function compute( a, b){
//     switch (action) {
//       case "add":
//           return m.add(a, b)
//       case "sub":
//           return m.add(a, b)
//     }

//   }
//   return {
//     compute: compute
//   }
// })

// namespace("caculator").compute(1, 2);



