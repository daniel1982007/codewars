function solve(s) {
    const arr = s.split('')

    let rvs = 0
    if(arr[0] === ')') {
        arr[0] = '('
        rvs++
    }
    if(arr[arr.length-1] === '(') {
        arr[arr.length-1] = ')'
        rvs++
    }

    let count = 0
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === '(') {
            count++
        } else {
            count--
            if(count<0) {
                rvs++
                count = 1
            }
        }
    }

    if(count % 2 === 1) {
        return -1
    } else {
        return (count / 2) + rvs
    }   
}

console.log(solve("())((("))