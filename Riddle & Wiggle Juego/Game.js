class SceneGame extends Phaser.Scene {

    Riddle;
    Wiggle;
    cursors;

    constructor ()
    {
        super({ key: 'SceneGame' });
    }

    preload ()
    {
  
        this.load.image('tiles', 'Assets/Tilemap Dungeon original size.png');
        this.load.tilemapTiledJSON('mapa', 'Assets/mapa.json');
        this.load.image('Riddle', 'Assets/Riddle.png');
        this.load.image('Wiggle', 'Assets/Wiggle.png');
    }

    create (data)
    {
        //Este código nos crea una configuración de botones predefinida dónde el jugador se mueve con las flechas
        this.cursors = this.input.keyboard.createCursorKeys();

        //Con este código se crea el movimiento derecha, izquierda, arriba, abajo, asignando la tecla que queramos, en este caso D,A,W,S.
        this.right=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.left=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.up=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.down=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

        //crea el mapa depués del JSON
        const map= this.make.tilemap({ key: 'mapa' });

        // Asocia el tileset al mapa
        const tileset = map.addTilesetImage('Tilemap Dungeon original size','tiles');

        //creamos las capas del mapa
        const suelo= map.createStaticLayer('suelo', tileset)
        const walls = map.createStaticLayer('walls', tileset, 0, 0);
        
        walls.setCollisionByProperty({ collide: true });

        const debugGraphics = this.add.graphics().setAlpha(0.75);
        walls.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color (243, 234, 48, 255),
                faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        });

        //Añadimos unas coordenadas de aparición para los personajes
        this.Riddle = this.add.image(600, 300, 'Riddle');
        this.Wiggle = this.add.image(200, 300, 'Wiggle');
        //Escalamos los sprites
        this.Riddle.setScale(0.15);
        this.Wiggle.setScale(0.2);
    }

    update ()
    {
        
        //Controles Riddle
        //Movimiento horizontal
        if (this.cursors.left.isDown)
        {
            this.Riddle.x--;
        }
        else if (this.cursors.right.isDown)
        {
            this.Riddle.x++;
        }

        //Movimiento vertical
        if (this.cursors.down.isDown)
        {
            this.Riddle.y++;
        }
        else if (this.cursors.up.isDown)
        {
            this.Riddle.y--;
        }
        
        //Controles Wiggle
        //Movimiento horizontal
         if (this.left.isDown)
        {
            this.Wiggle.x--;
        }
        else if (this.right.isDown)
        {
            this.Wiggle.x++;
        }

        //Movimiento vertical
        if (this.down.isDown)
        {
            this.Wiggle.y++;
        }
        else if (this.up.isDown)
        {
            this.Wiggle.y--;
        }
    }

}
export default SceneGame;