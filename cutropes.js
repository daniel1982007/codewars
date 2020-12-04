function cutTheRopes(a) {
    //1, find the shortest rope, and count how many of them
    //2, return length-count
    const originalLen = a.length
    let arr = []

    while(a.length > 1) {
        const shortestNum = a.reduce((x, y) => x < y ? x : y)
        const lenShortest = a.filter(x => x == shortestNum).length
        const newLength = a.length - lenShortest
        //after cut operation, length of array
        if(newLength == 0) {
            break
        }
        arr.push(newLength)
        a = a.map(x => x - shortestNum)
        a = a.filter(x => x != 0)
        
    }

    arr.unshift(originalLen)
    //arr[0] = originalLen

    return arr

}

console.log(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]))
console.log(cutTheRopes([3, 3, 2, 9, 7]))
console.log(cutTheRopes([13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056]))