function solution(str) {
    const len = str.length
    let arr = []

    if(len % 2 === 0) {
        for(let i = 0; i<=str.length/2 - 1; i++) {
            arr.push(str[i*2] + str[i*2 + 1])
        }
    } else {
        for(let i = 0; i<=(str.length-1)/2 - 1; i++) {
            arr.push(str[i*2] + str[i*2 + 1])
        }
        
        arr = arr.concat(str[str.length-1] + '_')
    }

    return arr
}

console.log(solution("abcdef"))
console.log(solution(""))