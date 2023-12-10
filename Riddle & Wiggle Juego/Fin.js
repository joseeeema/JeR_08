class SceneFin extends Phaser.Scene {
    wake = false;
    cursors;
    constructor ()
    {
        super({ key: 'SceneFin' });
    }

    preload ()
    {

        this.load.image('pantallafin', 'Assets/GameOver.png');

    }

    create (data)
    {
        this.pantallafin = this.add.image(400, 300, 'pantallafin').setScale(0.58);

        this.add.text(120, 340, 'Presiona enter para salir', { fontFamily: 'Times, serif',color: 'silver'});

        this.cursors = this.input.keyboard.createCursorKeys();
        this.scene.sleep('SceneFin');
    }


    update(){
            if(finJuego){
                this.scene.wake('SceneFin');
                this.scene.start('SceneFin');
                this.scene.stop('SceneGame');
                this.wake = true;
            }

    }

}
export default SceneFin;