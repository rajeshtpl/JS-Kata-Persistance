function onlyDuplicates(str) {
    var splitarr =_split(str)
    var result=''
    splitarr.forEach(element => {        
        console.log(str.search(element.toString))
        if (str.search(element.toString) > 1){
            result = remove(splitarr,element)
            console.log(result.toString())
        }
    });
  }


function _split(input){
    return input.split('')
                .map(String)
}

function remove(array,elemet){
  return array.filter(e => e !== elemet)
}

  console.log(onlyDuplicates('bcdabc'))