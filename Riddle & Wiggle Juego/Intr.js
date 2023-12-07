class SceneIntr extends Phaser.Scene {
    wake = false;
    i = 2;
    cooldownNewNew = true;
    constructor ()
    {
        super({ key: 'SceneIntr' });
    }

    preload ()
    {

        this.load.image('1', 'Assets/intr1.jpg');
        this.load.image('2', 'Assets/intr2.jpg');
        this.load.image('3', 'Assets/intr3.jpg');
        this.load.image('4', 'Assets/intr4.jpg');
        this.load.image('5', 'Assets/intr5.jpg');
        this.load.image('6', 'Assets/intr6.jpg');

    }

    create (data)
    {

         // incializar la primera imagen
        this.intr1 = this.add.image(400, 300, '1');
         //this.intr.setVisible(false); // Oculta la imagen inicialmente

        //this.i = this.add.image(400, 300, 'titlescreen').setScale(0.58);

        //this.scene.sleep('SceneGame');
        this.cooldownNew = this.time.addEvent({ delay: 500, callback: this.cooldown, callbackScope: this});
        this.cooldownNew.paused = true;
        this.scene.sleep('SceneGame');

    }

    update(){

        this.input.keyboard.on('keydown_ENTER', () => {
            if (this.i <= 6 && this.cooldownNewNew) { // Verifica si i está dentro del rango
                this.intr = this.add.image(400, 300, this.i.toString()); // Convierte i a string para obtener la clave correcta
                this.i++; // Incrementa i para la siguiente imagen
                this.cooldownNewNew = false;
                this.cooldownNew.paused = false;
            }

            if (this.i == 7 && !this.wake) { // Si se mostraron todas las imágenes, cambia la escena
                this.scene.wake('SceneGame');
                this.scene.start('SceneGame');
                this.scene.stop('SceneIntr');
                this.wake = true;
            }
        });
    }
    cooldown(){
        this.cooldownNewNew = true;
        this.cooldownNew = this.time.addEvent({ delay: 500, callback: this.cooldown, callbackScope: this});
        this.cooldownNew.paused = true;
    }

}
export default SceneIntr;