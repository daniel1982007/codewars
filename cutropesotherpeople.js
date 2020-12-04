const cutTheRopes = a => {
    let test = []  
    const loop = (a) => {
      test = [...test, a.length]
      const s = Math.min(...a)
      const b = a.map(v => v - s).filter(v => v > 0)
      return b.length > 0 ? loop(b) : test
    }
    
    return loop(a)
    
}

console.log(cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]))