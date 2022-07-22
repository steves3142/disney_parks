import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const arr = [...Array(15)]

const Rides = () => {
  const [rides, setRides] = useState([])
  const [parkId, setParkId] = useState('')
  const [park, setpark] = useState('')

  let navigate = useNavigate()

  const findPark = (park) => {
    navigate(`/parks/details/${park._id}`)
  }

  return (
    <main>
      <h1>Rides</h1>
      <div className="ride-main">
        {arr.map((ride) => (
          <div className="ride">
            <img
              className="rides-img"
              src="https://ziggyknowsdisney.com/wp-content/uploads/2021/04/best-disney-world-roller-coasters-1-800x533.jpg"
              alt=""
            ></img>
            <p>ride's name</p>
            <button className="ride-btn" onClick={() => findPark(park)}>
              Park
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Rides
