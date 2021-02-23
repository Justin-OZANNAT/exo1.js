

function add(number){
    console.log('value of "number": ' + number)
    
    const numbers = number.split(',');
    console.log('value of "numbers": ', numbers)

    if (number === ''){
        return 0;
    } else {
        if (numbers.length > 1){
            const numberReady = [];
            let addResult = 0;
            for (let i = 0; i < numbers.length; i++) {
                numberReady.push(parseInt(numbers[i], 10)); 
                addResult = addResult + numberReady[i];               
            }
            return addResult;
        } else {
            return(number);
        }
    } 
}

const res = add('1.1,1.2');

console.log('result: ' +  res);