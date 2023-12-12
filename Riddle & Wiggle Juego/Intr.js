class SceneIntr1 extends Phaser.Scene {
    wake = false;
    constructor ()
    {
        super({ key: 'SceneIntr1' });
    }

    preload ()
    {
        this.load.image('introduccion1', 'Assets/introduction1.png');

    }

    create (data)
    {
        this.introduccion1 = this.add.image(400, 300, 'introduccion1').setScale(0.58);

    }


    update(){

        this.input.keyboard.on('keydown_ENTER', () =>{ 
            if(!this.wake){
                this.scene.stop('SceneIntr1');
                this.scene.start('SceneGame');
                this.wake = true;
            }
        });

    }

}
export default SceneIntr1;