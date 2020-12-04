function loneliest(str) {
    const trimedStr = str.trim()
    const arr = []//use shift pop or push to array

    for(el of trimedStr) {
        if(el != ' ') {
            arr.push(el)
        }
    }

    //find indexes of each item which is not a space
    let indexArr = []

    for(let i = 0; i<trimedStrArr.length; i++) {
        if(trimedStrArr[i] != ' ') {
            indexArr.push(i)
        }
    }
    //find gaps of each item (sum of item's both sides)
    // for(let j = 0; j<indexArr.length; j++) {
    //     if(j == 0) {
    //         gapArr.push(indexArr[1])
    //     }
    //     if(0 < j < indexArr.length -1) {
    //         gapArr.push(Math.abs(indexArr[j]-indexArr[j-1]) + Math.abs(indexArr[j]-indexArr[j+1]))
    //     }
    //     if(j == indexArr.length-1) {
    //         gapArr.push(indexArr[j] - indexArr[j-1])
    //     }
    // }
    let gapFirstElArr = Array.of(indexArr[1] - indexArr[0])
    let gapLastElArr = Array.of(indexArr[indexArr.length-1] - indexArr[indexArr.length-2])
    let gapArr = []
    let max
    let greatestGapElIndex =[]
    let indexArrMaxValue = []
    let resultArr = []

    if(indexArr.length === 1) {
        return new Array(trimedStrArr[0])
    }

    if(indexArr.length === 2) {
        return new Array(trimedStrArr[0], trimedStrArr[1])
    }

    if(indexArr.length > 2) {
        if(indexArr.every((x, y) => x - y === 0)) {
            return indexArr.map(x => trimedStrArr[x])
        } else {
            gapArr = indexArr.map((x, y) => (x - indexArr[y-1]) + (indexArr[y+1] - x))
            gapArr[0] = gapFirstElArr[0]
            gapArr[gapArr.length-1] = gapLastElArr[0]
            //find the max in array gapArr
            max = gapArr.reduce((x , y) => x > y ? x : y)
            //find indexes of max
            for(let j = 0; j<gapArr.length; j++) {
                if(gapArr[j] == max) {
                    greatestGapElIndex.push(j)
                }
            }
            //find value of indexArr in accordance with max gapEl  indexes in gapArr
            indexArrMaxValue = greatestGapElIndex.map(x => indexArr[x])
            resultArr = indexArrMaxValue.map(x => trimedStrArr[x])

            return resultArr

        }
    }
}

console.log(loneliest('abc d   ef  g   h i j      '))
