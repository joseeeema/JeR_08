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
    

        /*//Establecer colisiones para tiles sólidos
        mapa.setCollision([lista_de_indices_solidos], true, capa);
       // Configura las colisiones para la capa de colisión
        map.setCollisionBetween(1, true, 'capaColision'); 

        // Configura el sistema de físicas
        this.physics.world.setBounds(0, 0, 800, 600);
        this.physics.world.setBoundsCollision(true, true, true, true);

        // Agrega colisiones con los tiles sólidos
        this.physics.add.collider(player, capaColision);
*/
    }

}
export default SceneGame;