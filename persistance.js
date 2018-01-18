
function persistance(inputNumber,counter = 0){
    
    if (inputNumber.toString().length == 1){
        return counter
    }else{
        counter ++
        let result = _split(inputNumber).reduce(multiValue,1)  
        return persistance(result,counter)
    }
}
    var multiValue = (x,y)=>x*y    

    function _split(input){
        return input.toString().split('')
                    .map(Number)
    }

   export {persistance,_split}

