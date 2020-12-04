function solve(arr) {
    //Math question combination algorithm using Cnm
    //map to a no repeat element in each subarr
    //use Set object to solve it, in Set object no repeat
    const resultarrs = arr.map(subarr => subarr.sort().filter((el, index) => el != subarr[index + 1]))
    const lengtharr = resultarrs.map(arr => arr.length)
    
    return lengtharr.reduce((x, y) => x * y)

}