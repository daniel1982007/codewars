function loneliest(str) {
    const trimedStr = str.trim()
    const arr = []

    for(el of trimedStr) {
        if(el != ' ') {
            arr.push(el)
        }
    }
    
    const resultArr = []
    let countlf = 0
    let countrgt = 0

    let j = 1

    for(let i = 0; i<arr.length; i++) {
        while(j<trimedStr.length && trimedStr[j] == ' ') {  //*--**
            countrgt++   //2
            j++          //3
        }
        const total = countrgt + countlf
        resultArr.push(total)
        
        countlf = countrgt
        countrgt = 0
        j++
    }

    const max = resultArr.reduce((x, y) => x > y ? x : y)

    const maxIndexArr = []
    for(let k = 0; k<resultArr.length; k++) {
        if(resultArr[k] == max) {
            maxIndexArr.push(k)
        }
    }

    return maxIndexArr.map(x => arr[x])

}

//'ab c   d  e' [a,b,c,d,e] => [0,1,4,5,2] => [3]
//'a    b c  d   e'

console.log(loneliest('ab c'))