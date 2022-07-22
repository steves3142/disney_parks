import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const arr = [...Array(15)]

const Rides = () => {
  const [rides, setRides] = useState([])
  const [parkId, setParkId] = useState('')
  const [park, setpark] = useState('')
  const [newParkID, setnewParkID] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    console.log('helllo')
    async function getRides() {
      console.log('helllo')
      const res = await axios.get(`/rides`)
      console.log(res)
      setRides(res.data.rides)
    }
    getRides()
  }, [])

  const findPark = async (ride) => {
    let res = await axios.get(`/parks/${ride}`)
    console.log(res.data.park)
    let parkID = await res.data.park._id
    console.log(parkID)
    setnewParkID(parkID)
    navigate(`/parks/details/${parkID}`)
    setnewParkID('')
  }

  return (
    <main>
      <h1>Rides</h1>
      <div className="ride-main">
        {rides.map((ride) => (
          <div className="ride">
            <img className="rides-img" src={ride.image} alt=""></img>
            <p>{ride.name}</p>
            <button className="ride-btn" onClick={() => findPark(ride.park)}>
              {ride.park}
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Rides
