const router = require('express').Router()
const Hero = require('./hero')

router.get('/', Hero.list)
router.get('/:name', Hero.get)
router.get('/skill/:name', Hero.skill)

module.exports = router