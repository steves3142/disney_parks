import logo from './logo.svg'
import './App.css'
import React from 'react'
import Header from './components/Header.js'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import ParkDetail from './components/ParkDetails'
import Rides from './pages/Rides'
import { useEffect, useState } from 'react'

function App() {
  // useEffect(() => {
  //   console.log('helllo')
  //   async function getParks() {
  //     console.log('helllo')
  //     // const res = await axios.get(`/parks`)
  //     console.log(res)
  //     // setParks(res.data.results)
  //   }
  //   getParks()
  // }, [])

  console.log('hello')

  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rides" element={<Rides />} />
          <Route path="/parks/details/:parkId" element={<ParkDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
