function mostFrequentDays(year) {
    const year_str = String(year)
    const startdateObj = new Date(year_str)
    let starttime = startdateObj.getTime()

    const enddateObj = new Date('1982 1 5')
    const endtime = enddateObj.getTime()

    const dayArr = [0, 0, 0, 0, 0, 0, 0]

    while(starttime < endtime) {
        let date = new Date(starttime)
        if(date.getDay() == 1) {
            dayArr[0]++
        }
        if(date.getDay() == 2) {
            dayArr[1]++
        }
        if(date.getDay() == 3) {
            dayArr[2]++
        }
        if(date.getDay() == 4) {
            dayArr[3]++
        }
        if(date.getDay() == 5) {
            dayArr[4]++
        }
        if(date.getDay() == 6) {
            dayArr[5]++
        }
        if(date.getDay() == 0) {
            dayArr[6]++
        }
        starttime += 86400000
    }

    const mostFavourateDay = dayArr.reduce((x, y) => x > y ? x : y)

    const mostFavourateDayArr = []
    for(let i = 0; i < dayArr.length; i++) {
        if(dayArr[i] == mostFavourateDay) {
            mostFavourateDayArr.push(i)
        }
    }

    return mostFavourateDayArr.map(day => {
        if(day == 0) {return 'Monday'}
        if(day == 1) {return 'Tuesday'}
        if(day == 2) {return 'Wednesday'}
        if(day == 3) {return 'Thursday'}
        if(day == 4) {return 'Friday'}
        if(day == 5) {return 'Saturday'}
        if(day == 6) {return 'Sunday'}
    })
}

console.log(mostFrequentDays(1982))