function isValidWalk(walk) {
    if(walk.length != 10) {
        return false
    }
    //each element in walk should be different
    //let arr = []
    if(walk.every((x, y) => x === walk[y + 1] ? false : true)) { //how to deal with the last index of array, because last item is at edge, after it there is no any item, no comparation, would it throw any exception???
        //for(el of walk) {
            // if(el === 'n' || el === 'w') {
            //     count ++
            // } else {
            //     count --
            // }
        //     arr.push(el)
        // }
        const n_length = walk.filter(el => el === 'n').length
        const s_length = walk.filter(el => el === 's').length
        const w_length = walk.filter(el => el === 'w').length
        const e_length = walk.filter(el => el === 'e').length

        return (n_length === s_length) && (w_length === e_length) ? true : false
    }
    return false
}


console.log(isValidWalk(  [ 'n', 'n', 'n', 's', 's', 's', 'e', 'w', 'n', 's' ]   ))