class UndergroundSystem {
    // keep track of travel times between stations
    // keep track of customers
    
    constructor() {
        this.customer = {}
        // id: [startStation, startTime]
        this.avgs = {}
        // startStation-endStation: [totalTime, numTrips]
    }
    
    checkIn(id, stationName, t) {
        this.customer[id] = [ stationName, t ]
    }
    
    checkOut(id, stationName, t) {
        const [ startStation, startTime ] = this.customer[id]
        const [ endStation, endTime ] = [ stationName, t ]
        
        const totalTime = endTime - startTime
        const key = `${startStation}-${endStation}`
        
        if (this.avgs[key]) {
            const [ time, num ] = this.avgs[key]
            this.avgs[key] = [ totalTime+time, num+1 ]
        } else {
            let numTrips = 1
            this.avgs[key] = [ totalTime, numTrips ]
        }
    }
    
    getAverageTime(startStation, endStation) {
        const key = `${startStation}-${endStation}`
        const [ totalTime, numTrips] = this.avgs[key]
        return totalTime / numTrips
    }
}



// class UndergroundSystem {
//     constructor() {
//         this.customer = {}
//         // { id: [startStation, startTime] }

//         this.avgs = {}
//         // { startStation-endStation: [ totalTime, numTrips ] }
//     }

//     checkIn(id, stationName, t) {
//         this.customer[id] = [ stationName, t ]
//     }

//     // get start info from this.customer[id]
//     // add to avgs{}
//     checkOut(id, stationName, t) {
//         const [ startStation, startTime ] = this.customer[id]
//         const [ endStation, endTime ] = [ stationName, t ]

//         const key = `${startStation}-${endStation}`
//         const totalTime = endTime - startTime

//         // check if we have this route in avgs
//         if (this.avgs[key]) {
//             const [ time, numTrips ] = this.avgs[key]
//             this.avgs[key] = [ totalTime+time, numTrips+1]

//         } else { // if not, it's the first trip
//             const numTrips = 1
//             this.avgs[key] = [ totalTime, numTrips ]
//         }
//     }

//     // avg: { startS-endS: [totalTime, numTrips]}
//     getAverageTime(startStation, endStation) {
//         const [ totalTime, numTrips ] = this.avgs[`${startStation}-${endStation}`]
//         return totalTime / numTrips
//     }
// }