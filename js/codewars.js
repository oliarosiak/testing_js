/** Task 1 */
{
  function divisors(integer) {
    let result = [];
    let message;    
    for (let i = 2; i < integer; i += 1) {
      if(integer % i === 0) {
        result.push(i);
      }    
    }  
    if (result.length === 0) {
      return message = `${integer} is prime`;
    }
    return result;    
  };
  console.log('Task 1:', '/ 12:', divisors(12), '/ 13:',  divisors(13));
}

/** Task 2 */