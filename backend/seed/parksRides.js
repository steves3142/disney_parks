const db = require('../db')
const Park = require('../models/park')
const Ride = require('../models/ride')

db.on('error', console.error.bind(console, 'mongoDB connection error:'))

const main = async () => {
    const rides = [
        {
            name: '',
            park: '',
            section: '',
            rank: (num), 
            description: '',
            heightRequirement: '',
            waterRide: true/false, 
            wheelchairAccessible: true/false, 
            wheelchairTransfer: true/false, 
            image: ''
        }
    ]

    parks.forEach(park => {
        let ride = rides.map((ride) => ride) // ??? trying to get at each individual ride within the function.
        const selectedRides = []
        const getSelectedRides = () => {
            if (ride.park === park.name){
                selectedRides.push(ride)
            }
        }
        getSelectedRides()
    });
    // working draft; if function does not populate rides within each park object, will insert parks manually.

    const parks = [
        {
            name: '',
            description: '',
            sections: ['', '', ''], 
            topRides: selectedRides.map((ride) => ride.name), // array seeded from rides db
            topRestaurant: '',
            waterPark: true/false, 
            serviceAnimalRelief: ['', '', ''], 
            image: ''
        }
    ]

    await Ride.insertMany(rides)
    console.log("created rides!")

    await Park.insertMany(parks)
    console.log("created parks!")
}

const run = async () => {
    await main()
    db.close()
}

run()