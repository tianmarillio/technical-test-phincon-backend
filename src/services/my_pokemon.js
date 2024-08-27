const { GeneralError } = require('../error/error_definition')
const { MyPokemonRepository } = require('../repositories/my_pokemon')
const { coinToss } = require('../utils/coin_toss')
const { getFibonacci } = require('../utils/get_fibonacci')
const { getRandomInteger } = require('../utils/get_random_integer')
const { isPrime } = require('../utils/is_prime')

class MyPokemonService {
  static async catchPokemon(id) {
    if (!id) {
      throw GeneralError.badRequest()
    }

    const isCatched = coinToss()

    return {
      pokemonId: id,
      isCatched,
    }
  }

  static async createMyPokemon(catchPokemonDto) {
    const newMyPokemonId = await MyPokemonRepository.create({
      ...catchPokemonDto,
      nickname: catchPokemonDto.nickname ?? '',
    })

    return {
      id: newMyPokemonId,
    }
  }
  static async findAll() {
    const myPokemons = await MyPokemonRepository.findAll()

    return myPokemons
  }

  static async findById(id) {
    const myPokemon = await MyPokemonRepository.findById(id)

    if (!myPokemon) {
      throw GeneralError.notFound()
    }

    return myPokemon
  }

  static async renameMyPokemon(id, renamePokemonDto) {
    const myPokemon = await MyPokemonRepository.findById(id)

    if (!myPokemon) {
      throw GeneralError.notFound()
    }

    const renameCountNext = myPokemon.renameCount + 1

    const nicknameSuffix =
      renameCountNext > 0 ? `-${getFibonacci(renameCountNext - 1)}` : ''
    const updatedNickname = `${renamePokemonDto.nickname}${nicknameSuffix}`

    await MyPokemonRepository.update(id, {
      nickname: updatedNickname,
      renameCount: myPokemon.renameCount + 1,
    })

    return {
      id: Number(id),
      nickname: updatedNickname,
    }
  }
  static async releaseMyPokemon(id) {
    const myPokemon = await MyPokemonRepository.findById(id)

    if (!myPokemon) {
      throw GeneralError.notFound()
    }

    const randomInteger = getRandomInteger(100)
    const isReleased = isPrime(randomInteger)

    if (isReleased) {
      await MyPokemonRepository.delete(id)
    }

    return {
      id: Number(id),
      randomInteger,
      isPrimeNumber: isReleased,
      isReleased,
    }
  }
}

module.exports = { MyPokemonService }
