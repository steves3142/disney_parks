const { Park } = require('../models')

const { Ride } = require('../models')

const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find({})
    console.log(parks)
    return res.json({ parks })
  } catch (e) {
    return res.send(e.message)
  }
}

const getparkById = async (req, res) => {
  try {
    const { id } = req.params
    const park = await Park.findById(id)
    if (park) {
      return res.json({ park })
    } else {
      return res.send(`this id is not exiting`)
    }
  } catch (e) {
    return res.send(e.message)
  }
}
const getparkByName = async (req, res) => {
  try {
    // const { name } = req.params

    const name1 = req.params.name.replace('&', ' ')
    console.log(name1)
    const park = await Park.findOne({ name: name1 })
    if (park) {
      return res.json({ park })
    } else {
      return res.send(`this id is not exiting`)
    }
  } catch (e) {
    return res.send(e.message)
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    console.log(rides)
    return res.json({ rides })
  } catch (e) {
    return res.send(e.message)
  }
}
const getrideByName = async (req, res) => {
  try {
    const { name } = req.params
    console.log(name)
    const name1 = name.replace('&', ' ')
    const ride = await Ride.findOne({ name: name1 })
    if (ride) {
      return res.json({ ride })
    } else {
      return res.send(`this id is not exiting`)
    }
  } catch (e) {
    return res.send(e.message)
  }
}

module.exports = {
  getAllParks,
  getAllRides,
  getparkById,
  getrideByName,
  getparkByName
}
