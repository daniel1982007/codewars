function iqTest(nums) {
    const arr = nums.split(' ')
    let newArr = []
    let countZero = 0
    let countOne = 0

    for(let i = 0; i<arr.length; i++) {
        newArr.push(arr[i] % 2)
    }
    for(let j = 0; j<newArr.length; j++) {
        // 001
        // 010
        // 011
        // 100
        // 101
        // 110
        switch(newArr[j]) {
            case 0:
                countZero++
                if(countZero > 1 && countOne == 1) {
                    if(newArr[j-1] == 1) {
                        return j
                    }
                    if(newArr[j-2] == 1) {
                        return j-1
                    }
                }
                if(countOne > 1) {
                    return j+1
                }
                break
            case 1:
                countOne++
                if(countOne > 1 && countZero == 1) {
                    if(newArr[j-1] == 0) {
                        return j-1
                    }
                    if(newArr[j-2] == 0) {
                        return j
                    }
                }
                if(countZero > 1) {
                    return j+1
                }
                break
        }
    }
}