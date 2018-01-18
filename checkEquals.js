

// const cityname ='desmoines'
// var checkEquals = input => input === cityname

// export {
//     checkEquals
// }




function persistance(number){
    var arrayDigits = number.toString().split('')
    console.log(arrayDigits)
    console.log(arrayDigits.length)
    if(arrayDigits.length == 1){
        console.log('digit length is 1')
    }else{
      var multiplyValue = arrayDigits.reduce(function(product,element){
        console.log(product)  
        return parseInt(product) * parseInt(element)
      },1)
      console.log(multiplyValue)
      }
    }
    
    persistance(66)
    
    
    
    
    
    
