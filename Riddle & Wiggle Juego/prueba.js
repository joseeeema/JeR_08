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
        this.scene.sleep('SceneGame');
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
            if(!this.wake){
                this.scene.wake('SceneGame');
                this.scene.start('SceneGame');
                this.wake = true;
            }

        });
        
    }
   
}
export default SceneMenu;




