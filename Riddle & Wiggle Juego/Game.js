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
        map.createStaticLayer('suelo', tileset)
        const walls= map.createStaticLayer(0, tileset, 0, 0);
        
        walls.setCollisionByProperty({collides:true})

        const debugGraphics = this.add.graphics().setAlpha(0.7)
        walls.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color (243, 234, 48,),
                faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })
    }

}
export default SceneGame;