const { MyPokemon } = require('../models');

class MyPokemonRepository {
  static async create(payload) {
    const newMyPokemon = await MyPokemon.create(payload);

    return newMyPokemon.id;
  }

  static async findAll() {
    const myPokemons = await MyPokemon.findAll({
      order: [['createdAt', 'desc']]
    });

    return myPokemons.map((e) => e?.toJSON());
  }

  static async findById(id) {
    const myPokemon = await MyPokemon.findOne({
      where: {
        id,
      },
    });

    return myPokemon?.toJSON() ?? null;
  }

  static async update(id, payload) {
    await MyPokemon.update(payload, {
      where: {
        id,
      },
    });

    return id;
  }

  static async delete(id) {
    await MyPokemon.destroy({
      where: {
        id,
      },
    });

    return id;
  }
}

module.exports = { MyPokemonRepository };
