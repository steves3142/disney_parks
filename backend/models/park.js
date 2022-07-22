const { Schema } = require('mongoose')

const Park = new Schema(
    {
        name: { type: String, required: true },
        dateOpened: { type: String, required: true },
        description: { type: String, required: true },
        sections: [{ type: String, required: false }], // array
        topRides: [{ type: String, required: true }], // array seeded from rides db
        topRestaurant: { type: String, required: true },
        waterPark: { type: Boolean, required: true }, // boolean
        serviceAnimalRelief: [{ type: String, required: true }], //array of relevant sections
        image: { type: String, required: true }
    }
)

module.exports = Park