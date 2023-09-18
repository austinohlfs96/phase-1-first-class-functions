const receivesAFunction = (callback) => {
return callback();
}

function customFunction(name) {
  console.log(`Hello, ${name}!`);
}

function returnsANamedFunction(func = customFunction) {
  return func; 
}

const returnsAnAnonymousFunction = () => {
return function() {
  console.log('passed');
}
}


