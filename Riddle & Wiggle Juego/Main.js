import SceneGame from './Game.js';
import SceneMenu from './prueba.js';
var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);

game.scene.add('Escena de Juego', SceneGame, true, { x: 400, y: 300 });
game.scene.add('Escena de Menu', SceneMenu, true, { x: 400, y: 300 });