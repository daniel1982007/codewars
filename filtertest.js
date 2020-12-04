function filterTest(arr) {
    let newArr = arr.filter((x, y ) => x > y ? y : x)
    return newArr
}

console.log(filterTest([2,1,8,10]))