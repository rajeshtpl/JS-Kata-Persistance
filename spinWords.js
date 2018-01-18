function spinWords(str){
    var arrWords = str.split(" ")   
    var result =[]
    for(let i = 0 ; i < arrWords.length ;i++)
    {
        if(arrWords[i].length >= 5)
        {
            var splitWord = arrWords[i].split('')
            var reverse = splitWord.reverse().join('')
            result.push(reverse)
        }
        else
        {
            result.push(arrWords[i])
        }
    }
    console.log(result.join(' '))
}

spinWords('Hey fellow warriors')