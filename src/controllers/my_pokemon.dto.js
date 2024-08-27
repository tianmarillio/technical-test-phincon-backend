const { string, number, object } = require('yup')

const createMyPokemonDto = object({
  pokemonId: number().required(),
  name: string().required(),
  imageUrl: string().required(),
  nickname: string(),
})

const renameMyPokemonDto = object({
  nickname: string(),
})

module.exports = { createMyPokemonDto, renameMyPokemonDto }
