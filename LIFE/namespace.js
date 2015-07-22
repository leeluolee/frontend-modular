var namespace = (function(){
  var cache = {}
  function createModule(name, deps, definition){
    if(arguments.length === 1) return cache[name]
    deps = deps.map(function(dep){
      return namespace(dep)
    })
    cache[name] = definition.apply(null, deps)
    return cache[name]
  }
  return createModule;
})()


namespace('a', [], function(){
  return 1
})

namespace('b', ['a'], function(a){
  return a + 2
}) 

namespace('c', ['a', 'b'], function(a, b){
  return a + b // => 4
}) 