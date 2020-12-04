function sockMerchant(n, ar) {
    const new_ar = ar.join('').split(' ').map(x => Number(x))
    const sock_set = new Set(new_ar)
    const color_count = sock_set.size
    const color_pair = []
    for(const key of sock_set) {
        let len = new_ar.filter(el => el === key).length
        if(len % 2 === 0) {
            color_pair.push(len / 2)
        } else {
            color_pair.push((len -1) / 2)
        }  
    }
    console.log(color_pair.reduce((x, y) => x + y))

}

sockMerchant(10, ['1 1 3 5 5 6 1'])