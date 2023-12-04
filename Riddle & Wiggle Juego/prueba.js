class SceneMenu extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'SceneMenu' });
    }

    preload ()
    {
        //cursors = this.input.keyboard.createCursorKeys();

        this.load.image('titlescreen', 'Assets/title screen 2.png');
        this.load.image('pointer', 'Assets/pointer.png');

    }

    create (data)
    {
        this.titlescreen = this.add.image(400, 300, 'titlescreen').setScale(0.55);
        this.pointer = this.add.image(110, 348, 'pointer').setScale(0.55);

        this.add.text(120, 340, 'NUEVA PARTIDA', { fontFamily: 'Times, serif',color: 'silver'});
        this.add.text(120, 380, 'SALIR', { fontFamily: 'Times, serif',color: 'silver'});

        //Esta funcion es provisional para pasar a la siguiente escena game con el clic
        this.input.manager.enabled = true;
        this.input.once('pointerdown', function () {

            this.scene.start('SceneGame');

        }, this);

    }

  /*
    update(){
        if (cursors.down.isDown)
        {   
        this.pointer.y++;
        }
    }
   */
}
export default SceneMenu;




