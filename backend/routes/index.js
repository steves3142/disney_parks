const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('this is root!')
})

router.get('/parks', controllers.getAllParks)

module.exports = router
