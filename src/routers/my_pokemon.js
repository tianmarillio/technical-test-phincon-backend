const express = require('express');
const { MyPokemonController } = require('../controllers/my_pokemon');

const myPokemonRouter = express.Router();

myPokemonRouter.post('/catch/:id', MyPokemonController.catchPokemon);
myPokemonRouter.post('/', MyPokemonController.createMyPokemon);
myPokemonRouter.get('/', MyPokemonController.findAll);
myPokemonRouter.get('/:id', MyPokemonController.findById);
myPokemonRouter.patch('/:id', MyPokemonController.renameMyPokemon);
myPokemonRouter.delete('/:id', MyPokemonController.releaseMyPokemon);

module.exports = { myPokemonRouter };
