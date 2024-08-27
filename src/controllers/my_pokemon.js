const { sanitizeRequest } = require('../helpers/sanitize_request')
const { MyPokemonService } = require('../services/my_pokemon')
const { createMyPokemonDto, renameMyPokemonDto } = require('./my_pokemon.dto')

class MyPokemonController {
  static async catchPokemon(req, res) {
    const { id } = req.params
    const result = await MyPokemonService.catchPokemon(Number(id))

    return res.status(200).json(result)
  }

  static async createMyPokemon(req, res) {
    const { body } = req
    await sanitizeRequest(createMyPokemonDto, body)
    const result = await MyPokemonService.createMyPokemon(body)

    return res.status(201).json(result)
  }

  static async findAll(req, res) {
    const result = await MyPokemonService.findAll()

    return res.status(200).json(result)
  }

  static async findById(req, res) {
    const { id } = req.params

    const result = await MyPokemonService.findById(id)

    return res.status(200).json(result)
  }

  static async renameMyPokemon(req, res) {
    const { params, body } = req
    const { id } = params
    await sanitizeRequest(renameMyPokemonDto, body)

    const result = await MyPokemonService.renameMyPokemon(id, body)

    return res.status(200).json(result)
  }

  static async releaseMyPokemon(req, res) {
    const { id } = req.params

    const result = await MyPokemonService.releaseMyPokemon(id)

    return res.status(200).json(result)
  }
}

module.exports = { MyPokemonController }
