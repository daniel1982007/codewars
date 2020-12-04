function dashatize(num) {
    const newNum = num.toString().replace('-','')   //ignore first '-'
    const numArr = newNum.split('')
    const dashArr = []
    
    for(el of numArr) {
        if(el % 2 == 1) {
            dashArr.push('-' + el + '-')
        } else {
            dashArr.push(el)
        }
    }

    let str = dashArr.join('')

    if(str[0] == '-') {
        str = str.replace('-', '')
    }
    if(str[str.length-1] == '-') {
        str = str.substr(0, str.length-1)
    }

    const rgx = /--/g

    return str.replace(rgx, '-')
}

console.log(dashatize(-1))
console.log(dashatize(-28369))