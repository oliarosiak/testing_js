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
{
  function DNAStrand(dna) {
    const array = dna.split('');
    let newArray = [];
 
    array.forEach(element => {
      if (element === 'A') {
        newArray.push('T');
      } else if (element === 'T') {
        newArray.push('A');
      } else if (element === 'G') {
        newArray.push('C');
      } else if (element === 'C') {
        newArray.push('G');
      }
    });  
    return newArray.join('');
  }

  console.log('Task 2:', '/ Початкова строка - "ATTGC":', DNAStrand("ATTGC"));
  console.log('Task 2:', '/ Початкова строка = "GTAT":', DNAStrand("GTAT"));
}