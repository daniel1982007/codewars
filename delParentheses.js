function removeParentheses(str) {
    let splToArr = str.split('')
    let newArr = []

    let indexFirstLp = splToArr.indexOf('(')
    let indexRp
    let indexLp
    let countIndexL = 1
    let countIndexR = 0

    const rgx = /[\w\s]/i
    
    for(let i = 0; i<indexFirstLp; i++) {
        if(rgx.test(splToArr[i])) {
            newArr.push(splToArr[i])
        }
    }

    for(let j = indexFirstLp+1; j<splToArr.length; j++) {
        if(splToArr[j] == '(') {
            indexLp = j
            countIndexL++
        }
        if(splToArr[j] == ')') {
            indexRp = j
            countIndexR++
        }
        if(indexLp > indexRp && countIndexL - countIndexR === 1) {
            //newArr.push(splToArr.slice(indexRp+1, indexLp).flat())
            let innerArr = splToArr.slice(indexRp+1, indexLp)
            for(el of innerArr) {
                if(rgx.test(el)) {
                    newArr.push(el)
                }
            }
            indexLp = undefined
            indexRp = undefined
        }
    }

    for(let k = indexRp+1; k<splToArr.length; k++) {
        if(rgx.test(splToArr[k])) {
            newArr.push(splToArr[k])
        }
    }


    return newArr.join('')
}

console.log(removeParentheses('(first group)1 (second group)1 (third group)'))
console.log(removeParentheses("a(b(c))"))
console.log(removeParentheses('111'))
console.log(removeParentheses("(first group) (second group) (third (group)  )"))
console.log(removeParentheses("(first group) -,1m  n (second group) 2 = q w(third (group) 1(12) 1)"))