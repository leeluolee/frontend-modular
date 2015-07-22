// global
var action = "add";

function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function compute(a, b) {
    switch (action) {
        case "add":
            return add(a, b)
        case "sub":
            return add(a, b)
    }
}


// object literal
var math = {
    add: function add(a, b) {
        return a + b
    },
    mul: function mul(a, b) {
        return a - b
    }
}

var caculator = {
    action: 'add',
    compute: function compute(a, b) {
        switch (this.action) {
            case "add":
                return math.add(a, b)
            case "sub":
                return math.add(a, b)
        }
    }
}


// LIFE-1
var caculator = (function() {
  var action = "add"
  // other logic
  return {
    compute: function() {
      switch (action) {
        case "add":
          return math.add(a, b)
        case "sub":
          return math.add(a, b)
      }
    }
  }
})()

// LIFE-injected
var caculator = (function( m ) {
  var action = "add"
  // other logic
  return {
    compute: function() {
      switch (action) {
        case "add":
          return m.add(a, b)
        case "sub":
          return m.sub(a, b)
      }
    }
  }
})( math )


// LIFE- exposure
var caculator = (function( m ) {
  var action = "add"
  function compute(){
    switch ( action ) {
      case "add":
        return m.add(a, b)
      case "sub":
        return m.sub(a, b)
    }
  }
  function switchAction(){/**/}

  return {
    compute: compute, 
    switchAction: switchAction
  }
})( math )