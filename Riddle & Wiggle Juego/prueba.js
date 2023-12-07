class SceneMenu extends Phaser.Scene {
    wake = false;
    cursors;
    constructor ()
    {
        super({ key: 'SceneMenu' });
    }

    preload ()
    {

        this.load.image('titlescreen', 'Assets/title screen 2.png');
        this.load.image('pointer', 'Assets/pointer.png');
        this.load.image('exit', 'Assets/Fondo_Black.jpg');

    }

    create (data)
    {
        this.titlescreen = this.add.image(400, 300, 'titlescreen').setScale(0.58);
        this.pointer = this.add.image(110, 348, 'pointer').setScale(0.55);

        this.add.text(120, 340, 'NUEVA PARTIDA', { fontFamily: 'Times, serif',color: 'silver'});
        this.add.text(120, 380, 'SALIR', { fontFamily: 'Times, serif',color: 'silver'});

        this.cursors = this.input.keyboard.createCursorKeys();

        /*
        //Esta funcion es provisional para pasar a la siguiente escena game con el clic
        this.input.manager.enabled = true;
        this.input.once('pointerdown', function () {

            this.scene.start('SceneGame');

        }, this);
        */
        this.scene.sleep('SceneIntr');
    }


    update(){

        if (this.cursors.down.isDown && this.pointer.y == 348)
        {
        this.pointer.y += 40;
        }
        else if (this.cursors.up.isDown && this.pointer.y == 388)
        {
        this.pointer.y -= 40;
        }


        this.input.keyboard.on('keydown_ENTER', () =>{ 
            if(!this.wake && this.pointer.y == 348){
                this.scene.wake('SceneGame');
                this.scene.start('SceneGame');
                this.scene.stop('SceneMenu');
                this.wake = true;
            }else 
            {
                //window.close();
                this.exit = this.add.image(400, 300, 'exit').setScale(1.5);
                this.scene.stop('SceneMenu');
            }

        });

    }

}
export default SceneMenu;



