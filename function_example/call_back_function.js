let sum = (a, b, callback) => {
    console.log('a + b =', a + b);
    callback(a, b);
  };
  
  let sub = (a, b, callback) => {
    console.log('a - b =', a - b);
    callback(a, b);
  };
  
  let divide = (a, b, callback) => {
    if (b !== 0) {
      console.log('a / b =', a / b);
    } else {
      console.log('Cannot divide by 0');
    }
    callback(a, b);
  };
  
  let mult = (a, b, callback) => {
    console.log('a * b =', a * b);
    callback(a, b);
  };
  
  // Call the chain
  sum(10, 4, (a, b) => {
    sub(a, b, (a, b) => {
      divide(a, b, (a, b) => {
        mult(a, b, () => {
          console.log('All operations done!');
        });
      });
    });
  });
  