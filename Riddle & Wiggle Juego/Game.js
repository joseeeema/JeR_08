class SceneGame extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'SceneGame' });
    }

    preload ()
    {
        //cursors = this.input.keyboard.createCursorKeys();

        
        this.load.image('tiles', 'Assets/Tilemap Dungeon original size.png');
        this.load.tilemapTiledJSON('mapa', 'Assets/mapa.json');
    }

    create (data)
    {
        
        //crea el mapa depués del JSON
        const map= this.make.tilemap({ key: 'mapa' });

        // Asocia el tileset al mapa
        const tileset = map.addTilesetImage('Tilemap Dungeon original size','tiles');

        //creamos las capas del mapa
        const layer = map.createStaticLayer(0, tileset, 0, 0);
    

    
    }

}
export default SceneGame;