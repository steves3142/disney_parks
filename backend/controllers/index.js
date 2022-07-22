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

// const getAllRides = async (req, res) => {
//   try {
//     const rides = await Ride.find({})
//     console.log(rides)
//     return res.json({ rides })
//   } catch (e) {
//     return res.send(e.message)
//   }
// }

module.exports = {
  getAllParks,
  // getAllRides,
  getparkById
}
