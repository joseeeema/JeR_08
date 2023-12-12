import SceneMenu from './prueba.js';
import SceneIntr from './Intr.js';
import SceneGame from './Game.js';
import SceneFin from './Fin.js';
import SceneVictoria from './Victoria.js';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: false
        }

    }
    
};

var game = new Phaser.Game(config);


game.scene.add('Escena de Introducción', SceneIntr, true, { x: 400, y: 300 });
game.scene.add('Escena de Menu', SceneMenu, true, { x: 400, y: 300 });
game.scene.add('Escena de Juego', SceneGame, true, { x: 800, y: 600 });
game.scene.add('Escena de Fin', SceneFin, true, { x: 400, y: 300 });
game.scene.add('Escena de Victoria', SceneVictoria, true, { x: 400, y: 300 });

