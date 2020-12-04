function solve(p) {
    //You will be given a prime number p and your task is to find the smallest positive
    //integer n such that p’s divisibility testing is n-sum or n-altsum.

//     let k = 2
//     let n

//     outer_loop:
//     while(true) {
//         let number = Math.pow(p, k) //??? what is the number?
//         //check n-sum and n-altsum
//         let str = number.toString()
//         let arr = [...str].reverse()//
//         let reversedstr = arr.join('')
        
//         //n-sum starts from 1
//         for(let i = 1; i<=reversedstr.length; i++) {
//             let rgx = new RegExp('[\\d]{' + i + '}', 'g')
//             let new_arr = reversedstr.match(rgx).map(x => x.split('').reverse().join(''))

//             if(reversedstr.length % i != 0) {
//                 new_arr.push(reversedstr.substr(new_arr.length * i))
//             }
            
//             let sum = new_arr.map(x => Number(x)).reduce((x, y) => x + y)
//             let altsum = new_arr.map(x => Number(x)).reduce((x, y, z) => z % 2 == 0 ? x + y : x - y)

//             if(sum % p == 0 || altsum % p == 0) {
//                 n = i
//                 break outer_loop
//             }
//         }
//         k++    
//     }

//     return `${n}-sum`

    
    const num = p * 12345
    const rev_numstr = String(num).split('').reverse().join('')
    
    let n
    let i = 1
    while(true) {
        let rgx = new RegExp('[\\d]{' + i + '}', 'g')
        let m_strarr = rev_numstr.match(rgx)
        if(rev_numstr.length % i !== 0) {
            m_strarr.push(rev_numstr.substr(m_strarr.length * i))
        }
        //revser again to children arr
        let str_arr = m_strarr.map(childstr => childstr.split('').reverse().join(''))
        let num_arr = str_arr.map(childstr => Number(childstr))

        let sum = num_arr.reduce((x, y) => x + y)
        let altsum = num_arr.reduce((x, y, z) => z % 2 == 0 ? x + y : x - y)

        if(sum % p == 0) {
            n = i
            return `${n}-sum`
            break
        }
        if(altsum % p == 0) {
            n = i
            return `${n}-altsum`
            break
        }
        i++
    }
}



console.log(solve(3))
console.log(solve(7))
console.log(solve(11))
console.log(solve(13))
console.log(solve(37))
console.log(solve(47))
console.log(solve(73))
console.log(solve(239))
console.log(solve(376049))
console.log(solve(999883))