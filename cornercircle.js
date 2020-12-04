function cornerCircle(r) {
    const small_r = (Math.sqrt(2) - 1) * r / (Math.sqrt(2) + 1)
    return Math.round(small_r * 100) / 100
    
}