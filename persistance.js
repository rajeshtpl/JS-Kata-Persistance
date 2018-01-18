
function persistance(inputNumber){
    let counter = 0;
    while(inputNumber.toString().length > 1){
        counter ++
        let b = _split(inputNumber)
        // console.log(b);
        inputNumber = _multiplyDigits(b)        
    }
    return counter
}
    
    function _split(input){
        return input.toString().split('')
                    .map(Number)
    }
    
    function _multiplyDigits(input){       
        return input.reduce(function(product,element){
                return product * element 
        },1)
    }

   export {persistance,_split,_multiplyDigits}

