class SceneGame extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'SceneGame' });
    }

    preload ()
    {
        this.load.image('test', 'Assets/menu pausa 2.png');
    }

    create (data)
    {
        this.test = this.add.image(400, 300, 'test').setScale(0.55);

        this.add.text(120, 340, 'TEST', { fontFamily: 'Times, serif',color: 'silver'});
    }
}
export default SceneGame;
