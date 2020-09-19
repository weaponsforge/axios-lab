const heroes = require('./mock_data/heroes.json')
const skills = require('./mock_data/skills.json')

class Hero {
  constructor() {}

  // Return all heroes
  static list (req, res, next) {
    res.status(200).send(heroes)
  }

  // Get a hero's information
  static get ({params: { name }} = rew, res, next) {
    let hero = null

    for (let i = 0; i < heroes.length; i += 1) {
      if (heroes[i].name === name) {
        hero = heroes[i]
        break
      }
    }

    if (hero) {
      res.status(200).send(hero)
    } else {
      throw new Error('Hero not found.')
    }
  }

  // Get a hero's skill information
  static skill ({params: { name }} = rew, res, next) {
    let skill = null

    for (let i = 0; i < skills.length; i += 1) {
      if (skills[i].name === name) {
        skill = skills[i]
        break
      }
    }

    if (skill) {
      res.status(200).send(skill)
    } else {
      throw new Error('Hero not found.')
    }
  }  
}

module.exports = Hero
