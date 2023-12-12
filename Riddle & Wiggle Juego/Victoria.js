class SceneVictoria extends Phaser.Scene {
    wake = false;
    constructor ()
    {
        super({ key: 'SceneVictoria' });
    }

    preload ()
    {

        this.load.image('pantallaVictoria', 'Assets/victory.png');

    }

    create (data)
    {
        this.pantallafin = this.add.image(400, 300, 'pantallafin').setScale(0.58);

        this.add.text(120, 340, 'Presiona enter para salir', { fontFamily: 'Times, serif',color: 'silver'});

    }


}
export default SceneVictoria;