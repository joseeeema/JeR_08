class SceneGame extends Phaser.Scene {

    Riddle;
    Wiggle;
    cursors;
    muros;

    constructor ()
    {
        super({ key: 'SceneGame' });
    }

    preload ()
    {
        this.load.image('mapa', 'Assets/MAPA.png');
        this.load.image('tiles', 'Assets/full tilemap.png');
        this.load.tilemapTiledJSON('mapa', 'Assets/mapa2.json');
        this.load.image('Riddle', 'Assets/Riddle.png');
        this.load.image('Wiggle', 'Assets/Wiggle.png');
        this.load.image('sky', 'Assets/Fondo_Black.jpg');
        this.load.image('pause', 'Assets/menu pausa.png')
        this.load.image('pointer', 'Assets/pointer.png');
        this.load.image('plataforma', 'Assets/platform.png');
        this.load.image('plataforma2', 'Assets/platform2.png');

    }

    create (data)
    {
        this.add.image(400, 300, 'sky').setScale(10);
        //Este código nos crea una configuración de botones predefinida dónde el jugador se mueve con las flechas
        this.cursors = this.input.keyboard.createCursorKeys();
       
        //Con este código se crea el movimiento derecha, izquierda, arriba, abajo, asignando la tecla que queramos, en este caso D,A,W,S.
        this.right=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.left=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.up=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.down=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
                
        // Método que crea las colisiones
        this.CrearColisionParedes();
        
        this.add.image(400,300,'mapa').setScale(0.8);
        
        //Añadimos unas coordenadas de aparición para los personajes
        this.Riddle = this.physics.add.sprite(100, 200, 'Riddle');
        //this.Riddle.setCollideWorldBounds(true);
        this.Riddle.setBounce(0.2);
        this.Wiggle = this.physics.add.sprite(700, 300, 'Wiggle');
        //this.Wiggle.setCollideWorldBounds(true);
        this.Wiggle.setBounce(0.2);
        //Escalamos los sprites
        this.Riddle.setScale(0.07);
        this.Wiggle.setScale(0.1);
        
        // Colisiones
        this.physics.add.collider(this.Riddle, this.muros);
        this.physics.add.collider(this.Wiggle, this.muros);
        


                

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
        /*
        //Menu PAUSA
        this.input.keyboard.on('keydown_TAB', () =>{ 
           this.scene

        });
        */

        //Controles Riddle
        //Movimiento horizontal
        if (this.cursors.left.isDown)
                {
                    this.Riddle.setVelocityX(-40);
                    this.Wiggle.setVelocityX(-40);
                }

                else if (this.cursors.right.isDown)
                {
                    this.Riddle.setVelocityX(40);
                    this.Wiggle.setVelocityX(40);
                }

                else if (this.cursors.up.isDown)
                {
                    this.Wiggle.setVelocityY(-40);
                    this.Riddle.setVelocityY(-40);
                }

                else if (this.cursors.down.isDown)
                {
                    this.Wiggle.setVelocityY(40);
                    this.Riddle.setVelocityY(40);
                }


                if(this.cursors.left.isUp&&this.cursors.right.isUp&&this.cursors.up.isUp&&this.cursors.down.isUp) {
                    this.Wiggle.setVelocityX(0);
                    this.Riddle.setVelocityX(0);
                    this.Wiggle.setVelocityY(0);
                    this.Riddle.setVelocityY(0);
                }
    }

    CrearColisionParedes() {
                // Se crean plataformas para crear las colisiones
                this.muros = this.physics.add.staticGroup();
                this.muros.create(250,500,'plataforma').setScale(0.75,0.8).refreshBody();
                this.muros.create(560,500,'plataforma').setScale(0.57,0.8).refreshBody();
                this.muros.create(560,277,'plataforma').setScale(0.57,0.8).refreshBody();
                this.muros.create(730,580,'plataforma').setScale(0.37,0.8).refreshBody();
                this.muros.create(697,450,'plataforma').setScale(0.12,0.8).refreshBody();
                this.muros.create(775,450,'plataforma').setScale(0.10,0.8).refreshBody();
                this.muros.create(775,195,'plataforma').setScale(0.10,0.8).refreshBody();
                this.muros.create(690,195,'plataforma').setScale(0.16,0.8).refreshBody();
                this.muros.create(587,195,'plataforma').setScale(0.2,0.8).refreshBody();
                this.muros.create(480,195,'plataforma').setScale(0.17,0.8).refreshBody();
                this.muros.create(355,195,'plataforma').setScale(0.17,0.8).refreshBody();
                this.muros.create(355,295,'plataforma').setScale(0.17,0.8).refreshBody();
                this.muros.create(355,134,'plataforma').setScale(0.17,0.8).refreshBody();
                this.muros.create(355,65,'plataforma').setScale(0.17,0.8).refreshBody();
                this.muros.create(642,35,'plataforma').setScale(0.17,0.8).refreshBody();
                this.muros.create(745,35,'plataforma').setScale(0.22,0.8).refreshBody();
                this.muros.create(515,35,'plataforma').setScale(0.35,0.8).refreshBody();
                this.muros.create(165,35,'plataforma').setScale(0.8,0.8).refreshBody();
                this.muros.create(73,293,'plataforma').setScale(0.28,0.75).refreshBody();
                this.muros.create(73,165,'plataforma').setScale(0.28,0.75).refreshBody();
                this.muros.create(120,340,'plataforma').setScale(0.45,0.75).refreshBody();
                this.muros.create(315,340,'plataforma').setScale(0.37,0.75).refreshBody();
                this.muros.create(75,405,'plataforma').setScale(0.20,0.75).refreshBody();
                this.muros.create(322,160,'plataforma2').setScale(0.17,0.32).refreshBody();
                this.muros.create(322,295,'plataforma2').setScale(0.17,0.2).refreshBody();
                this.muros.create(130,145,'plataforma2').setScale(0.17,0.32).refreshBody();
                this.muros.create(130,273,'plataforma2').setScale(0.17,0.16).refreshBody();
                this.muros.create(130,332,'plataforma2').setScale(0.17,0.05).refreshBody();
                this.muros.create(15,170,'plataforma2').setScale(0.17,0.65).refreshBody();
                this.muros.create(115,450,'plataforma2').setScale(0.17,0.4).refreshBody();
                this.muros.create(33,370,'plataforma2').setScale(0.17,0.2).refreshBody();
                this.muros.create(67,310,'plataforma2').setScale(0.17,0.1).refreshBody();
                this.muros.create(388,285,'plataforma2').setScale(0.17,1.15).refreshBody();
                this.muros.create(448,275,'plataforma2').setScale(0.17,1.15).refreshBody();
                this.muros.create(789,300,'plataforma2').setScale(0.17,1.35).refreshBody();
                this.muros.create(705,110,'plataforma2').setScale(0.17,0.45).refreshBody();
                this.muros.create(675,110,'plataforma2').setScale(0.17,0.45).refreshBody();
                this.muros.create(608,110,'plataforma2').setScale(0.17,0.45).refreshBody();
                this.muros.create(580,110,'plataforma2').setScale(0.17,0.45).refreshBody();
                this.muros.create(675,325,'plataforma2').setScale(0.17,0.3).refreshBody();
                this.muros.create(674,510,'plataforma2').setScale(0.17,0.3).refreshBody();
                this.muros.create(545,310,'plataforma2').setScale(0.17,0.2).refreshBody();
                this.muros.create(545,440,'plataforma2').setScale(0.17,0.28).refreshBody();
    }

}
export default SceneGame;