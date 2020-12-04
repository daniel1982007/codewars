function songDecoder(song) {
    const trimedSong = song.trim()
    const rgx = /(WUB)/g

    let str = trimedSong.replace(rgx, ' ').trim()
    
    let i = 1
    let count = 0
    
    while(i<str.length) {//i===1
        if(str[i] === ' ') {
            count++  
        } else {
            count = 0
        }

        if(count > 1) {
            //str = str.replace(str[i], '') replace function first parameter is search value, second parameter is use what to replace it.
            str = str.substr(0, i) + '' + str.substr(i+1)
            count = 1
            i--
        }

        i++
    }

    return str

}

console.log(songDecoder('AWUBBWUBC'))
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
console.log(songDecoder("JKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWV"))
