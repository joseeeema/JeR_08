var tiempo = {
    minutos:'00',
    segundos: '20'
}
class SceneFin extends Phaser.Scene {
    wake = false;
    cursors;
    textoTemp;
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
        this.textoTemp = this.add.text(32, 32);

        this.time.addEvent({
            delay: 3000,
            loop: true,
            callback: () => {
                this.actualizarContador();
            }
        })
    }

    actualizarContador(){
        tiempo.segundos--;
        tiempo.segundos = (tiempo.segundos>=10)? tiempo.segundos: '0' + tiempo.segundos;
        if(tiempo.segundos==0){
            tiempo.segundos = '59'
            tiempo.minutos--;
            tiempo.minutos = (tiempo.minutos>=10)? tiempo.minutos: '0' + tiempo.minutos;
        }
    }
    update(){
        if(tiempo.segundos==0 && tiempo.minutos==0){
            this.scene.wake('SceneFin');
            this.scene.start('SceneFin');
            this.scene.stop('SceneGame');
            this.wake = true;
        }

    }

}
export default SceneFin;