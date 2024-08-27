const express = require('express')
const { myPokemonRouter } = require('./my_pokemon')

const appRouter = express.Router()

appRouter.get('/', (req, res) => {
  res.json({
    status: 'ok',
  })
})

appRouter.use('/my-pokemons', myPokemonRouter)

module.exports = { appRouter }
