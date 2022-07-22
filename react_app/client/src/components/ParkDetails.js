import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { listenerCount } from '../../../../backend/models/park'

const ParkDetail = () => {
  const [parkId, setParkId] = useState('')
  const [park, setpark] = useState('')
  const [areas, setAreas] = useState([])
  const [ridesName, setridesName] = useState([])
  const [rides, setrides] = useState([])

  let { id } = useParams()

  console.log(id)

  useEffect(() => {
    async function getPark() {
      try {
        await setParkId(id)

        const res = await axios.get(`/parks/details/${parkId}`)
        const park1 = await res.data.park
        await setpark(park1)
        console.log(park)
        await setAreas(park1.serviceAnimalRelief)
        await setridesName(park1.topRides)
        // console.log(ridesName)
      } catch (e) {
        console.log(e.message)
      }
    }

    getPark()
  }, [parkId])

  useEffect(() => {
    async function getride() {
      try {
        const ridesdetail = async (ridesName) => {
          for (let i = 0; i < ridesName.length; i++) {
            let res = await axios.get(
              `/rides/details/${ridesName[0].replace(' ', '&')}`
            )
            let rides1 = [...rides]
            await rides1.push(res.data)
            await setrides(rides1)
            console.log(rides)
          }
        }
      } catch (e) {
        console.log(e.message)
      }
    }

    getride()
  }, [ridesName])

  // ridesIDs.forEach((ride) => {
  //   let res = axios.get(`/rides/details/${ride}`)
  //   let rides = [...ridesIDs]
  //   rides.push(res.data)
  //   setrides(rides)
  // })

  return (
    <div className="park-main">
      <h1>{park.name}</h1>
      <div className="ride-box">
        <div className="ride-info">
          {rides.map((area, i) => (
            <p>{area.name} </p>
          ))}
          <a>Top</a>
          <img
            src="https://ziggyknowsdisney.com/wp-content/uploads/2021/04/best-disney-world-roller-coasters-1-800x533.jpg"
            alt=""
          />
          <p>ride's name</p>
        </div>
        <div className="ride-info">
          <a>2</a>
          <img
            src="https://ziggyknowsdisney.com/wp-content/uploads/2021/04/best-disney-world-roller-coasters-1-800x533.jpg"
            alt=""
          />
          <p>ride's name</p>
        </div>
        <div className="ride-info">
          <a>3</a>
          <img
            src="https://ziggyknowsdisney.com/wp-content/uploads/2021/04/best-disney-world-roller-coasters-1-800x533.jpg"
            alt=""
          />
          <p>ride's name</p>
        </div>
      </div>

      <h4>
        Date Open: <p>{park.dateOpened}</p>
      </h4>

      <h4>
        Description: <p>{park.description}</p>
      </h4>

      <h4>
        Top restaurant: <p>{park.topRestaurant}</p>
      </h4>
      <h4>
        Water Park: <p>{park.waterPark ? 'Yes' : 'No'}</p>
      </h4>
      <h4>
        ServiceAnimalRelief areas:
        {areas.map((area, i) => (
          <p>{area} </p>
        ))}
      </h4>
    </div>
  )
}

export default ParkDetail
