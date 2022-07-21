import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const arr = [1, 2, 3, 4, 5, 6]

const Home = () => {
  const [parks, setParks] = useState([])

  let navigate = useNavigate()

  // useEffect(() => {
  //   axios.get('/parks').then((res) => {
  //     console.log(res.data)
  //     setParks(res.data)
  //   })
  // }, [])

  const findPark = (park) => {
    navigate(`/parks/details/:parkId`)
  }
  return (
    <div className="home">
      {/* <h1 className="main-h1">WALT DISNEY WORLD</h1> */}
      <div className="theme-box">
        {arr.map((park) => (
          <div className="theme-park" key={park} onClick={() => findPark(park)}>
            <h1>type of theme park</h1>
            <img src="" alt="" />
            <h1>element</h1>
            <h2>description</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
