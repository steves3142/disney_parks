const { model } = require('mongoose')
const ParkSchema = require('./park')
const RideSchema = require('./ride')

const Park = model('User', ParkSchema)
const Ride = model('Task', RideSchema)

module.exports = {
  Park,
  Ride
}