function digPow(n, p) {
    const numArr = n.toString().split('')
    const resultArr = []

    for(el of numArr) {
        resultArr.push(Math.pow(el, p))
        p++
    }

    const sum = resultArr.reduce((x, y) => x + y)

    if(!Number.isInteger(sum/n)) {
        return -1
    } else {
        return sum/n
    }

}