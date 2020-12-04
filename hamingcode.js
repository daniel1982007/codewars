function encode(text) {
    const bits = []//[120,118,322]
    for(let i = 0; i<text.length; i++) {
        bits.push(text.charCodeAt(i)) 
    }
    const str = bits.map(x => x.toString(2).length < 8 ? '0'.repeat(8 - x.toString(2).length) + x.toString(2) : null ).join('')//'1111000001110001001'

    let result_str = ''
    for(el of str) {
        result_str = result_str.concat(el.repeat(3))
    }

    return result_str
}

function decode(bits) {
    const rgx1 = /[\d]{3}/g
    const arr = bits.match(rgx1)
    const bit_arr = arr.map(x => x.split('').map(x => Number(x)).reduce((x, y) => x + y) >= 2 ? 1 : 0)

    const str = bit_arr.join('')
    const asc2_arr = str.match(/[\d]{8}/g).map(x => parseInt(x, 2))

    let res_str = ''
    for(el of asc2_arr) {
        res_str = res_str.concat(String.fromCharCode(el))
    }

    return res_str


}

console.log(encode("hey"))

console.log(decode("100111111000111001000010000111111000000111001111000111110110111000010111"))