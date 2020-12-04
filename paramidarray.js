function pyramid(n) {
    //length of arr is value of passed n
    //subarr length count++
    const arr = Array(n)
    const ascendArr = arr.fill(1).map((x, y) => x + y)

    //[1,2,3,4]
    return ascendArr.map((x) => Array(x).fill(1))

    
}