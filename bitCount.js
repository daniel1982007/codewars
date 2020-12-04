function countBits(n) {
    //1, converte number to bin and split to an array
    //2, count numbers of bits that are one
    let str = n.toString(2)
    let arr = [...str]
    let count = 0
    for(el of arr) {
        if(el == 1) {
            count += Number.parseInt(el)
        }
    }
    return count
}