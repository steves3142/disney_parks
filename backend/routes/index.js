const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('this is root!')
})

router.get('/parks', controllers.getAllParks)
router.get('/parks/details/:id', controllers.getparkById)
router.get('/rides', controllers.getAllRides)
router.get('/rides/details/:name', controllers.getrideByName)
module.exports = router
