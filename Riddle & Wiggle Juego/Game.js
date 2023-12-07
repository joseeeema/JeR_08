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
        this.load.image('Mapa', 'Assets/Mapa en condiciones.png');
        this.load.image('Plataforma', 'Assets/platform.png');
        this.load.image('tiles', 'Assets/full tilemap.png');
        this.load.tilemapTiledJSON('mapa', 'Assets/mapa2.json');
        this.load.image('Riddle', 'Assets/Riddle.png');
        this.load.image('Wiggle', 'Assets/Wiggle.png');
        this.load.image('sky', 'Assets/Fondo_Black.jpg');
    }

    create (data)
    {
        this.add.image(400, 300, 'sky').setScale(10);//JUANADA 
        //Este código nos crea una configuración de botones predefinida dónde el jugador se mueve con las flechas
        this.cursors = this.input.keyboard.createCursorKeys();

        //Con este código se crea el movimiento derecha, izquierda, arriba, abajo, asignando la tecla que queramos, en este caso D,A,W,S.
        this.right=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.left=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.up=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.down=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

        this.mapa = this.physics.add.staticGroup();
        this.mapa.create(400, 300, 'Plataforma').setScale(0.8);
        

        //Añadimos unas coordenadas de aparición para los personajes
        this.Riddle = this.physics.add.sprite(100, 200, 'Riddle');
        this.Riddle.setCollideWorldBounds(true);
        this.Riddle.setBounce(0.2);
        this.Wiggle = this.physics.add.sprite(700, 200, 'Wiggle');
        this.Wiggle.setCollideWorldBounds(true);
        this.Wiggle.setBounce(0.2);
        //Escalamos los sprites
        this.Riddle.setScale(0.15)
        this.Wiggle.setScale(0.2)
        this.physics.add.collider(this.Riddle, this.mapa);
        this.physics.add.collider(this.Wiggle, this.mapa);
      
    


                

/*
                // CAMERA 1
                var camera1 = this.cameras.add(0, 0, 400, 800);
                camera1.setZoom(2); // Ajusta el valor según sea necesario
                camera1.centerOn(this.Wiggle.x, this.Wiggle.y);
                camera1.setBounds(0,0,400,800);
                camera1.startFollow(this.Wiggle);
        
                // CAMERA 2
                var camera2 = this.cameras.add(400, 0, 400, 800);
                camera2.setZoom(2); // Ajusta el valor según sea necesario
                camera2.centerOn(this.Riddle.x, this.Riddle.y);
                camera2.setBounds(400,0,400,800);
                camera2.startFollow(this.Riddle);
*/
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