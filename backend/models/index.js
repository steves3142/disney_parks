const { model } = require('mongoose')
const ParkSchema = require('./park')
const RideSchema = require('./ride')

const Park = model('Park', ParkSchema)
const Ride = model('Ride', RideSchema)

module.exports = {
  Park,
  Ride
}