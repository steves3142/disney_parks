import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ParkDetail = () => {
  const [parkId, setParkId] = useState('')
  const [park, setpark] = useState('')

  let { id } = useParams()

  useEffect(() => {
    console.log(parkId)
    async function getPark() {
      console.log('helllo')
      await setParkId(id)
      const res = await axios.get(`/parks/details/${parkId}`)
      console.log(res.data)
      const park = await res.data.park
      await setpark(park)
    }
    getPark()
  }, [])

  console.log(park)

  return (
    <div className="park-main">
      <h1>{park.name}</h1>
      <div className="ride-box">
        <div className="ride-info">
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
        serviceAnimalRelief areas:
        {park.serviceAnimalRelief.map((area) => (
          <p>{area}, </p>
        ))}
      </h4>
    </div>
  )
}

export default ParkDetail
