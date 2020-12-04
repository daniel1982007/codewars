function appendAndDelete(s, t, k) {
    // let deletion
    // let add
    // const count = s.length > t.length ? t.length : s.length
    // for(let i=0; i<count; i++) {
    //     if(s[i] === t[i]) {
    //         continue
    //     } else {
    //         deletion = s.length - i
    //         add = t.length - i
    //         break
    //     }
    // }
    // if(s === t.slice(0, count) || t === s.slice(0, count)) {
    //     const delete_add = s.length > t.length ? s.length - count : t.length - count
    //     return delete_add > k ? 'No' : 'Yes' 
        
    // }
    // return deletion + add > k ? 'No' : 'Yes'

    let deletion
    let add
    const count = s.length > t.length ? t.length : s.length
    for(let i=0; i<count; i++) {
        if(s[i] === t[i]) {
            continue
        } else {
            deletion = s.length - i
            add = t.length - i
            break
        }
    }
    if(s === t.slice(0, count) || t === s.slice(0, count)) {
        const delete_add = s.length > t.length ? s.length - count : t.length - count
        if(delete_add === k) { return 'Yes' }
        if(delete_add > k) { return 'No' }
        if(delete_add < k) { 
            //2 senarios(deletion or append)
            let del
            let append
            s.length > t.length ? del = s.length - t.length : append = t.length - s.length
            if(del || del === 0) {return (k - del) >= 2*t.length || (k - del) % 2 === 0 ? 'Yes' : 'No'}
            if(append || append === 0) {return (k - append) >= 2*s.length || (k - append) % 2 === 0 ? 'Yes' : 'No'}
            //return (k - delete_add) >= 2*t.length || (k - delete_add) % 2 === 0 ? 'Yes' : 'No' 
        }
    } else {
        if(deletion + add === k) { return 'Yes' }
        if(deletion + add > k) { return 'No'}
        if(deletion + add < k) { return s.length + t.length > k ? 'No' : 'Yes' }
    }
}


console.log(appendAndDelete('aaaaaaaaaa','aaaaa',7))
console.log(appendAndDelete('qwerty', 'qwertyasdfgh', 19))