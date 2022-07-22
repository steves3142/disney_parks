import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const arr = [1, 2, 3, 4, 5, 6]

const Home = () => {
  const [parks, setParks] = useState([])

  let navigate = useNavigate()

  // useEffect(async () => {
  //   await axios.get('/parks').then((res) => {
  //     console.log(res.data)
  //     setParks(res.data)
  //   })
  // }, [])

  useEffect(() => {
    console.log('helllo')
    async function getParks() {
      console.log('helllo')
      const res = await axios.get(`/parks`)
      console.log(res)
      setParks(res.data.parks)
    }
    getParks()
  }, [])

  const findPark = (park) => {
    navigate(`/parks/details/${park._id}`)
  }

  return (
    <div className="home">
      {/* <h1 className="main-h1">WALT DISNEY WORLD</h1> */}
      <div className="theme-box">
        {parks.map((park, i) => (
          <div className="theme-park" key={i} onClick={() => findPark(park)}>
            <h1>{park.name}</h1>
            <img src={park.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
