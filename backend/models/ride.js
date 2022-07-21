const { Schema } = require('mongoose')

const Ride = new Schema(
    {
        name: { type: String, required: true },
        park: { type: String, required: true },
        section: { type: String, required: false },
        rank: { type: Number, required: true }, // ranked 1-3 out of top 3 per park
        heightRequirement: { type: String, required: true },
        waterRide: { type: Boolean, required: true }, // boolean
        wheelchairAccessible: { type: Boolean, required: true }, // boolean
        wheelchairTransfer: { type: Boolean, required: true }, // boolean, usually false if wheelchairAccessible = true
        image: { type: String, required: true }
    }
)

module.exports = Ride