import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ParkDetail = () => {
  const [parkId, setParkId] = useState('')
  const [park, setpark] = useState('')

  //   let { id } = useParams()

  //   useEffect(async () => {
  //     await setParkId(id)
  //     axios.get(`/parks/${parkId}`).then((res) => {
  //       console.log(res.data)
  //       setPark(res.data)
  //     })
  //   }, [])

  return (
    <div className="park-main">
      <h1>park.name</h1>
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
      <p>Streets</p>
      <p>Quick restaurant</p>
      <p>Service related</p>
    </div>
  )
}

export default ParkDetail
