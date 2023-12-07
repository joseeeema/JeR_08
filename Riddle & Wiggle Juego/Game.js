class SceneGame extends Phaser.Scene {

    Riddle;
    Wiggle;
    cursors;
    muros;
    // Control del juego
    juegoDetenidoRiddle = false;
    juegoDetenidoWiggle = false;
    // Variables que almacenan todos los objetos interactuables por los personajes
    objetosInteractuables = new Array (100);
    caja;
    piano;
    estanteria1;
    estanteria2;
    puertaA;
    fragmento1LlaveB;
    mesaLlaveB;
    cajonesLlaveB;
    puertaB;
    puertaB2;
    mesaJardin1;
    mesaJardin2;
    clavel;
    lirio;
    tulipan;
    girasol;
    rosaBlanca;
    rosaRoja;
    cuadro1;
    cuadro2;
    puertaC;
    muebleCocina;
    puertaD;
    simboloPared;
    puertaAlmacen;
    comodaGatos;
    comodaMensaje;
    estanteria3;
    estanteria4;
    caldero1rubi;
    caldero2rubi;
    caldero1zafiro;
    caldero2zafiro;
    nevera1;
    nevera2;
    // Variables encargadas del sistema de diálogos y texto J1
    cajaTexto; // Imagen del cuadro de texto
    mostrandoTexto = false; // Controla que no se superpongan los textos
    tiempoTexto = 10000; // Tiempo que se deja al cuadro de texto en pantalla
    tiempoCaracter = 80; // Tiempo que se emplea para mostrar cada letra
    tiempoEsperaCuadro = 4000; // Tiempo que se deja el cuadro mostrado después de acabar de sacar el texto
    eventoTiempo;  // Evento encargado de mostrar el cuadro de texto
    dialogo; // Objeto texto
    stringTexto; // String con la frase a mostrar (array de caracteres)
    indiceLetra = 0; // Índice utilizado para mostrar el texto
    numeroCaracteres; // Número de caracteres que tiene la frase a mostrar
    dialogoCargado = ""; // Variable que almacena el texto acumulado
    linea1 = true;
    linea2 = false;
    linea3 = false;
    dialogoB;
    dialogoCargadoB = "";
    dialogoC;
    dialogoCargadoC = "";
    // Variables encargadas del sistema de diálogos y texto J2
    cajaTexto2;
    mostrandoTexto2 = false;
    tiempoTexto2 = 10000;
    eventoTiempo2;
    dialogo2;
    stringTexto2;
    indiceLetra2 = 0;
    numeroCaracteres2;
    dialogoCargado2 = "";
    linea1b = true;
    linea2b = false;
    linea2c = false;
    dialogo2B;
    dialogoCargado2B = "";
    dialogo2C;
    dialogoCargado2C = "";
    // Variables encargadas del control del flujo del juego y de los puzles
    inicioAbarrotado = false;
    estanteria1_interactuada = false;
    estanteria2_interactuada = false;
    comboPiano; // Variable que almacena la clave numérica que simboliza las teclas correctas del piano
    sinfoniaSecreta = false;
    resolucionMostradaPiano = false;
    numeroFragmentosLlave = 0;
    fragmentoMesa = false;
    fragmentoSuelo = false;
    fragmentoCajones = false;
    entrePetalos = false;
    cuadrosInteractuados = false;
    xPlantaA1; // Coordenadas de la imagen de las plantas
    yPlantaA1;
    plantaA1;
    xPlantaB1;
    yPlantaB1;
    plantaB1;
    xPlantaC1;
    yPlantaC1;
    plantaC1;
    xPlantaA2;
    yPlantaA2;
    plantaA2;
    xPlantaB2;
    yPlantaB2;
    plantaB2;
    xPlantaC2;
    yPlantaC2;
    plantaC2;
    floresJardin1 = new Array(3);
    floresJardin2 = new Array(3);
    clavesIntroducidas = 0;
    nuevaPosicionFlores = new Array(3);
    nuevoIntento = true;
    jardinEnArmonia = false;
    resolucionMostradaJardin = false;
    secretoFogones = false;
        resuelveFogones;
        contraseñaSimbolos = new Array(3);
        numeroDigitos = 0;
        enigmaAlmacen = false;
        resolucionMostradaAlmacen = false;
        mensajeObtenido = false;
        velasEncendidas = [false, false, false, false, false];
        llamasFelinas = false;
        mensajeGatosMostrado = false;
        puertaBibliotecaRiddle;
        puertaBibliotecaWiggle;
        puertaLaboratorioRiddle;
        puertaLaboratorioWiggle;
        estanteria3_interactuada = false;
        estanteria4_interactuada = false;
        elixirRubi = false;
        elixirZafiro = false;
        maestroMezclas = false;
        ingredientesRiddle1 = new Array(7);
        ingredientesRiddle2 = new Array(7);
        ingredientesWiggle1 = new Array(7);
        ingredientesWiggle2 = new Array(7);
        iconosNevera1 = new Array(7);
        iconosNevera2 = new Array(7);
        ingrediente1A;
        ingrediente2A;
        ingrediente3A;
        ingrediente4A;
        ingrediente5A;
        ingrediente6A;
        ingrediente7A;
        ingrediente8A;
        ingrediente9A;
        ingrediente10A;
        ingrediente11A;
        ingrediente12A;
        ingrediente13A;
        ingrediente14A;
        arrayIngredientesRiddle = new Array(14);
        ingrediente1B;
        ingrediente2B;
        ingrediente3B;
        ingrediente4B;
        ingrediente5B;
        ingrediente6B;
        ingrediente7B;
        ingrediente8B;
        ingrediente9B;
        ingrediente10B;
        ingrediente11B;
        ingrediente12B;
        ingrediente13B;
        ingrediente14B;
        arrayIngredientesWiggle = new Array(14);
        numeroIngredientesCaldero1 = 0;
        numeroIngredientesCaldero2 = 0;
        iconosCaldero1 = new Array(14);
        iconosCaldero2 = new Array(14);
        numeroIngredientesIntroducidos1 = 0;
        numeroIngredientesIntroducidos2 = 0;
        ingredientesIntroducidosCaldero1 = new Array(3);
        ingredientesIntroducidosCaldero2 = new Array(3);
        finalMostrado = false;
    // Variables encargadas de mostrar imágenes
    libroPiano1;
    libroPiano2;
    puzlePiano;
    puzleFloresR1;
    puzleFloresW1;
    puzleFloresR2;
    puzleFLoresW2;
    puzleSimbolos;
    puzleSimbolos2;
    panelContraseña1;
    panelContraseña2;
    puzleGatos1;
    puzleGatos2;
    vela1AE; // Velas encendidas y apagadas para cada puzle
    vela2AE;
    vela3AE;
    vela4AE;
    vela5AE;
    vela1AN;
    vela2AN;
    vela3AN;
    vela4AN;
    vela5AN;
    vela1BE;
    vela2BE;
    vela3BE;
    vela5BE;
    vela6BE;
    vela1BN;
    vela2BN;
    vela3BN;
    vela4BN;
    vela5BN;
    gatoBlanco;
    gatoVerde;
    gatoAzul;
    gatoNaranja;
    gatoRojo;
    mensajeGatos1;
    mensajeGatos2;
    ingredientesNeveraR1;
    ingredientesNeveraR2;
    ingredientesNeveraW1;
    ingredientesNeveraW2;
    ingredientesCaldero1;
    ingredientesCaldero2;
    // Inventarios
    inventarioRiddle = new Array(100);
    inventarioWiggle = new Array(100);

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

        this.load.image('caja', 'assets/caja.png');
        this.load.image('piano', 'assets/piano.png');
        this.load.image('estanteria', 'assets/estanteria.png');
        this.load.image('puerta', 'assets/puerta.png');
        this.load.image('cajones', 'assets/cajones.png');
        this.load.image('mesa', 'assets/mesa.png');
        this.load.image('fragmento llave', 'assets/fragmento llave.png');
        this.load.image('puerta2', 'assets/puerta2.png');
        this.load.image('rosa blanca', 'assets/rosa blanca.png');
        this.load.image('rosa roja', 'assets/rosa roja.png');
        this.load.image('clavel', 'assets/clavel.png');
        this.load.image('lirio', 'assets/lirio.png');
        this.load.image('girasol', 'assets/girasol.png');
        this.load.image('tulipan', 'assets/tulipan.png');
        this.load.image('mesa flores', 'assets/mesa flores.png');
        this.load.image('cuadro', 'assets/cuadro.png');
        this.load.image('muebleCocina', 'assets/cocinaRiddle.png');
        this.load.image('muebleCocina2', 'assets/cocinaWiddle.png');
        this.load.image('simbolos', 'assets/simbolo pared.png');
        this.load.image('puertaAlmacen', 'assets/puerta almacen.png');
        this.load.image('candelabro', 'assets/candelabro.png');
        this.load.image('comodaMensaje', 'assets/comoda 2.png');
        this.load.image('comodaGatos', 'assets/comoda.png');
        this.load.image('gatoBlanco', 'assets/Gato blanco.png');
        this.load.image('gatoAzul', 'assets/Gato azul.png');
        this.load.image('gatoVerde', 'assets/Gato verde.png');
        this.load.image('gatoNaranja', 'assets/Gato naranja.png');
        this.load.image('gatoRojo', 'assets/Gato rojo.png');
        this.load.image('caldero1rubi', 'assets/caldero1 rubi.png');
        this.load.image('caldero2rubi', 'assets/caldero2 rubi.png');
        this.load.image('caldero1zafiro', 'assets/caldero1 zafiro.png');
        this.load.image('caldero2zafiro', 'assets/caldero2 zafiro.png');
        this.load.image('nevera', 'assets/nevera.png');
        this.load.image('Riddle', 'assets/Riddle.png');
        this.load.image('Wiggle', 'assets/Wiggle.png');
        // Sistema de texto
        this.load.image('textBox', 'assets/textbox.png');
        // Imágenes
        this.load.image('libropiano1', 'assets/libro piano1.png');
        this.load.image('libropiano2', 'assets/libro piano2.png');
        this.load.image('puzle piano', 'assets/puzle piano.png');
        this.load.image('puzle flores R1', 'assets/puzleFloresR1.png');
        this.load.image('puzle flores W1', 'assets/puzleFloresW1.png');
        this.load.image('puzle flores R2', 'assets/puzleFloresR2.png');
        this.load.image('puzle flores W2', 'assets/puzleFloresW2.png');
        this.load.image('puzle simbolos1', 'assets/simbolo pared 1.png');
        this.load.image('puzle simbolos2', 'assets/simbolo pared 2.png');
        this.load.image('cartel almacen 1', 'assets/puzle simbolos 1.png');
        this.load.image('cartel almacen 2', 'assets/puzle simbolos 2.png');
        this.load.image('puzle gatos 1', 'assets/puzle gatos 1.png');
        this.load.image('puzle gatos 2', 'assets/puzle gatos 2.png');
        this.load.image('velaEncendida', 'assets/vela encendida.png');
        this.load.image('velaApagada', 'assets/vela apagada.png');
        this.load.image('mensaje1', 'assets/mensaje 1.png');
        this.load.image('mensaje2', 'assets/mensaje 2.png');
        this.load.image('ingredientesNeveraR1', 'assets/ingredientes nevera R1.png');
        this.load.image('ingredientesNeveraR2', 'assets/ingredientes nevera R2.png');
        this.load.image('ingredientesNeveraW1', 'assets/ingredientes nevera W1.png');
        this.load.image('ingredientesNeveraW2', 'assets/ingredientes nevera W2.png');
        this.load.image('icono', 'assets/conseguido.png');
        this.load.image('ingredientesCaldero1', 'assets/ingredientes caldero zafiro.png');
        this.load.image('ingredientesCaldero2', 'assets/ingredientes caldero rubi.png');

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
                
        // Método que crea las colisiones de las paredes
        this.CrearColisionParedes();
        // Imagen del mapa
        this.add.image(400,300,'mapa').setScale(0.8);
        
        //Añadimos unas coordenadas de aparición para los personajes
        this.Riddle = this.physics.add.sprite(750, 90, 'Riddle');
        //this.Riddle.setCollideWorldBounds(true);
        this.Riddle.setBounce(0.2);
        this.Wiggle = this.physics.add.sprite(90, 250, 'Wiggle');
        //this.Wiggle.setCollideWorldBounds(true);
        this.Wiggle.setBounce(0.2);
        //Escalamos los sprites
        this.Riddle.setScale(0.07);
        this.Wiggle.setScale(0.085);
        
        // Colisiones
        //this.physics.add.collider(this.Riddle, this.muros);
        //this.physics.add.collider(this.Wiggle, this.muros);
        /*             
        // CAMERA 1
        var camera1 = this.cameras.add(0, 0, 400, 800);
        camera1.setZoom(3); // Ajusta el valor según sea necesario
        camera1.centerOn(this.Wiggle.x, this.Wiggle.y);
        camera1.setBounds(0,0,400,800);
        camera1.startFollow(this.Wiggle);

        // CAMERA 2
        var camera2 = this.cameras.add(400, 0, 400, 800);
        camera2.setZoom(3); // Ajusta el valor según sea necesario
        camera2.centerOn(this.Riddle.x, this.Riddle.y);
        camera2.setBounds(400,0,400,800);
        camera2.startFollow(this.Riddle);
        */
        //////////////// CREACIÓN DE LOS ELEMENTOS INTERACTUABLES ////////////////
        // Caja
        this.caja = this.physics.add.staticGroup().create(120,225,'caja').setScale(2).refreshBody();
        this.caja.interactuar = function() {
            return "caja";
        };
        this.objetosInteractuables.push(this.caja);
        this.physics.add.collider(this.Riddle, this.caja);
        this.physics.add.collider(this.Wiggle, this.caja);
        // Estantería 1
        this.estanteria1 = this.physics.add.staticGroup().create(725,40,'estanteria').setScale(0.8).refreshBody();
        this.estanteria1.interactuar = function() {
            return "estanteria1";
        }
        this.objetosInteractuables.push(this.estanteria1);
        this.physics.add.collider(this.Riddle, this.estanteria1);
        this.physics.add.collider(this.Wiggle, this.estanteria1);
        // Estantería 2
        this.estanteria2 = this.physics.add.staticGroup().create(770,40,'estanteria').setScale(0.8).refreshBody();
        this.estanteria2.interactuar = function() {
            return "estanteria2";
        }
        this.physics.add.collider(this.Riddle, this.estanteria2);
        this.physics.add.collider(this.Wiggle, this.estanteria2);
        this.objetosInteractuables.push(this.estanteria2);
        // Piano
        this.piano = this.physics.add.staticGroup().create(250,420,'piano').setScale(0.08).refreshBody();
        this.piano.interactuar = function() {
                return "piano";
            };
        this.objetosInteractuables.push(this.piano);
        this.physics.add.collider(this.Riddle, this.piano);
        this.physics.add.collider(this.Wiggle, this.piano);
        // Puerta A - Habitación de Riddle
        this.puertaA = this.physics.add.staticGroup().create(738,200,'puerta2').setScale(0.56).refreshBody();
        this.puertaA.interactuar = function() {
            return "puertaA";
        }
        this.objetosInteractuables.push(this.puertaA);
        this.physics.add.collider(this.Riddle, this.puertaA);
        this.physics.add.collider(this.Wiggle, this.puertaA);
        // Mesa
        this.mesaLlaveB = this.physics.add.staticGroup().create(610,450,'mesa').setScale(1).refreshBody();
        this.mesaLlaveB.interactuar = function() {
            return "mesaLlave";
        }
        this.objetosInteractuables.push(this.mesaLlaveB);
        this.physics.add.collider(this.Riddle, this.mesaLlaveB);
        this.physics.add.collider(this.Wiggle, this.mesaLlaveB);
        // Cajones salón
        this.cajonesLlaveB = this.physics.add.staticGroup().create(630,320,'cajones').setScale(1).refreshBody();
        this.cajonesLlaveB.interactuar = function() {
            return "cajonesLlave";
        }
        this.objetosInteractuables.push(this.cajonesLlaveB);
        this.physics.add.collider(this.Riddle, this.cajonesLlaveB);
        this.physics.add.collider(this.Wiggle, this.cajonesLlaveB);
        // Fragmento de llave
        this.fragmento1LlaveB = this.physics.add.staticGroup().create(730,160,'fragmento llave').setScale(0.05).refreshBody();
        this.fragmento1LlaveB.interactuar = function() {
            return "fragmentoLlaveB";
        }
        this.objetosInteractuables.push(this.fragmento1LlaveB);
        this.physics.add.collider(this.Riddle, this.fragmento1LlaveB);
        this.physics.add.collider(this.Wiggle, this.fragmento1LlaveB);
        // Puerta B - Jardines
        this.puertaB = this.physics.add.staticGroup().create(738,458,'puerta2').setScale(0.56).refreshBody();
        this.puertaB.interactuar = function() {
            return "puertaB";
        }
        this.objetosInteractuables.push(this.puertaB);
        this.physics.add.collider(this.Riddle, this.puertaB);
        this.physics.add.collider(this.Wiggle, this.puertaB);

        this.puertaB2 = this.physics.add.staticGroup().create(320,240,'puerta').setScale(0.7).refreshBody();
        this.puertaB2.interactuar = function() {
            return "puertaB2";
        }
        this.objetosInteractuables.push(this.puertaB2);
        this.physics.add.collider(this.Riddle, this.puertaB2);
        this.physics.add.collider(this.Wiggle, this.puertaB2);
        // Coordenadas de las flores
        this.xPlantaA1 = 715;
        this.yPlantaA1 = 517;
        this.xPlantaB1 = 730;
        this.yPlantaB1 = 517;
        this.xPlantaC1 = 745;
        this.yPlantaC1 = 517;
        this.xPlantaA2 = 340;
        this.yPlantaA2 = 202;
        this.xPlantaB2 = 355;
        this.yPlantaB2 = 202;
        this.xPlantaC2 = 370;
        this.yPlantaC2 = 202;
        
        // Mesa jardín 1
        this.mesaJardin1 = this.physics.add.staticGroup().create(730,530,'mesa').setScale(1).refreshBody();
        this.mesaJardin1.interactuar = function() {
            return "mesaJardin1";
        }
        this.objetosInteractuables.push(this.mesaJardin1);
        this.physics.add.collider(this.Riddle, this.mesaJardin1);
        this.physics.add.collider(this.Wiggle, this.mesaJardin1);
        // Mesa jardín 2
        this.mesaJardin2 = this.physics.add.staticGroup().create(355,215,'mesa').setScale(1).refreshBody();
        this.mesaJardin2.interactuar = function() {
            return "mesaJardin2";
        }
        this.objetosInteractuables.push(this.mesaJardin2);
        this.physics.add.collider(this.Riddle, this.mesaJardin2);
        this.physics.add.collider(this.Wiggle, this.mesaJardin2);

        // Imágenes de las flores (no interactuables)
        this.girasol = this.add.image(this.xPlantaA1,this.yPlantaA1, 'girasol').setScale(0.05);
        this.rosaRoja = this.add.image(this.xPlantaB1,this.yPlantaB1,'rosa roja').setScale(0.05);
        this.clavel = this.add.image(this.xPlantaC1, this.yPlantaC1,'clavel').setScale(0.03);
        this.rosaBlanca = this.add.image(this.xPlantaA2,this.yPlantaA2, 'rosa blanca').setScale(0.05);
        this.tulipan = this.add.image(this.xPlantaB2,this.yPlantaB2,'tulipan').setScale(0.05);
        this.lirio = this.add.image(this.xPlantaC2,this.yPlantaC2,'lirio').setScale(0.05);


        // Cuadro 1
        this.cuadro1 = this.physics.add.staticGroup().create(570,277,'cuadro').setScale(1).refreshBody();
        this.cuadro1.interactuar = function() {
            return "cuadro1";
        }
        this.objetosInteractuables.push(this.cuadro1);
        this.physics.add.collider(this.Riddle, this.cuadro1);
        this.physics.add.collider(this.Wiggle, this.cuadro1);
        // Cuadro 2
        this.cuadro2 = this.physics.add.staticGroup().create(160,343,'cuadro').setScale(1).refreshBody();
        this.cuadro2.interactuar = function() {
            return "cuadro2";
        }
        this.objetosInteractuables.push(this.cuadro2);
        this.physics.add.collider(this.Riddle, this.cuadro2);
        this.physics.add.collider(this.Wiggle, this.cuadro2);

        // Puerta C - Cocinas
        this.puertaC = this.physics.add.staticGroup().create(530,200,'puerta2').setScale(0.56).refreshBody();
        this.puertaC.interactuar = function () {
            return "puertaC";
        }
        this.objetosInteractuables.push(this.puertaC);
        this.physics.add.collider(this.Riddle, this.puertaC);
        this.physics.add.collider(this.Wiggle, this.puertaC);

        this.puertaC2 = this.physics.add.staticGroup().create(117,360,'puerta').setScale(0.7,0.4).refreshBody();
        this.puertaC2.interactuar = function() {
            return "puertaC2";
        }
        this.objetosInteractuables.push(this.puertaC2);
        this.physics.add.collider(this.Riddle, this.puertaC2);
        this.physics.add.collider(this.Wiggle, this.puertaC2);
        // Mueble cocina
        this.muebleCocina = this.physics.add.staticGroup().create(513,60,'muebleCocina').setScale(0.7).refreshBody();
        this.muebleCocina.interactuar = function () {
            return "muebleCocina";
        }
        this.objetosInteractuables.push(this.muebleCocina);
        this.physics.add.collider(this.Riddle, this.muebleCocina);
        this.physics.add.collider(this.Wiggle, this.muebleCocina);

        this.muebleCocina2 = this.physics.add.staticGroup().create(70,360,'muebleCocina2').setScale(0.65).refreshBody();

        // Puerta D - Baño Wiggle
        this.puertaD = this.physics.add.staticGroup().create(127,310,'puerta').setScale(0.7,0.4).refreshBody();
        this.puertaD.interactuar = function () {
            return "puertaD";
        }
        this.objetosInteractuables.push(this.puertaD);
        this.physics.add.collider(this.Riddle, this.puertaD);
        this.physics.add.collider(this.Wiggle, this.puertaD);

        // Simbolos en la pared del baño
        this.simboloPared = this.add.image(95, 295, 'simbolos').setScale(0.025);
        this.simboloPared.interactuar = function () {
            return "simboloPared";
        }
        this.objetosInteractuables.push(this.simboloPared);
        // Puerta almacén
        this.puertaAlmacen = this.physics.add.staticGroup().create(355,335,'puertaAlmacen').setScale(0.04).refreshBody();
        this.puertaAlmacen.interactuar = function () {
            return "puertaAlmacen";
        }
        this.objetosInteractuables.push(this.puertaAlmacen);
        this.physics.add.collider(this.Riddle, this.puertaAlmacen);
        this.physics.add.collider(this.Wiggle, this.puertaAlmacen);

        // Cómoda con las estatuas de gato
        this.comodaGatos = this.physics.add.staticGroup().create(230,58, 'comodaGatos').setScale(0.35,0.22).refreshBody();
        this.comodaGatos.interactuar = function () {
            return "comodaGatos";
        }
        this.objetosInteractuables.push(this.comodaGatos);
        this.physics.add.collider(this.Riddle, this.comodaGatos);
        this.physics.add.collider(this.Wiggle, this.comodaGatos);
        this.gatoAzul = this.add.image(214, 40, 'gatoAzul').setScale(0.03);
        this.gatoNaranja = this.add.image(222, 40, 'gatoNaranja').setScale(0.03);
        this.gatoBlanco = this.add.image(230, 40, 'gatoBlanco').setScale(0.03);
        this.gatoRojo = this.add.image(238, 40, 'gatoRojo').setScale(0.03);
        this.gatoVerde = this.add.image(246, 40, 'gatoVerde').setScale(0.03);
        
        // Cómoda con el mensaje de los gatos
        this.comodaMensaje = this.physics.add.staticGroup().create(303,53, 'comodaMensaje').setScale(0.25).refreshBody();
        this.comodaMensaje.interactuar = function () {
            return "comodaMensaje";
        }
        this.objetosInteractuables.push(this.comodaMensaje);
        this.physics.add.collider(this.Riddle, this.comodaMensaje);
        this.physics.add.collider(this.Wiggle, this.comodaMensaje);

        // Puerta biblioteca Riddle
        this.puertaBibliotecaRiddle = this.physics.add.staticGroup().create(643,200,'puerta2').setScale(0.56).refreshBody();
        this.puertaBibliotecaRiddle.interactuar = function () {
            return "puertaBR";
        }
        this.objetosInteractuables.push(this.puertaBibliotecaRiddle);
        this.physics.add.collider(this.Riddle, this.puertaBibliotecaRiddle);
        this.physics.add.collider(this.Wiggle, this.puertaBibliotecaRiddle);

        // Puerta biblioteca Wiggle
        this.puertaBibliotecaWiggle = this.physics.add.staticGroup().create(128,63,'puerta').setScale(0.7).refreshBody();
        this.puertaBibliotecaWiggle.interactuar = function () {
            return "puertaBW";
        }
        this.objetosInteractuables.push(this.puertaBibliotecaWiggle);
        this.physics.add.collider(this.Riddle, this.puertaBibliotecaWiggle);
        this.physics.add.collider(this.Wiggle, this.puertaBibliotecaWiggle);

        // Puerta laboratorio Riddle
        this.puertaLaboratorioRiddle = this.physics.add.staticGroup().create(544,367,'puerta').setScale(0.7,0.7).refreshBody();
        this.puertaLaboratorioRiddle.interactuar = function () {
            return "puertaLR";
        }
        this.objetosInteractuables.push(this.puertaLaboratorioRiddle);
        this.physics.add.collider(this.Riddle, this.puertaLaboratorioRiddle);
        this.physics.add.collider(this.Wiggle, this.puertaLaboratorioRiddle);

        // Puerta laboratorio Wiggle
        this.puertaLaboratorioWiggle = this.physics.add.staticGroup().create(544,367,'puerta').setScale(0.7,0.7).refreshBody();
        this.puertaLaboratorioWiggle.interactuar = function () {
            return "puertaLW";
        }
        this.objetosInteractuables.push(this.puertaLaboratorioWiggle);
        this.physics.add.collider(this.Riddle, this.puertaLaboratorioWiggle);
        this.physics.add.collider(this.Wiggle, this.puertaLaboratorioWiggle);

        // CREACIÓN DE LAS CAJA DE TEXTO Y DE SUS EVENTOS ASOCIADOS
        this.cajaTexto = this.add.image(630,530,'textBox').setScale(0.7);
        this.cajaTexto.visible = false;
        this.cajaTexto2 = this.add.image(170, 530, 'textBox').setScale(0.7);
        this.cajaTexto2.visible = false;
        this.eventoTiempo = this.time.addEvent({ delay: this.tiempoTexto, callback: this.DesaparecerCuadro, callbackScope: this});
        this.eventoTiempo.paused = true;
        this.eventoTiempo2 = this.time.addEvent({ delay: this.tiempoTexto2, callback: this.DesaparecerCuadro2, callbackScope: this});
        this.eventoTiempo2.paused = true;
        this.letra = this.time.addEvent({ delay: this.tiempoCaracter, callback: this.MostrarCaracteres, callbackScope: this});
        this.dialogo = this.add.text(505, 505, '', { fontSize: '12px', fill: '#ffffff' });
        this.dialogoB = this.add.text(505, 520, '', { fontSize: '12px', fill: '#ffffff' });
        this.dialogoC = this.add.text(505, 535, '', { fontSize: '12px', fill: '#ffffff' });
        this.letra.paused = true;
        this.letra2 = this.time.addEvent({ delay: this.tiempoCaracter, callback: this.MostrarCaracteres2, callbackScope: this});
        this.dialogo2 = this.add.text(45, 505, '', { fontSize: '12px', fill: '#ffffff' });
        this.dialogo2B = this.add.text(45, 520, '', { fontSize: '12px', fill: '#ffffff' });
        this.dialogo2C = this.add.text(45, 535, '', { fontSize: '12px', fill: '#ffffff' });
        this.letra2.paused = true;

        // CREACIÓN DE LAS IMÁGENES
        this.libroPiano1 = this.add.image(600,300,'libropiano1').setScale(0.25);
        this.libroPiano1.visible = false;
        this.libroPiano2 = this.add.image(200,300,'libropiano2').setScale(0.25);
        this.libroPiano2.visible = false;
        this.puzlePiano = this.add.image(200,300,'puzle piano').setScale(0.175);
        this.puzlePiano.visible = false;
        this.puzleFloresR1 = this.add.image(600,300,'puzle flores R1').setScale(0.175);
        this.puzleFloresR1.visible = false;
        this.puzleFloresR2 = this.add.image(600,300,'puzle flores R2').setScale(0.175);
        this.puzleFloresR2.visible = false;
        this.puzleFloresW1 = this.add.image(200,300,'puzle flores W1').setScale(0.175);
        this.puzleFloresW1.visible = false;
        this.puzleFloresW2 = this.add.image(200,300,'puzle flores W2').setScale(0.175);
        this.puzleFloresW2.visible = false;
        this.puzleSimbolos = this.add.image(600,300, 'puzle simbolos1').setScale(0.23);
        this.puzleSimbolos.visible = false;
        this.puzleSimbolos2 = this.add.image(200, 300, 'puzle simbolos2').setScale(0.23);
        this.puzleSimbolos2.visible = false;
        this.panelContraseña1 = this.add.image(600,300, 'cartel almacen 1').setScale(0.23);
        this.panelContraseña1.visible = false;
        this.panelContraseña2 = this.add.image(200,300, 'cartel almacen 2').setScale(0.23);
        this.panelContraseña2.visible = false;
        // Imágenes del puzle de los gatos
        this.puzleGatos1 = this.add.image(600, 300, 'puzle gatos 1').setScale(0.175);
        this.puzleGatos1.visible = false;
        this.puzleGatos2 = this.add.image(200,300, 'puzle gatos 2').setScale(0.175);
        this.puzleGatos2.visible = false;
        this.vela1AE = this.add.image(500, 257, 'velaEncendida').setScale(0.3);
        this.vela1AE.visible = false;
        this.vela2AE = this.add.image(555, 257, 'velaEncendida').setScale(0.3);
        this.vela2AE.visible = false;
        this.vela3AE = this.add.image(610, 257, 'velaEncendida').setScale(0.3);
        this.vela3AE.visible = false;
        this.vela4AE = this.add.image(670, 257, 'velaEncendida').setScale(0.3);
        this.vela4AE.visible = false;
        this.vela5AE = this.add.image(730, 257, 'velaEncendida').setScale(0.3);
        this.vela5AE.visible = false;
        this.vela1AN = this.add.image(500, 257, 'velaApagada').setScale(0.3);
        this.vela1AN.visible = false;
        this.vela2AN = this.add.image(555, 257, 'velaApagada').setScale(0.3);
        this.vela2AN.visible = false;
        this.vela3AN = this.add.image(610, 257, 'velaApagada').setScale(0.3);
        this.vela3AN.visible = false;
        this.vela4AN = this.add.image(670, 257, 'velaApagada').setScale(0.3);
        this.vela4AN.visible = false;
        this.vela5AN = this.add.image(730, 257, 'velaApagada').setScale(0.3);
        this.vela5AN.visible = false;
        this.vela1BE = this.add.image(100, 257, 'velaEncendida').setScale(0.3);
        this.vela1BE.visible = false;
        this.vela2BE = this.add.image(155, 257, 'velaEncendida').setScale(0.3);
        this.vela2BE.visible = false;
        this.vela3BE = this.add.image(210, 257, 'velaEncendida').setScale(0.3);
        this.vela3BE.visible = false;
        this.vela4BE = this.add.image(270, 257, 'velaEncendida').setScale(0.3);
        this.vela4BE.visible = false;
        this.vela5BE = this.add.image(330, 257, 'velaEncendida').setScale(0.3);
        this.vela5BE.visible = false;
        this.vela1BN = this.add.image(100, 257, 'velaApagada').setScale(0.3);
        this.vela1BN.visible = false;
        this.vela2BN = this.add.image(155, 257, 'velaApagada').setScale(0.3);
        this.vela2BN.visible = false;
        this.vela3BN = this.add.image(210, 257, 'velaApagada').setScale(0.3);
        this.vela3BN.visible = false;
        this.vela4BN = this.add.image(270, 257, 'velaApagada').setScale(0.3);
        this.vela4BN.visible = false;
        this.vela5BN = this.add.image(330, 257, 'velaApagada').setScale(0.3);
        this.vela5BN.visible = false;
        this.mensajeGatos1 = this.add.image(600,250, 'mensaje1').setScale(0.75);
        this.mensajeGatos1.visible = false;
        this.mensajeGatos2 = this.add.image(200,250, 'mensaje2').setScale(0.75);
        this.mensajeGatos2.visible = false;
        this.ingredientesNeveraR1 = this.add.image(600,300, 'ingredientesNeveraR1').setScale(0.165);
        this.ingredientesNeveraR1.visible = false;
        this.ingredientesNeveraR2 = this.add.image(600,300, 'ingredientesNeveraR2').setScale(0.165);
        this.ingredientesNeveraR2.visible = false;
        this.ingredientesNeveraW1 = this.add.image(200,300, 'ingredientesNeveraW1').setScale(0.165);
        this.ingredientesNeveraW1.visible = false;
        this.ingredientesNeveraW2 = this.add.image(200,300, 'ingredientesNeveraW2').setScale(0.165);
        this.ingredientesNeveraW2.visible = false;
        this.iconosNevera1[0] = this.add.image(568,255, 'icono').setScale(0.05);
        this.iconosNevera1[0].visible = false;
        this.iconosNevera1[1] = this.add.image(568,267, 'icono').setScale(0.05);
        this.iconosNevera1[1].visible = false;
        this.iconosNevera1[2] = this.add.image(568,279, 'icono').setScale(0.05);
        this.iconosNevera1[2].visible = false;
        this.iconosNevera1[3] = this.add.image(568,291, 'icono').setScale(0.05);
        this.iconosNevera1[3].visible = false;
        this.iconosNevera1[4] = this.add.image(568,303, 'icono').setScale(0.05);
        this.iconosNevera1[4].visible = false;
        this.iconosNevera1[5] = this.add.image(568,315, 'icono').setScale(0.05);
        this.iconosNevera1[5].visible = false;
        this.iconosNevera1[6] = this.add.image(568,327, 'icono').setScale(0.05);
        this.iconosNevera1[6].visible = false;
        this.iconosNevera2[0] = this.add.image(160,255, 'icono').setScale(0.05);
        this.iconosNevera2[0].visible = false;
        this.iconosNevera2[1] = this.add.image(160,267, 'icono').setScale(0.05);
        this.iconosNevera2[1].visible = false;
        this.iconosNevera2[2] = this.add.image(160,279, 'icono').setScale(0.05);
        this.iconosNevera2[2].visible = false;
        this.iconosNevera2[3] = this.add.image(160,291, 'icono').setScale(0.05);
        this.iconosNevera2[3].visible = false;
        this.iconosNevera2[4] = this.add.image(160,303, 'icono').setScale(0.05);
        this.iconosNevera2[4].visible = false;
        this.iconosNevera2[5] = this.add.image(160,315, 'icono').setScale(0.05);
        this.iconosNevera2[5].visible = false;
        this.iconosNevera2[6] = this.add.image(160,327, 'icono').setScale(0.05);
        this.iconosNevera2[6].visible = false;
        this.ingredientesCaldero2 = this.add.image(200,300, 'ingredientesCaldero2').setScale(0.165);
        this.ingredientesCaldero2.visible = false;
        this.ingrediente1B = this.add.text(45, 258, 'Ingrediente 1', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente1B.setText('');
        this.iconosCaldero2[0] = this.add.image(45,258,'icono').setScale(0.05);
        this.iconosCaldero2[0].visible = false;
        this.arrayIngredientesWiggle[0] = this.ingrediente1B;
        this.ingrediente2B = this.add.text(45, 270, 'Ingrediente 2', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente2B.setText('');
        this.iconosCaldero2[1] = this.add.image(45,270,'icono').setScale(0.05);
        this.iconosCaldero2[1].visible = false;
        this.arrayIngredientesWiggle[1] = this.ingrediente2B;
        this.ingrediente3B = this.add.text(45, 282, 'Ingrediente 3', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente3B.setText('');
        this.iconosCaldero2[2] = this.add.image(45,282,'icono').setScale(0.05);
        this.iconosCaldero2[2].visible = false;
        this.arrayIngredientesWiggle[2] = this.ingrediente3B;
        this.ingrediente4B = this.add.text(45, 294, 'Ingrediente 4', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente4B.setText('');
        this.iconosCaldero2[3] = this.add.image(45,294,'icono').setScale(0.05);
        this.iconosCaldero2[3].visible = false;
        this.arrayIngredientesWiggle[3] = this.ingrediente4B;
        this.ingrediente5B = this.add.text(45, 306, 'Ingrediente 5', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente5B.setText('');
        this.iconosCaldero2[4] = this.add.image(45,306,'icono').setScale(0.05);
        this.iconosCaldero2[4].visible = false;
        this.arrayIngredientesWiggle[4] = this.ingrediente5B;
        this.ingrediente6B = this.add.text(45, 318, 'Ingrediente 6', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente6B.setText('');
        this.iconosCaldero2[5] = this.add.image(45,318,'icono').setScale(0.05);
        this.iconosCaldero2[5].visible = false;
        this.arrayIngredientesWiggle[5] = this.ingrediente6A;
        this.ingrediente7B = this.add.text(45, 330, 'Ingrediente 7', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente7B.setText('');
        this.iconosCaldero2[6] = this.add.image(45,330,'icono').setScale(0.05);
        this.iconosCaldero2[6].visible = false;
        this.arrayIngredientesWiggle[6] = this.ingrediente7B;
        this.ingrediente8B = this.add.text(170, 258, 'Ingrediente 8', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente8B.setText('');
        this.iconosCaldero2[7] = this.add.image(170,258,'icono').setScale(0.05);
        this.iconosCaldero2[7].visible = false;
        this.arrayIngredientesWiggle[7] = this.ingrediente8B;
        this.ingrediente9B = this.add.text(170, 270, 'Ingrediente 9', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente9B.setText('');
        this.iconosCaldero2[8] = this.add.image(170,270,'icono').setScale(0.05);
        this.iconosCaldero2[8].visible = false;
        this.arrayIngredientesWiggle[8] = this.ingrediente9B;
        this.ingrediente10B = this.add.text(170, 282, 'Ingrediente 10', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente10B.setText('');
        this.iconosCaldero2[9] = this.add.image(170,282,'icono').setScale(0.05);
        this.iconosCaldero2[9].visible = false;
        this.arrayIngredientesWiggle[9] = this.ingrediente10B;
        this.ingrediente11B = this.add.text(170, 294, 'Ingrediente 11', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente11B.setText('');
        this.iconosCaldero2[10] = this.add.image(170,294,'icono').setScale(0.05);
        this.iconosCaldero2[10].visible = false;
        this.arrayIngredientesWiggle[10] = this.ingrediente11B;
        this.ingrediente12B = this.add.text(170, 306, 'Ingrediente 12', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente12B.setText('');
        this.iconosCaldero2[11] = this.add.image(170,306,'icono').setScale(0.05);
        this.iconosCaldero2[11].visible = false;
        this.arrayIngredientesWiggle[11] = this.ingrediente12B;
        this.ingrediente13B = this.add.text(170, 318, 'Ingrediente 13', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente13B.setText('');
        this.iconosCaldero2[12] = this.add.image(170,318,'icono').setScale(0.05);
        this.iconosCaldero2[12].visible = false;
        this.arrayIngredientesWiggle[12] = this.ingrediente13B;
        this.ingrediente14B = this.add.text(170, 330, 'Ingrediente 14', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente14B.setText('');
        this.iconosCaldero2[13] = this.add.image(170,330,'icono').setScale(0.05);
        this.iconosCaldero2[13].visible = false;
        this.arrayIngredientesWiggle[13] = this.ingrediente14B;
        this.ingredientesCaldero1 = this.add.image(600,300, 'ingredientesCaldero1').setScale(0.165);
        this.ingredientesCaldero1.visible = false;
        this.ingrediente1A = this.add.text(445, 258, 'Ingrediente 1', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente1A.setText('');
        this.iconosCaldero1[0] = this.add.image(445,258,'icono').setScale(0.05);
        this.iconosCaldero1[0].visible = false;
        this.arrayIngredientesRiddle[0] = this.ingrediente1A;
        this.ingrediente2A = this.add.text(445, 270, 'Ingrediente 2', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente2A.setText('');
        this.iconosCaldero1[1] = this.add.image(445,270,'icono').setScale(0.05);
        this.iconosCaldero1[1].visible = false;
        this.arrayIngredientesRiddle[1] = this.ingrediente2A;
        this.ingrediente3A = this.add.text(445, 282, 'Ingrediente 3', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente3A.setText('');
        this.iconosCaldero1[2] = this.add.image(445,282,'icono').setScale(0.05);
        this.iconosCaldero1[2].visible = false;
        this.arrayIngredientesRiddle[2] = this.ingrediente3A;
        this.ingrediente4A = this.add.text(445, 294, 'Ingrediente 4', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente4A.setText('');
        this.iconosCaldero1[3] = this.add.image(445,294,'icono').setScale(0.05);
        this.iconosCaldero1[3].visible = false;
        this.arrayIngredientesRiddle[3] = this.ingrediente4A;
        this.ingrediente5A = this.add.text(445, 306, 'Ingrediente 5', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente5A.setText('');
        this.iconosCaldero1[4] = this.add.image(445,306,'icono').setScale(0.05);
        this.iconosCaldero1[4].visible = false;
        this.arrayIngredientesRiddle[4] = this.ingrediente5A;
        this.ingrediente6A = this.add.text(445, 318, 'Ingrediente 6', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente6A.setText('');
        this.iconosCaldero1[5] = this.add.image(445,318,'icono').setScale(0.05);
        this.iconosCaldero1[5].visible = false;
        this.arrayIngredientesRiddle[5] = this.ingrediente6A;
        this.ingrediente7A = this.add.text(445, 330, 'Ingrediente 7', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente7A.setText('');
        this.iconosCaldero1[6] = this.add.image(445,330,'icono').setScale(0.05);
        this.iconosCaldero1[6].visible = false;
        this.arrayIngredientesRiddle[6] = this.ingrediente7A;
        this.ingrediente8A = this.add.text(570, 258, 'Ingrediente 8', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente8A.setText('');
        this.iconosCaldero1[7] = this.add.image(570,258,'icono').setScale(0.05);
        this.iconosCaldero1[7].visible = false;
        this.arrayIngredientesRiddle[7] = this.ingrediente8A;
        this.ingrediente9A = this.add.text(570, 270, 'Ingrediente 9', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente9A.setText('');
        this.iconosCaldero1[8] = this.add.image(570,270,'icono').setScale(0.05);
        this.iconosCaldero1[8].visible = false;
        this.arrayIngredientesRiddle[8] = this.ingrediente9A;
        this.ingrediente10A = this.add.text(570, 282, 'Ingrediente 10', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente10A.setText('');
        this.iconosCaldero1[9] = this.add.image(570,281,'icono').setScale(0.05);
        this.iconosCaldero1[9].visible = false;
        this.arrayIngredientesRiddle[9] = this.ingrediente10A;
        this.ingrediente11A = this.add.text(570, 294, 'Ingrediente 11', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente11A.setText('');
        this.iconosCaldero1[10] = this.add.image(570,294,'icono').setScale(0.05);
        this.iconosCaldero1[10].visible = false;
        this.arrayIngredientesRiddle[10] = this.ingrediente11A;
        this.ingrediente12A = this.add.text(570, 306, 'Ingrediente 12', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente12A.setText('');
        this.iconosCaldero1[11] = this.add.image(570,306,'icono').setScale(0.05);
        this.iconosCaldero1[11].visible = false;
        this.arrayIngredientesRiddle[11] = this.ingrediente12A;
        this.ingrediente13A = this.add.text(570, 318, 'Ingrediente 13', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente13A.setText('');
        this.iconosCaldero1[12] = this.add.image(570,318,'icono').setScale(0.05);
        this.iconosCaldero1[12].visible = false;
        this.arrayIngredientesRiddle[12] = this.ingrediente13A;
        this.ingrediente14A = this.add.text(570, 330, 'Ingrediente 14', { fontSize: '10px', fill: '#ffffff' });
        this.ingrediente14A.setText('');
        this.iconosCaldero1[13] = this.add.image(570,330,'icono').setScale(0.05);
        this.iconosCaldero1[13].visible = false;
        this.arrayIngredientesRiddle[13] = this.ingrediente14A;

        // TEXTO SOBRE EL PUZLE DE LAS FLORES
        this.plantaA1 = this.add.text(650, 250, 'Flor 1', { fontSize: '12px', fill: '#ffffff' });
        this.plantaA1.setText('');
        this.plantaB1 = this.add.text(650, 280, 'Flor 2', { fontSize: '12px', fill: '#ffffff' });
        this.plantaB1.setText('');
        this.plantaC1 = this.add.text(650, 310, 'Flor 3', { fontSize: '12px', fill: '#ffffff' });
        this.plantaC1.setText('');
        this.plantaA2 = this.add.text(250, 250, 'Flor 1', { fontSize: '12px', fill: '#ffffff' });
        this.plantaA2.setText('');
        this.plantaB2 = this.add.text(250, 280, 'Flor 2', { fontSize: '12px', fill: '#ffffff' });
        this.plantaB2.setText('');
        this.plantaC2 = this.add.text(250, 310, 'Flor 3', { fontSize: '12px', fill: '#ffffff' });
        this.plantaC2.setText('');
        this.temporizadorNuevoIntento = this.time.addEvent({ delay: 500, callback: this.NuevoIntentoPlantas, callbackScope: this});
        this.temporizadorNuevoIntento.paused = true;

        // TEXTO SOBRE EL PUZLE DE LOS SÍMBOLOS
        this.contraseña1 = this.add.text(580,315, '987', { fontSize: '24px', fill: '#ffffff' });
        this.contraseña1.setText('');
        this.contraseña2 = this.add.text(180,315, '987', { fontSize: '24px', fill: '#ffffff' });
        this.contraseña2.setText('');


        // EVENTO PARA LA RESOLUCIÓN DEL PUZLE DE LAS FLORES
        this.eventoTecladoJardin = this.input.keyboard.on('keydown', event =>
        {
            if(this.puzleFloresR1.visible) {

                if(event.key>=1&&event.key<=3&&this.clavesIntroducidas<3) {
                    var encontrado = false;
                    for(var i=0; i<this.floresJardin1.length; i++) {
                        if(this.nuevaPosicionFlores[i]===event.key) {
                            encontrado = true;
                        }
                    }
                    if(!encontrado&&this.nuevoIntento) {
                        this.nuevaPosicionFlores[this.clavesIntroducidas]=(event.key);
                        this.clavesIntroducidas++;
                        switch(this.clavesIntroducidas) {
                            case 1:
                                if(event.key==="1") {
                                    this.plantaA1.setText("Rosa roja");
                                }
                                if(event.key==="2") {
                                    this.plantaA1.setText("Clavel");
                                }
                                if(event.key==="3") {
                                    this.plantaA1.setText("Girasol");
                                }
                                break;
                            case 2:
                                if(event.key==="1") {
                                    this.plantaB1.setText("Rosa roja");
                                }
                                if(event.key==="2") {
                                    this.plantaB1.setText("Clavel");
                                }
                                if(event.key==="3") {
                                    this.plantaB1.setText("Girasol");
                                }
                                break;
                            case 3:
                                if(event.key==="1") {
                                    this.plantaC1.setText("Rosa roja");
                                }
                                if(event.key==="2") {
                                    this.plantaC1.setText("Clavel");
                                }
                                if(event.key==="3") {
                                    this.plantaC1.setText("Girasol");
                                }
                                break;
                        }
                    }
                }
                if(this.clavesIntroducidas==3) {
                    for(var i=0; i<this.floresJardin1.length; i++) {
                        this.floresJardin1[i] = this.nuevaPosicionFlores[i];
                        this.nuevaPosicionFlores[i] = 0;
                    }
                    this.ColocarFlores1();
                    this.juegoDetenidoRiddle = false;
                    this.OcultarPuzleR1();
                    this.clavesIntroducidas = 0;
                    this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;                   
                } 
            }
            
            if(this.puzleFloresR2.visible) {
                if(event.key>=1&&event.key<=3&&this.clavesIntroducidas<3) {
                var encontrado = false;
                for(var i=0; i<this.floresJardin2.length; i++) {
                    if(this.nuevaPosicionFlores[i]===event.key) {
                        encontrado = true;
                    }
                }
                if(!encontrado&&this.nuevoIntento) {
                    this.nuevaPosicionFlores[this.clavesIntroducidas]=(event.key);
                    this.clavesIntroducidas++;
                    switch(this.clavesIntroducidas) {
                        case 1:
                            if(event.key==="1") {
                                this.plantaA1.setText("Rosa blanca");
                            }
                            if(event.key==="2") {
                                this.plantaA1.setText("Lirio");
                            }
                            if(event.key==="3") {
                                this.plantaA1.setText("Tulipán");
                            }
                            break;
                        case 2:
                            if(event.key==="1") {
                                this.plantaB1.setText("Rosa blanca");
                            }
                            if(event.key==="2") {
                                this.plantaB1.setText("Lirio");
                            }
                            if(event.key==="3") {
                                this.plantaB1.setText("Tulipán");
                            }
                            break;
                        case 3:
                            if(event.key==="1") {
                                this.plantaC1.setText("Rosa blanca");
                            }
                            if(event.key==="2") {
                                this.plantaC1.setText("Lirio");
                            }
                            if(event.key==="3") {
                                this.plantaC1.setText("Tulipán");
                            }
                            break;
                    }
                }
            }
            if(this.clavesIntroducidas==3) {
                for(var i=0; i<this.floresJardin2.length; i++) {
                    this.floresJardin2[i] = this.nuevaPosicionFlores[i];
                    this.nuevaPosicionFlores[i] = 0;
                }
                this.ColocarFlores2();
                this.juegoDetenidoRiddle = false;
                this.OcultarPuzleR2();
                this.clavesIntroducidas = 0;
                this.nuevoIntento = false;
                this.temporizadorNuevoIntento.paused = false;                   
            }
            }

            if(this.puzleFloresW1.visible) {

                if(event.key>=1&&event.key<=3&&this.clavesIntroducidas<3) {
                    var encontrado = false;
                    for(var i=0; i<this.floresJardin1.length; i++) {
                        if(this.nuevaPosicionFlores[i]===event.key) {
                            encontrado = true;
                        }
                    }
                    if(!encontrado&&this.nuevoIntento) {
                        this.nuevaPosicionFlores[this.clavesIntroducidas]=(event.key);
                        this.clavesIntroducidas++;
                        switch(this.clavesIntroducidas) {
                            case 1:
                                if(event.key==="1") {
                                    this.plantaA2.setText("Rosa roja");
                                }
                                if(event.key==="2") {
                                    this.plantaA2.setText("Clavel");
                                }
                                if(event.key==="3") {
                                    this.plantaA2.setText("Girasol");
                                }
                                break;
                            case 2:
                                if(event.key==="1") {
                                    this.plantaB2.setText("Rosa roja");
                                }
                                if(event.key==="2") {
                                    this.plantaB2.setText("Clavel");
                                }
                                if(event.key==="3") {
                                    this.plantaB2.setText("Girasol");
                                }
                                break;
                            case 3:
                                if(event.key==="1") {
                                    this.plantaC2.setText("Rosa roja");
                                }
                                if(event.key==="2") {
                                    this.plantaC2.setText("Clavel");
                                }
                                if(event.key==="3") {
                                    this.plantaC2.setText("Girasol");
                                }
                                break;
                        }
                    }
                }
                if(this.clavesIntroducidas==3) {
                    for(var i=0; i<this.floresJardin1.length; i++) {
                        this.floresJardin1[i] = this.nuevaPosicionFlores[i];
                        this.nuevaPosicionFlores[i] = 0;
                    }
                    this.ColocarFlores1();
                    this.juegoDetenidoWiggle = false;
                    this.OcultarPuzleW1();
                    this.clavesIntroducidas = 0;
                    this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;                   
                } 
            }

            if(this.puzleFloresW2.visible) {
                if(event.key>=1&&event.key<=3&&this.clavesIntroducidas<3) {
                var encontrado = false;
                for(var i=0; i<this.floresJardin2.length; i++) {
                    if(this.nuevaPosicionFlores[i]===event.key) {
                        encontrado = true;
                    }
                }
                if(!encontrado&&this.nuevoIntento) {
                    this.nuevaPosicionFlores[this.clavesIntroducidas]=(event.key);
                    this.clavesIntroducidas++;
                    switch(this.clavesIntroducidas) {
                        case 1:
                            if(event.key==="1") {
                                this.plantaA2.setText("Rosa blanca");
                            }
                            if(event.key==="2") {
                                this.plantaA2.setText("Lirio");
                            }
                            if(event.key==="3") {
                                this.plantaA2.setText("Tulipán");
                            }
                            break;
                        case 2:
                            if(event.key==="1") {
                                this.plantaB2.setText("Rosa blanca");
                            }
                            if(event.key==="2") {
                                this.plantaB2.setText("Lirio");
                            }
                            if(event.key==="3") {
                                this.plantaB2.setText("Tulipán");
                            }
                            break;
                        case 3:
                            if(event.key==="1") {
                                this.plantaC2.setText("Rosa blanca");
                            }
                            if(event.key==="2") {
                                this.plantaC2.setText("Lirio");
                            }
                            if(event.key==="3") {
                                this.plantaC2.setText("Tulipán");
                            }
                            break;
                    }
                }
            }
            if(this.clavesIntroducidas==3) {
                for(var i=0; i<this.floresJardin2.length; i++) {
                    this.floresJardin2[i] = this.nuevaPosicionFlores[i];
                    this.nuevaPosicionFlores[i] = 0;
                }
                this.ColocarFlores2();
                this.juegoDetenidoWiggle = false;
                this.OcultarPuzleW2();
                this.clavesIntroducidas = 0;
                this.nuevoIntento = false;
                this.temporizadorNuevoIntento.paused = false;                   
            }
            }
            
            if(this.panelContraseña1.visible) {
                if(this.numeroDigitos==3) {
                    this.contraseña1.setText('');
                    this.numeroDigitos = 0;
                }
                if(this.numeroDigitos<=3&&event.key>=1&&event.key<=10) {
                    if(this.nuevoIntento) {
                        this.contraseñaSimbolos[this.numeroDigitos] = event.key;
                        this.numeroDigitos++;
                        var texto = "";
                        for(var i=0; i<this.numeroDigitos; i++) {
                            texto+=this.contraseñaSimbolos[i];
                        }
                        this.contraseña1.setText(texto);
                    }
                    this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;
                }
                if(this.numeroDigitos==3) {
                    this.ComprobarContraseñaSimbolos("R");                            
                }
            }

            if(this.panelContraseña2.visible) {
                if(this.numeroDigitos==3) {
                    this.contraseña2.setText('');
                    this.numeroDigitos = 0;
                }
                if(this.numeroDigitos<=3&&event.key>=1&&event.key<=10) {
                    if(this.nuevoIntento) {
                        this.contraseñaSimbolos[this.numeroDigitos] = event.key;
                        this.numeroDigitos++;
                        var texto = "";
                        for(var i=0; i<this.numeroDigitos; i++) {
                            texto+=this.contraseñaSimbolos[i];
                        }
                        this.contraseña2.setText(texto);
                    }
                    this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;
                }
                if(this.numeroDigitos==3) {
                    this.ComprobarContraseñaSimbolos("W");                            
                }
            }

            if(this.puzleGatos1.visible) {
                if(event.key>=1&&event.key<=5) {
                    if(this.nuevoIntento) {
                        switch(event.key) {
                            case '1':
                                if(this.vela1AE.visible) {
                                    this.vela1AE.visible = false;
                                    this.vela1AN.visible = true;
                                    this.velasEncendidas[0] = false;
                                }
                                else{
                                    this.vela1AE.visible = true;
                                    this.vela1AN.visible = false;
                                    this.velasEncendidas[0] = true;
                                }
                                break;
                            case '2':
                                if(this.vela2AE.visible) {
                                    this.vela2AE.visible = false;
                                    this.vela2AN.visible = true;
                                    this.velasEncendidas[1] = false;
                                }
                                else{
                                    this.vela2AE.visible = true;
                                    this.vela2AN.visible = false;
                                    this.velasEncendidas[1] = true;
                                }
                                break;

                            case '3':
                                if(this.vela3AE.visible) {
                                    this.vela3AE.visible = false;
                                    this.vela3AN.visible = true;
                                    this.velasEncendidas[2] = false;
                                }
                                else{
                                    this.vela3AE.visible = true;
                                    this.vela3AN.visible = false;
                                    this.velasEncendidas[2] = true;
                                }
                                break;
                            case '4':
                                if(this.vela4AE.visible) {
                                    this.vela4AE.visible = false;
                                    this.vela4AN.visible = true;
                                    this.velasEncendidas[3] = false;
                                }
                                else{
                                    this.vela4AE.visible = true;
                                    this.vela4AN.visible = false;
                                    this.velasEncendidas[3] = true;
                                }
                                break;
                            case '5':
                                if(this.vela5AE.visible) {
                                    this.vela5AE.visible = false;
                                    this.vela5AN.visible = true;
                                    this.velasEncendidas[4] = false;
                                }
                                else{
                                    this.vela5AE.visible = true;
                                    this.vela5AN.visible = false;
                                    this.velasEncendidas[4] = true;
                                }
                                break;
                        }
                        this.ComprobarVelasEncendidas();
                        this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;
                    }
                }
            }

            if(this.puzleGatos2.visible) {
                if(event.key>=1&&event.key<=5) {
                    if(this.nuevoIntento) {
                        switch(event.key) {
                            case '1':
                                if(this.vela1BE.visible) {
                                    this.vela1BE.visible = false;
                                    this.vela1BN.visible = true;
                                    this.velasEncendidas[0] = false;
                                }
                                else{
                                    this.vela1BE.visible = true;
                                    this.vela1BN.visible = false;
                                    this.velasEncendidas[0] = true;
                                }
                                break;
                            case '2':
                                if(this.vela2BE.visible) {
                                    this.vela2BE.visible = false;
                                    this.vela2BN.visible = true;
                                    this.velasEncendidas[1] = false;
                                }
                                else{
                                    this.vela2BE.visible = true;
                                    this.vela2BN.visible = false;
                                    this.velasEncendidas[1] = true;
                                }
                                break;

                            case '3':
                                if(this.vela3BE.visible) {
                                    this.vela3BE.visible = false;
                                    this.vela3BN.visible = true;
                                    this.velasEncendidas[2] = false;
                                }
                                else{
                                    this.vela3BE.visible = true;
                                    this.vela3BN.visible = false;
                                    this.velasEncendidas[2] = true;
                                }
                                break;
                            case '4':
                                if(this.vela4BE.visible) {
                                    this.vela4BE.visible = false;
                                    this.vela4BN.visible = true;
                                    this.velasEncendidas[3] = false;
                                }
                                else{
                                    this.vela4BE.visible = true;
                                    this.vela4BN.visible = false;
                                    this.velasEncendidas[3] = true;
                                }
                                break;
                            case '5':
                                if(this.vela5BE.visible) {
                                    this.vela5BE.visible = false;
                                    this.vela5BN.visible = true;
                                    this.velasEncendidas[4] = false;
                                }
                                else{
                                    this.vela5BE.visible = true;
                                    this.vela5BN.visible = false;
                                    this.velasEncendidas[4] = true;
                                }
                                break;
                        }
                        this.ComprobarVelasEncendidas();
                        this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;
                    }
                }
            }

            if(this.ingredientesNeveraR1.visible) {
                if(event.key>=1&&event.key<=7) {
                    if(this.nuevoIntento) {
                        switch(event.key) {
                            case '1':
                                this.inventarioRiddle.push("Pitahayas");
                                break;
                            case '2':
                                this.inventarioRiddle.push("Uvas");
                                break;
                            case '3':
                                this.inventarioRiddle.push("Zumo de tomate");
                                break;
                            case '4':
                                this.inventarioRiddle.push("Manzana");
                                break;
                            case '5':
                                this.inventarioRiddle.push("Pomelo");
                                break;
                            case '6':
                                this.inventarioRiddle.push("Calabaza");
                                break;
                            case '7':
                                this.inventarioRiddle.push("Zumo de piña");
                                break;
                        }
                    }
                    this.ComprobarInventarioRiddle1();
                    this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;
                }
            }

            if(this.ingredientesNeveraR2.visible) {
                if(event.key>=1&&event.key<=7) {
                    if(this.nuevoIntento) {
                        switch(event.key) {
                            case '1':
                                this.inventarioRiddle.push("Coco helado");
                                break;
                            case '2':
                                this.inventarioRiddle.push("Cerezas");
                                break;
                            case '3':
                                this.inventarioRiddle.push("Zumo de arandanos");
                                break;
                            case '4':
                                this.inventarioRiddle.push("Zumo de naranja");
                                break;
                            case '5':
                                this.inventarioRiddle.push("Limon");
                                break;
                            case '6':
                                this.inventarioRiddle.push("Sandia");
                                break;
                            case '7':
                                this.inventarioRiddle.push("Melon");
                                break;
                        }
                    }
                    this.ComprobarInventarioRiddle2();
                    this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;
                }
            }

            if(this.ingredientesNeveraW1.visible) {
                if(event.key>=1&&event.key<=7) {
                    if(this.nuevoIntento) {
                        switch(event.key) {
                            case '1':
                                this.inventarioWiggle.push("Pitahayas");
                                break;
                            case '2':
                                this.inventarioWiggle.push("Uvas");
                                break;
                            case '3':
                                this.inventarioWiggle.push("Zumo de tomate");
                                break;
                            case '4':
                                this.inventarioWiggle.push("Manzana");
                                break;
                            case '5':
                                this.inventarioWiggle.push("Pomelo");
                                break;
                            case '6':
                                this.inventarioWiggle.push("Calabaza");
                                break;
                            case '7':
                                this.inventarioWiggle.push("Zumo de piña");
                                break;
                        }
                    }
                    this.ComprobarInventarioWiggle1();
                    this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;
                }
                
            }

            if(this.ingredientesNeveraW2.visible) {
                if(event.key>=1&&event.key<=7) {
                    if(this.nuevoIntento) {
                        switch(event.key) {
                            case '1':
                                this.inventarioWiggle.push("Coco helado");
                                break;
                            case '2':
                                this.inventarioWiggle.push("Cerezas");
                                break;
                            case '3':
                                this.inventarioWiggle.push("Zumo de arandanos");
                                break;
                            case '4':
                                this.inventarioWiggle.push("Zumo de naranja");
                                break;
                            case '5':
                                this.inventarioWiggle.push("Limon");
                                break;
                            case '6':
                                this.inventarioWiggle.push("Sandia");
                                break;
                            case '7':
                                this.inventarioWiggle.push("Melon");
                                break;
                        }
                    }
                    this.ComprobarInventarioWiggle2();
                    this.nuevoIntento = false;
                    this.temporizadorNuevoIntento.paused = false;
                }
            }

            if(this.ingredientesCaldero1.visible) {
                if(this.numeroIngredientesIntroducidos1<3) {
                    switch(event.key) {
                        case '1':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[0].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(1);
                            }
                            break;
                        case '2':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[1].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(2);
                            }
                            break;
                        case '3':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[2].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(3);
                            }
                            break;
                        case '4':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[3].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(4);
                            }
                            break;
                        case '5':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[4].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(5);
                            }
                            break;
                        case '6':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[5].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(6);
                            }
                            break;
                        case '7':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[6].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(7);
                            }
                            break;
                        case '8':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[7].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(8);
                            }
                            break;
                        case '9':
                            if(event.key<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[8].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(9);
                            }
                            break;
                        case 'a':
                            if(10<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[9].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(10);
                            }
                            break;
                        case 'b':
                            if(11<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[10].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(11);
                            }
                            break;
                        case 'c':
                            if(12<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[11].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(12);
                            }
                            break;
                         case 'd':
                            if(13<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[12].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(13);
                            }
                            break;
                        case 'e':
                            if(14<=this.numeroIngredientesCaldero1) {
                                this.iconosCaldero1[13].visible = true;
                                this.numeroIngredientesIntroducidos1++;
                                this.AñadirIngredienteZafiro(14);
                            }
                            break;
                    }
                }
                if(this.numeroIngredientesIntroducidos1 == 3) {
                    this.ComprobarFormulaZafiro();
                    this.numeroIngredientesIntroducidos1 = 0;
                }
            }

            if(this.ingredientesCaldero2.visible) {
                if(this.numeroIngredientesIntroducidos2<3) {
                    switch(event.key) {
                        case '1':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[0].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(1);
                            }
                            break;
                        case '2':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[1].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(2);
                            }
                            break;
                        case '3':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[2].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(3);
                            }
                            break;
                        case '4':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[3].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(4);
                            }
                            break;
                        case '5':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[4].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(5);
                            }
                            break;
                        case '6':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[5].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(6);
                            }
                            break;
                        case '7':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[6].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(7);
                            }
                            break;
                        case '8':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[7].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(8);
                            }
                            break;
                        case '9':
                            if(event.key<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[8].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(9);
                            }
                            break;
                        case 'a':
                            if(10<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[9].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(10);
                            }
                            break;
                        case 'b':
                            if(11<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[10].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(11);
                            }
                            break;
                        case 'c':
                            if(12<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[11].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(12);
                            }
                            break;
                         case 'd':
                            if(13<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[12].visible = true;
                                this.numeroIngredientesIntroducidos2++;
                                this.AñadirIngredienteRubi(13);
                            }
                            break;
                        case 'e':
                            if(14<=this.numeroIngredientesCaldero2) {
                                this.iconosCaldero2[13].visible = true;
                                this.numeroIngredientesIntroducido2s++;
                                this.AñadirIngredienteRubi(14); 
                            }
                            break;
                    }
                }
                if(this.numeroIngredientesIntroducidos2 == 3) {
                    this.ComprobarFormulaRubi();
                    this.numeroIngredientesIntroducidos2 = 0;
                }
            }
        });

        // Temporizadores para más texto con las fórmulas de los elixires
        this.formulaRubi1 = this.time.addEvent({ delay: 10800, callback: this.MostrarTextoRubi1, callbackScope: this});
        this.formulaRubi1.paused = true;
        this.formulaZafiro1 = this.time.addEvent({ delay: 10800, callback: this.MostrarTextoZafiro1, callbackScope: this});
        this.formulaZafiro1.paused = true;
        this.formulaRubi2 = this.time.addEvent({ delay: 10800, callback: this.MostrarTextoRubi2, callbackScope: this});
        this.formulaRubi2.paused = true;
        this.formulaZafiro2 = this.time.addEvent({ delay: 10800, callback: this.MostrarTextoZafiro2, callbackScope: this});
        this.formulaZafiro2.paused = true;

        // COMBOS Y CONTRASEÑAS
        this.comboPiano = this.input.keyboard.createCombo('102365', {resetOnWrongKey: true, deleteOnMatch: true});

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
        if(!this.juegoDetenidoRiddle) {

            if (this.cursors.left.isDown)
                {
                    this.Riddle.setVelocityX(-40);
                }

            else if (this.cursors.right.isDown)
                {
                    this.Riddle.setVelocityX(40);
                }

            else if (this.cursors.up.isDown)
                {
                    this.Riddle.setVelocityY(-40);
                }

            else if (this.cursors.down.isDown)
                {
                    this.Riddle.setVelocityY(40);
                }

            if(this.cursors.left.isUp&&this.cursors.right.isUp&&this.cursors.up.isUp&&this.cursors.down.isUp) {
                    this.Riddle.setVelocityX(0);
                    this.Riddle.setVelocityY(0);
            }
        }


            this.input.keyboard.on('keydown_W', () =>{
                    if(!this.juegoDetenidoWiggle) {
                        this.Wiggle.setVelocityY(-40);
                    } 
                 });
            this.input.keyboard.on('keydown_A', () =>{ 
                if(!this.juegoDetenidoWiggle) {
                    this.Wiggle.setVelocityX(-40);
                } 
                 });
            this.input.keyboard.on('keydown_S', () =>{ 
                if(!this.juegoDetenidoWiggle) {
                    this.Wiggle.setVelocityY(40);
                } 
                 });
            this.input.keyboard.on('keydown_D', () =>{ 
                if(!this.juegoDetenidoWiggle) {
                    this.Wiggle.setVelocityX(40);
                } 
                 });

            this.input.keyboard.on('keyup_W', () =>{ 
                    this.Wiggle.setVelocityY(0);
                 });
            this.input.keyboard.on('keyup_A', () =>{ 
                    this.Wiggle.setVelocityX(0);
                 });
            this.input.keyboard.on('keyup_S', () =>{ 
                    this.Wiggle.setVelocityY(0);
                 });
            this.input.keyboard.on('keyup_D', () =>{ 
                    this.Wiggle.setVelocityX(0);
                 });
        
        // Cuando Wiggle interactua con un objeto
        this.input.keyboard.on('keydown_Q', () =>{ 
                this.ComprobarObjetoInteractuableJ2(); });
        // Cuando Riddle interactua con un objeto
        this.input.keyboard.on('keydown_SPACE', () =>{ 
                this.ComprobarObjetoInteractuableJ1(); });
        
                if(this.cajaTexto.visible){
                    this.juegoDetenidoRiddle = true;
                }
                if(this.cajaTexto2.visible){
                    this.juegoDetenidoWiggle = true;
                }
                if(this.libroPiano1.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarLibro1(); });
                }
    
                if(this.libroPiano2.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarLibro2(); });
                }
    
                if(this.puzlePiano.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarPuzlePiano(); });
                }

                if(this.puzleFloresR1.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarPuzleR1(); });
                }
    
                if(this.puzleFloresR2.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarPuzleR2(); });
                }
                if(this.puzleFloresW1.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarPuzleW1(); });
                }
                if(this.puzleFloresW2.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarPuzleW2(); });
                }
                if(this.puzleSimbolos.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarPuzleSimbolos1(); });
                }
                if(this.puzleSimbolos2.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarPuzleSimbolos2(); });
                }
                if(this.panelContraseña1.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarPuzleContraseña1(); });
                }
                if(this.panelContraseña2.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarPuzleContraseña2(); });
                }
                if(this.puzleGatos1.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarPuzleGatos1(); });
                }
                if(this.puzleGatos2.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarPuzleGatos2(); });
                }
                if(this.mensajeGatos1.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarMensajeGatos1(); });
                }
                if(this.mensajeGatos2.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarMensajeGatos2(); });
                }

                if(this.ingredientesNeveraR1.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarIngredientesNeveraR1(); });
                }
                if(this.ingredientesNeveraR2.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarIngredientesNeveraR2(); });
                }
                if(this.ingredientesNeveraW1.visible) {
                    this.juegoDetenidoWiggle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle= false;
                    this.OcultarIngredientesNeveraW1(); });
                }
                if(this.ingredientesNeveraW2.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarIngredientesNeveraW2(); });
                }
                if(this.ingredientesCaldero1.visible) {
                    this.juegoDetenidoRiddle = true;
                    this.input.keyboard.on('keydown_SHIFT', () =>{ 
                        this.juegoDetenidoRiddle = false;
                    this.OcultarIngredientesCaldero1(); });
                }
                if(this.ingredientesCaldero2.visible) {
                    this.juegoDetenidoWiddle = true;
                    this.input.keyboard.on('keydown_ENTER', () =>{ 
                        this.juegoDetenidoWiggle = false;
                    this.OcultarIngredientesCaldero2(); });
                }

                this.input.keyboard.on('keycombomatch', event =>
                {
                    this.ComprobarComboPiano();
                });    
        
        this.InicioAbarrotadoResuelto();
        this.EntrePetalosResuelto();
        this.JardinEnArmoniaResuelto();
        this.SecretoEnLosFogonesResuelto();
        this.EnigmaAlmacenResuelto();
        this.LlamasFelinasResuelto();
        this.ComprobarMaestroMezclas();
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
                this.muros.create(67,310,'plataforma2').setScale(0.17,0.07).refreshBody();
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

    // Funciones que comprueban la distancia de los jugadores con todos los objetos, para saber con cuál interactuar
    ComprobarObjetoInteractuableJ1 () {
        for(var i=0; i<this.objetosInteractuables.length; i++) {
            var objeto = this.objetosInteractuables[i];
            if(objeto!=undefined) {
                if(Phaser.Math.Distance.Between(objeto.x,objeto.y,this.Riddle.x,this.Riddle.y)<40 && !this.mostrandoTexto) {
                    this.InteraccionJugador1(objeto.interactuar());
                }
            }
        }
    }
    
    ComprobarObjetoInteractuableJ2 () {
        for(var i=0; i<this.objetosInteractuables.length; i++) {
            var objeto = this.objetosInteractuables[i];
            if(objeto!=undefined) {
                if(Phaser.Math.Distance.Between(objeto.x,objeto.y,this.Wiggle.x,this.Wiggle.y)<40 && !this.mostrandoTexto2) {
                    this.InteraccionJugador2(objeto.interactuar());
                }
            }
        }
    }

    ////////////////////////////// SISTEMA DE DIÁLOGO //////////////////////////////
    MostrarTexto(texto) {
        this.juegoDetenidoRiddle = true;
        this.stringTexto = new String(texto);
        this.numeroCaracteres = this.stringTexto.length;
        this.tiempoTexto = this.tiempoCaracter * this.numeroCaracteres + this.tiempoEsperaCuadro;
        this.eventoTiempo = this.time.addEvent({ delay: this.tiempoTexto, callback: this.DesaparecerCuadro, callbackScope: this});
        this.eventoTiempo.paused = false;
        this.mostrandoTexto = true;
        this.cajaTexto.visible = true;
        this.letra.paused = false;
    }

    MostrarTexto2(texto) {
        this.juegoDetenidoWiggle = true;
        this.stringTexto2 = new String(texto);
        this.numeroCaracteres2 = this.stringTexto2.length;
        this.tiempoTexto2 = this.tiempoCaracter * this.numeroCaracteres2 + this.tiempoEsperaCuadro;
        this.eventoTiempo2 = this.time.addEvent({ delay: this.tiempoTexto2, callback: this.DesaparecerCuadro2, callbackScope: this});
        this.eventoTiempo2.paused = false;
        this.mostrandoTexto2 = true;
        this.cajaTexto2.visible = true;
        this.letra2.paused = false;
    }

    MostrarCaracteres() {
        // Se comprueba si se escribe en la línea 1 o en la línea 2
        if(this.indiceLetra>28 && this.linea1) {
            if(this.stringTexto[this.indiceLetra]===" ") {
                this.linea1 = false;
                this.linea2 = true;
                this.indiceLetra++;
            }
        }
        if(this.indiceLetra>60 && this.linea2) {
            if(this.stringTexto[this.indiceLetra]===" ") {
                this.linea2 = false;
                this.linea3 = true;
                this.indiceLetra++;
            }
        }
        if(this.linea1) {                        
            this.dialogoCargado += this.stringTexto[this.indiceLetra];
            this.indiceLetra++;
            this.dialogo.setText(this.dialogoCargado);
        }
        if(this.linea2) {
            this.dialogoCargadoB += this.stringTexto[this.indiceLetra];
            this.indiceLetra++;
            this.dialogoB.setText(this.dialogoCargadoB);
        }
        if(this.linea3) {
            this.dialogoCargadoC += this.stringTexto[this.indiceLetra];
            this.indiceLetra++;
            this.dialogoC.setText(this.dialogoCargadoC);
        }
        this.letra = this.time.addEvent({ delay: this.tiempoCaracter, callback: this.MostrarCaracteres, callbackScope: this});
        this.letra.paused = true;
        
        if(this.indiceLetra<this.numeroCaracteres) {
            this.letra.paused = false;
        }
        else {
            this.indiceLetra = 0;
            this.dialogoCargado = "";
            this.dialogoCargadoB = "";
            this.dialogoCargadoC = "";
        }
    }

    MostrarCaracteres2() {
        if(this.indiceLetra2>28 && this.linea1b) {
            if(this.stringTexto2[this.indiceLetra2]===" ") {
                this.linea1b = false;
                this.linea2b = true;
                this.indiceLetra2++;
            }
        }
        if(this.indiceLetra2>60 && this.linea2b) {
            if(this.stringTexto2[this.indiceLetra2]===" ") {
                this.linea2b = false;
                this.linea3b = true;
                this.indiceLetra2++;
            }
        }
        if(this.linea1b) {                        
            this.dialogoCargado2 += this.stringTexto2[this.indiceLetra2];
            this.indiceLetra2++;
            this.dialogo2.setText(this.dialogoCargado2);
        }
        if(this.linea2b) {
            this.dialogoCargado2B += this.stringTexto2[this.indiceLetra2];
            this.indiceLetra2++;
            this.dialogo2B.setText(this.dialogoCargado2B);
        }
        if(this.linea3b) {
            this.dialogoCargado2C += this.stringTexto2[this.indiceLetra2];
            this.indiceLetra2++;
            this.dialogo2C.setText(this.dialogoCargado2C);
        }
        this.letra2 = this.time.addEvent({ delay: this.tiempoCaracter, callback: this.MostrarCaracteres2, callbackScope: this});
        this.letra2.paused = true;

        if(this.indiceLetra2<this.numeroCaracteres2) {
            this.letra2.paused = false;
        }
        else {
            this.indiceLetra2 = 0;
            this.dialogoCargado2 = "";
            this.dialogoCargado2B = "";
            this.dialogoCargado2C = "";
        }
    }
    
    // Función encargada de desaparecer el cuadro de texto
    DesaparecerCuadro () {
        this.juegoDetenidoRiddle = false;
        this.mostrandoTexto = false;
        this.dialogo.setText('');
        this.dialogoB.setText('');
        this.dialogoC.setText('');
        this.linea1 = true;
        this.linea2 = false;
        this.linea3 = false;
        this.cajaTexto.visible = false;
        // Se le añade de nuevo el evento para que pueda volver a suceder
        this.eventoTiempo = this.time.addEvent({ delay: this.tiempoTexto, callback: this.DesaparecerCuadro, callbackScope: this});
        this.eventoTiempo.paused = true;
    }

    DesaparecerCuadro2() {
        this.juegoDetenidoWiggle = false;
        this.mostrandoTexto2 = false;
        this.dialogo2.setText('');
        this.dialogo2B.setText('');
        this.dialogo2C.setText('');
        this.linea1b = true;
        this.linea2b = false;
        this.linea3b = false;
        this.cajaTexto2.visible = false;
        // Se le añade de nuevo el evento para que pueda volver a suceder
        this.eventoTiempo2 = this.time.addEvent({ delay: this.tiempoTexto2, callback: this.DesaparecerCuadro2, callbackScope: this});
        this.eventoTiempo2.paused = true;
    }

    //////////////////////// INTERACCIÓN DE LOS JUGADORES CON LOS OBJETOS
    // FUNCIONES ENCARGADAS DE TODOS LOS EVENTOS QUE SUCEDEN AL INTERACTUAR CON LOS OBJETOS
                // RIDDLE
                InteraccionJugador1(objeto) {

                    if(objeto === "caja") {
                        var frase = "Yo puedo quitar estas cajas para poder salir de la habitación. Así seguiremos avanzando.";
                        this.MostrarTexto(frase);
                        this.inicioAbarrotado = true;
                    }
                    if(objeto === "piano") {
                        var frase;
                        if(this.estanteria1_interactuada&&this.estanteria2_interactuada) {
                            frase = "Estoy seguro de que el piano es la clave para seguir avanzando, pero yo no sé tocarlo...";
                        }
                        else {
                            frase = "Qué curioso que haya aquí un piano...";
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto === "estanteria1") {
                        var frase = "En este libro aparece un mensaje muy raro... A C# D F E, no sé qué querrá decir.";
                        this.MostrarTexto(frase);
                        this.estanteria1_interactuada = true;
                    }
                    if(objeto === "estanteria2") {
                        var frase = "Aquí aparece una imagen de un teclado con unas letras.";
                        this.MostrarTexto(frase);
                        this.estanteria2_interactuada = true;
                        this.libroPiano1.visible = true;
                    }
                    if(objeto ==="puertaA") {
                        var frase = "No tenemos la llave para abrir esta puerta...";
                        this.MostrarTexto(frase);
                    }
                    if(objeto === "mesaLlave" && !this.fragmentoMesa) {
                        this.numeroFragmentosLlave++;
                        this.inventarioRiddle.push("Fragmento de llave");
                        this.fragmentoMesa = true;
                        var frase;
                        if(this.numeroFragmentosLlave==3) {
                            frase = "¡Anda! Debajo de la mesa había un fragmento de llave. Ya puedo formar una completa.";
                            this.entrePetalos = true;
                            this.inventarioRiddle.push("Llave jardines");
                        }
                        else {
                            frase = "¡Anda! Debajo de la mesa había un fragmento de llave";
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto === "cajonesLlave"&&!this.fragmentoCajones) {
                        this.numeroFragmentosLlave++;
                        this.inventarioRiddle.push("Fragmento de llave");
                        this.fragmentoCajones = true;
                        var frase;
                        if(this.numeroFragmentosLlave==3) {
                            frase = "Entre los cajones he encontrado un fragmento de llave. Ya puedo formar una completa.";
                            this.entrePetalos = true;
                            this.inventarioRiddle.push("Llave jardines");
                        }
                        else {
                            frase = "Entre los cajones he encontrado un fragmento de llave";
                        }
                        this.MostrarTexto(frase);

                    }
                    if(objeto === "fragmentoLlaveB"&&!this.fragmentoSuelo) {
                        this.numeroFragmentosLlave++;
                        this.inventarioRiddle.push("Fragmento de llave");
                        this.fragmentoSuelo = true;
                        var frase;
                        if(this.numeroFragmentosLlave==3) {
                            frase = "Esto parece un fragmento de llave. Ya puedo formar una completa.";
                            this.entrePetalos = true;
                            this.inventarioRiddle.push("Llave jardines");
                        }
                        else {
                            frase = "Esto parece un fragmento de llave. Si consigo otros dos más podré formar una.";
                        }
                        this.MostrarTexto(frase);
                        this.fragmento1LlaveB.visible = false;
                    }
                    if(objeto ==="puertaB") {
                        var llave = false;
                        for(var i=0; i<this.inventarioRiddle.length; i++) {
                            if(this.inventarioRiddle[i]==="Llave jardines") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "¡La llave que hemos construido encaja perfectamente!";
                            this.MostrarTexto(frase);
                            this.puertaB.disableBody(true,true);
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto(frase);
                        }
                    }

                    if(objeto ==="puertaB2") {
                        var llave = false;
                        for(var i=0; i<this.inventarioRiddle.length; i++) {
                            if(this.inventarioRiddle[i]==="Llave jardines") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "¡La llave que hemos construido encaja perfectamente!";
                            this.MostrarTexto(frase);
                            this.puertaB2.disableBody(true,true);
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto(frase);
                        }
                    }

                    if(objeto === "mesaJardin1") {
                        var frase;
                        if(!this.cuadrosInteractuados) {
                            frase = "Unos girasoles, unas rosas rojas y unos claveles hay en este jardín, qué bonitas flores. "
                        }
                        else {
                            frase = "Voy a tratar de colocar las flores correctamente...";
                            this.juegoDetenidoRiddle = true;
                            this.puzleFloresR1.visible = true;
                        }
                        if(this.jardinEnArmonia) {
                            frase = "Colocadas como en los cuadros, las flores quedan más bonitas."
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto === "mesaJardin2") {
                        var frase;
                        if(!this.cuadrosInteractuados) {
                            frase = "Unas rosas blancas, unos lirios y unos tulipanes hay en este jardín, qué bonitas flores. "
                        }
                        else {
                            frase = "Voy a tratar de colocar las flores correctamente...";
                            this.juegoDetenidoRiddle = true;
                            this.puzleFloresR2.visible = true;
                        }
                        if(this.jardinEnArmonia) {
                            frase = "Colocadas como en los cuadros, las flores quedan más bonitas."
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto === "cuadro1") {
                        var frase = "¡Si son las flores del jardín de Wiggle: lirio, tulipán y rosa blanca! ¿Habrá que colocarlas así?";
                        if(this.jardinEnArmonia) {
                            frase = "Colocadas como en los cuadros, las flores quedan más bonitas."
                        }
                        this.MostrarTexto(frase);
                        this.cuadrosInteractuados = true;
                    }
                    if(objeto === "cuadro2") {
                        var frase = "¡Si son las flores de mi jardín: rosa roja, girasol y clavel! ¿Habrá que colocarlas así?";
                        if(this.jardinEnArmonia) {
                            frase = "Colocadas como en los cuadros, las flores quedan más bonitas."
                        }
                        this.MostrarTexto(frase);
                        this.cuadrosInteractuados = true;
                    }
                    if(objeto === "puertaC") {
                        var llave = false;
                        for(var i=0; i<this.inventarioRiddle.length; i++) {
                            if(this.inventarioRiddle[i]==="Llave cocinas") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "¡La llave que cayó del árbol funciona y abre la puerta!";
                            this.MostrarTexto(frase);
                            this.puertaC.disableBody(true,true);
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto(frase);
                        }
                    }
                    if(objeto === "puertaC2") {
                        var llave = false;
                        for(var i=0; i<this.inventarioRiddle.length; i++) {
                            if(this.inventarioRiddle[i]==="Llave cocinas") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "¡La llave que cayó del árbol funciona y abre la puerta!";
                            this.MostrarTexto(frase);
                            this.puertaC2.disableBody(true,true);
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto(frase);
                        }
                    }
                    if(objeto === "muebleCocina") {
                        this.secretoFogones = true;
                        this.resuelveFogones = "R";
                    }
                    if(objeto === "puertaD") {
                        var llave = false;
                        for(var i=0; i<this.inventarioRiddle.length; i++) {
                            if(this.inventarioRiddle[i]==="Llave baño") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "Sabía que esta llave abriría una puerta para Wiggle, todo siempre está donde no debe...";
                            this.MostrarTexto(frase);
                            this.puertaD.visible = false;
                            this.simboloPared.visible = true;
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto(frase);
                        }
                    }
                    if(objeto === "simboloPared") {
                        frase = "Estos signos son muy raros, no entiendo nada.";
                        this.MostrarTexto(frase);
                        this.juegoDetenidoRiddle = true;
                        this.puzleSimbolos.visible = true;
                    }
                    if(objeto === "puertaAlmacen"&&this.puertaAlmacen.visible) {
                        var frase = "Esta puerta no tiene cerradura, pero tiene un cartel y varios números... Sus símbolos me suenan.";
                        this.MostrarTexto(frase);
                        this.juegoDetenidoRiddle = true;
                        this.panelContraseña1.visible = true;
                    }
                    if(objeto === "candelabro") {
                        var frase = "Este candelabro encendido no encaja del todo en el almacén. Voy a guardarlo por si luego es útil .";
                        this.MostrarTexto(frase);
                        this.candelabro.visible = false;
                        this.inventarioRiddle.push("Candelabro");
                    }
                    if(objeto === "comodaGatos") {
                        var frase;
                        var candelabro = false;
                        for(var i=0; i<this.inventarioRiddle.length; i++) {
                            if(this.inventarioRiddle[i]==="Candelabro") {
                                candelabro = true;
                            }
                        }
                        if(!candelabro) {
                            frase = "Estas estatuillas de gato y las velas que tienen encima significarán algo importante...";
                        }
                        if(!this.mensajeObtenido && candelabro) {
                            frase = "Encima de las estatuillas de los gatos hay unas velas apagadas, ¿podría encenderlas con el candelabro?";
                        }
                        if(this.mensajeObtenido && candelabro&&!this.llamasFelinas) {
                            frase = "El mensaje hablaba de los gatos, ¡debo encender las velas de rubí y zafiro!";
                            this.juegoDetenidoRiddle = true;
                            this.PrepararVelasRiddle();
                        }
                        if(this.llamasFelinas) {
                            frase = "Qué manera tan curiosa de ponernos a prueba...";
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto === "comodaMensaje") {
                        var frase = "En el cajón de esta cómoda hay una nota muy sospechosa... Esos colores me recuerdan a algo.";
                        this.MostrarTexto(frase);
                        this.juegoDetenidoRiddle = true;
                        this.mensajeGatos1.visible = true;
                        this.mensajeObtenido = true;
                    }
                    if(objeto==="estanteria3") {
                        var frase = "Un toque de fuego ligado a una dulzura teñida de rojo originan el elixir del rubí.";
                        this.MostrarTexto(frase);
                        if(!this.estanteria3_interactuada) {
                            this.formulaRubi1.paused = false;
                        }
                        this.estanteria3_interactuada = true;
                    }
                    if(objeto==="estanteria4") {
                        var frase = "La frialdad de un amargo invierno se tiñe de azul y crea el elixir del zafiro.";
                        this.MostrarTexto(frase);
                        if(!this.estanteria4_interactuada) {
                            this.formulaZafiro1.paused = false;
                        }
                        this.estanteria4_interactuada = true;
                    }
                    if(objeto==="calderoRubi") {
                        var frase;
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada&&!this.neveras) {
                            frase = "En este caldero podemos fabricar el elixir del rubí, necesitamos traer los ingredientes.";
                        }
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada&&this.neveras) {
                            frase = "Wiggle se tiene que encargar de conseguir el elixir de rubí...";
                        }
                        if(!this.estanteria3_interactuada&&!this.estanteria4_interactuada) {
                            frase = "Seguro que este caldero es muy importante, tiene un rubí en su superficie.";
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto==="calderoZafiro") {
                        var frase;
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada&&!this.neveras) {
                            frase = "En este caldero podemos fabricar el elixir del zafiro, necesitamos traer los ingredientes.";
                        }
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada&&this.neveras&&!this.elixirZafiro) {
                            frase = "Tengo que tener cuidado al escoger los ingredientes y seguir la fórmula...";
                            this.juegoDetenidoRiddle = true;
                            // Mostrar el panel para echar los ingredientes
                            this.ingredientesCaldero1.visible = true;
                            this.PrepararIngredientesZafiro();
                        }
                        if(!this.estanteria3_interactuada&&!this.estanteria4_interactuada) {
                            frase = "Seguro que este caldero es muy importante, tiene un zafiro en su superficie."
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto==="nevera1") {
                        var frase;
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada) {
                            this.neveras = true;
                            frase = "A ver qué puedo coger de todo lo que hay aquí...";
                            this.juegoDetenidoRiddle = true;
                            // Mostrar lista de ingredientes
                            this.ingredientesNeveraR1.visible = true;
                            this.ComprobarInventarioRiddle1();
                        }
                        else {
                            frase = "Hay cosas en buen estado en la nevera que se podrían aprovechar...";
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto==="nevera2") {
                        var frase;
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada) {
                            this.neveras = true;
                            frase = "A ver qué puedo coger de todo lo que hay aquí...";
                            this.juegoDetenidoRiddle = true;
                            // Mostrar lista de ingredientes
                            this.ingredientesNeveraR2.visible = true;
                            this.ComprobarInventarioRiddle2();
                        }
                        else {
                            frase = "Hay cosas en buen estado en la nevera que se podrían aprovechar...";
                        }
                        this.MostrarTexto(frase);
                    }
                    if(objeto==="puertaBR"||objeto==="puertaBW"||objeto==="puertaLR"||objeto==="puertaLW") {
                        var frase = "No tenemos la llave para abrir esta puerta...";
                        this.MostrarTexto(frase);
                    }
                }
                // WIGGLE
                InteraccionJugador2(objeto) {

                    if(objeto === "caja") {
                        var frase = "Estas cajas son demasiado pesadas y me impiden salir de la habitación. No sé qué hacer...";
                        this.MostrarTexto2(frase);
                    }
                    if(objeto === "piano") {
                        var frase;
                        if(this.estanteria1_interactuada&&this.estanteria2_interactuada) {
                            frase = "Ahora lo entiendo, lo que decía en los libros... ¡Debo tocar las notas correctas!";
                            this.juegoDetenidoWiggle = true;
                            this.puzlePiano.visible = true;
                        }
                        else {
                            frase = "Qué curioso que haya aquí un piano...";
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto === "estanteria1") {
                        var frase = "En este libro aparece un mensaje muy raro... A C# D F E, no sé qué querrá decir.";
                        this.MostrarTexto2(frase);
                        this.estanteria1_interactuada = true;
                    }
                    if(objeto === "estanteria2") {
                        var frase = "Aquí aparece una imagen de un teclado con unas letras.";
                        this.MostrarTexto2(frase);
                        this.estanteria2_interactuada = true;
                        this.libroPiano2.visible = true;
                    }
                    if(objeto ==="puertaA") {
                        var llave = false;
                        for(var i=0; i<this.inventarioWiggle.length; i++) {
                            if(this.inventarioWiggle[i]==="Llave habitación") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "Con la llave del piano puedo abrir esta puerta y Riddle podrá salir de aquí.";
                            this.MostrarTexto2(frase);
                            this.puertaA.visible = false;
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto2(frase);
                        }
                    }
                    if(objeto === "mesaLlave" && !this.fragmentoMesa) {
                        this.numeroFragmentosLlave++;
                        this.inventarioWiggle.push("Fragmento de llave");
                        this.fragmentoMesa = true;
                        var frase;
                        if(this.numeroFragmentosLlave==3) {
                            frase = "¡Anda! Debajo de la mesa había un fragmento de llave. Ya puedo formar una completa.";
                            this.entrePetalos = true;
                            this.inventarioWiggle.push("Llave jardines");
                        }
                        else {
                            frase = "¡Anda! Debajo de la mesa había un fragmento de llave";
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto === "cajonesLlave"&&!this.fragmentoCajones) {
                        this.numeroFragmentosLlave++;
                        this.inventarioWiggle.push("Fragmento de llave");
                        this.fragmentoCajones = true;
                        var frase;
                        if(this.numeroFragmentosLlave==3) {
                            frase = "Entre los cajones he encontrado un fragmento de llave. Ya puedo formar una completa.";
                            this.entrePetalos = true;
                            this.inventarioWiggle.push("Llave jardines");
                        }
                        else {
                            frase = "Entre los cajones he encontrado un fragmento de llave";
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto === "fragmentoLlaveB"&&!this.fragmentoSuelo) {
                        this.numeroFragmentosLlave++;
                        this.inventarioWiggle.push("Fragmento de llave");
                        this.fragmentoSuelo = true;
                        var frase;
                        if(this.numeroFragmentosLlave==3) {
                            frase = "Esto parece un fragmento de llave. Ya puedo formar una completa.";
                            this.entrePetalos = true;
                            this.inventarioWiggle.push("Llave jardines");
                        }
                        else {
                            frase = "Esto parece un fragmento de llave. Si consigo más podré formar una completa.";
                        }
                        this.MostrarTexto2(frase);
                        this.fragmento1LlaveB.visible = false;
                    }
                    if(objeto ==="puertaB") {
                        var llave = false;
                        for(var i=0; i<this.inventarioWiggle.length; i++) {
                            if(this.inventarioWiggle[i]==="Llave jardines") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "¡La llave que hemos construido encaja perfectamente!";
                            this.MostrarTexto2(frase);
                            this.puertaB.disableBody(true,true);
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto2(frase);
                        }
                    }
                    if(objeto ==="puertaB2") {
                        var llave = false;
                        for(var i=0; i<this.inventarioWiggle.length; i++) {
                            if(this.inventarioWiggle[i]==="Llave jardines") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "¡La llave que hemos construido encaja perfectamente!";
                            this.MostrarTexto2(frase);
                            this.puertaB2.disableBody(true,true);
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto2(frase);
                        }
                    }
                    if(objeto === "mesaJardin1") {
                        var frase;
                        if(!this.cuadrosInteractuados) {
                            frase = "Unos girasoles, unas rosas rojas y unos claveles hay en este jardín, qué bonitas flores. ";
                        }
                        else {
                            frase = "Voy a tratar de colocar las flores correctamente...";
                            this.juegoDetenidoWiggle = true;
                            this.puzleFloresW1.visible = true;
                        }
                        if(this.jardinEnArmonia) {
                            frase = "Colocadas como en los cuadros, las flores quedan más bonitas."
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto === "mesaJardin2") {
                        var frase;
                        if(!this.cuadrosInteractuados) {
                            frase = "Unas rosas blancas, unos lirios y unos tulipanes hay en este jardín, qué bonitas flores. ";
                        }
                        else {
                            frase = "Voy a tratar de colocar las flores correctamente...";
                            this.juegoDetenidoWiggle = true;
                            this.puzleFloresW2.visible = true;
                        }
                        if(this.jardinEnArmonia) {
                            frase = "Colocadas como en los cuadros, las flores quedan más bonitas."
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto === "cuadro1") {
                        var frase = "¡Si son las flores de mi jardín: lirio, tulipán y rosa blanca! ¿Habrá que colocarlas así?";
                        if(this.jardinEnArmonia) {
                            frase = "Colocadas como en los cuadros, las flores quedan más bonitas."
                        }
                        this.MostrarTexto2(frase);
                        this.cuadrosInteractuados = true;
                    }
                    if(objeto === "cuadro2") {
                        var frase = "¡Si son las flores del jardín de Riddle: rosa roja, girasol y clavel! ¿Habrá que colocarlas así?";
                        if(this.jardinEnArmonia) {
                            frase = "Colocadas como en los cuadros, las flores quedan más bonitas."
                        }
                        this.MostrarTexto2(frase);
                        this.cuadrosInteractuados = true;
                    }
                    if(objeto === "puertaC") {
                        var llave = false;
                        for(var i=0; i<this.inventarioWiggle.length; i++) {
                            if(this.inventarioWiggle[i]==="Llave cocinas") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "¡La llave que cayó del árbol funciona y abre la puerta!";
                            this.MostrarTexto2(frase);
                            this.puertaC.visible = false;
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto2(frase);
                        }
                    }
                    if(objeto === "muebleCocina") {
                        this.secretoFogones = true;
                        this.resuelveFogones = "W";   
                    }
                    if(objeto === "puertaD") {
                        var llave = false;
                        for(var i=0; i<this.inventarioWiggle.length; i++) {
                            if(this.inventarioWiggle[i]==="Llave baño") {
                                llave = true;
                            }
                        }
                        var frase;
                        if(llave) {
                            frase = "Sabía que esta llave abriría una puerta de esta casa, todo siempre está donde no debe...";
                            this.MostrarTexto2(frase);
                            this.puertaD.visible = false;
                            this.simboloPared.visible = true;
                        }
                        else {
                            frase = "No tenemos la llave para abrir esta puerta...";
                            this.MostrarTexto2(frase);
                        }
                    }
                    if(objeto === "simboloPared") {
                        frase = "Estos signos parecen formar una ecuación, pero no sé qué número representan...";
                        this.MostrarTexto2(frase);
                        this.juegoDetenidoWiggle = true;
                        this.puzleSimbolos2.visible = true;
                    }
                    if(objeto === "puertaAlmacen"&&this.puertaAlmacen.visible) {
                        var frase = "Esta puerta no tiene cerradura, pero tiene un cartel y varios números... Sus símbolos me suenan.";
                        this.MostrarTexto2(frase);
                        this.juegoDetenidoWiggle = true;
                        this.panelContraseña2.visible = true;
                    }
                    if(objeto === "candelabro") {
                        var frase = "Este candelabro encendido no encaja del todo en el almacén. Voy a guardarlo por si luego es útil.";
                        this.MostrarTexto2(frase);
                        this.candelabro.visible = false;
                        this.inventarioWiggle.push("Candelabro");
                    }
                    if(objeto === "comodaGatos") {
                        var frase;
                        var candelabro = false;
                        for(var i=0; i<this.inventarioWiggle.length; i++) {
                            if(this.inventarioWiggle[i]==="Candelabro") {
                                candelabro = true;
                            }
                        }
                        if(!candelabro) {
                            frase = "Estas estatuillas de gato y las velas que tienen encima significarán algo importante...";
                        }
                        if(!this.mensajeObtenido && candelabro) {
                            frase = "Encima de las estatuillas de los gatos hay unas velas apagadas, ¿podría encenderlas con el candelabro?";
                        }
                        if(this.mensajeObtenido && candelabro &&!this.llamasFelinas) {
                            frase = "El mensaje hablaba de los gatos, ¡debo encender las velas de rubí y zafiro!";
                            this.juegoDetenidoWiggle = true;
                            this.PrepararVelasWiggle();
                        }
                        if(this.llamasFelinas) {
                            frase = "Qué manera tan curiosa de ponernos a prueba...";
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto === "comodaMensaje") {
                        var frase = "En el cajón de esta cómoda hay una nota muy sospechosa...";
                        this.MostrarTexto2(frase);
                        this.mensajeGatos2.visible = true;
                        this.mensajeObtenido = true;
                    }
                    if(objeto==="estanteria3") {
                        var frase = "Un toque de fuego ligado a una dulzura teñida de rojo originan el elixir del rubí.";
                        this.MostrarTexto2(frase);
                        if(!this.estanteria3_interactuada) {
                            this.formulaRubi2.paused = false;
                        }
                        this.estanteria3_interactuada = true;
                    }
                    if(objeto==="estanteria4") {
                        var frase = "La frialdad de un amargo invierno se tiñe de azul y crea el elixir del zafiro.";
                        this.MostrarTexto2(frase);
                        if(!this.estanteria4_interactuada) {
                            this.formulaZafiro2.paused = false;
                        }
                        this.estanteria4_interactuada = true;
                    }
                    if(objeto==="calderoRubi") {
                        var frase;
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada&&!this.neveras) {
                            frase = "En este caldero podemos fabricar el elixir del rubí, necesitamos traer los ingredientes.";
                        }
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada&&this.neveras&&!this.elixirRubi) {
                            frase = "Tengo que tener cuidado al escoger los ingredientes y seguir la fórmula...";
                            // Mostrar el panel para echar los ingredientes
                            this.juegoDetenidoWiggle = true;
                            this.ingredientesCaldero2.visible = true;
                            this.PrepararIngredientesRubi();
                        }
                        if(!this.estanteria3_interactuada&&!this.estanteria4_interactuada) {
                            frase = "Seguro que este caldero es muy importante, tiene un rubí en su superficie.";
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto==="calderoZafiro") {
                        var frase;
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada&&!this.neveras) {
                            frase = "En este caldero podemos fabricar el elixir del zafiro, necesitamos traer los ingredientes.";
                        }
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada&&this.neveras) {
                            frase = "Riddle se tiene que encargar de crear el elixir de zafiro...";
                        }
                        if(!this.estanteria3_interactuada&&!this.estanteria4_interactuada) {
                            frase = "Seguro que este caldero es muy importante, tiene un zafiro en su superficie.";
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto==="nevera1") {
                        var frase;
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada) {
                            this.neveras = true;
                            frase = "A ver qué puedo coger de todo lo que hay aquí...";
                            // Mostrar lista de ingredientes
                            this.ingredientesNeveraW1.visible = true;
                            this.ComprobarInventarioWiggle1();
                            this.juegoDetenidoWiggle = true;
                        }
                        else {
                            frase = "Hay cosas en buen estado en la nevera que se podrían aprovechar...";
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto==="nevera2") {
                        var frase;
                        if(this.estanteria3_interactuada&&this.estanteria4_interactuada) {
                            this.neveras = true;
                            frase = "A ver qué puedo coger de todo lo que hay aquí...";
                            // Mostrar lista de ingredientes
                            this.ingredientesNeveraW2.visible = true;
                            this.ComprobarInventarioWiggle2();
                            this.juegoDetenidoWiggle = true;
                        }
                        else {
                            frase = "Hay cosas en buen estado en la nevera que se podrían aprovechar...";
                        }
                        this.MostrarTexto2(frase);
                    }
                    if(objeto==="puertaBR"||objeto==="puertaBW"||objeto==="puertaLR"||objeto==="puertaLW") {
                        var frase = "No tenemos la llave para abrir esta puerta...";
                        this.MostrarTexto2(frase);
                    }
                }
    
        ///////////////////////////// CONTROL DE FLUJO DEL JUEGO Y DE LOS PUZLES
        InicioAbarrotadoResuelto() {
            if(this.inicioAbarrotado) {
                // Acciones que suceden tras resolver el puzle
                this.caja.disableBody(true, true);
            }
        }
        OcultarLibro1() {
            this.libroPiano1.visible = false;
        }

        OcultarLibro2() {
            this.libroPiano2.visible = false;
        }

        OcultarPuzlePiano() {
            this.puzlePiano.visible = false;
        }

        ComprobarComboPiano() {
            if(this.puzlePiano.visible) {
                this.sinfoniaSecreta = true;
            }
        }

        SinfoniaSecretaResuelta() {
            if(this.sinfoniaSecreta&&!this.resolucionMostradaPiano) {
                // Acciones que suceden tras resolver el puzle
                this.puzlePiano.visible = false;
                this.MostrarTexto2("¡He acertado en la combinación! Del teclado ha salido una llave, no sé qué puerta abrirá.");
                this.inventarioWiggle.push("Llave habitación");
                this.resolucionMostradaPiano = true;
            }
        }

        EntrePetalosResuelto() {
            if(this.entrePetalos) {
                // Se eliminan los fragmentos de llave
                for(var i=0; i<this.inventarioRiddle.length; i++) {
                    if(this.inventarioRiddle[i]!=undefined) {
                        if(this.inventarioRiddle[i]==="Fragmento de llave") {
                            delete this.inventarioRiddle[i];
                        }
                    }
                }
                for(var i=0; i<this.inventarioWiggle.length; i++) {
                    if(this.inventarioWiggle[i]!=undefined) {
                        if(this.inventarioWiggle[i]==="Fragmento de llave") {
                            delete this.inventarioWiggle[i];
                        }
                    }
                }
            }
        }

        OcultarPuzleR1() {
            this.plantaA1.setText('');
            this.plantaB1.setText('');
            this.plantaC1.setText('');
            this.puzleFloresR1.visible = false;
        }

        OcultarPuzleR2() {
            this.plantaA1.setText('');
            this.plantaB1.setText('');
            this.plantaC1.setText('');
            this.puzleFloresR2.visible = false;
        }

        OcultarPuzleW1() {
            this.plantaA2.setText('');
            this.plantaB2.setText('');
            this.plantaC2.setText('');
            this.puzleFloresW1.visible = false;
        }

        OcultarPuzleW2() {
            this.plantaA2.setText('');
            this.plantaB2.setText('');
            this.plantaC2.setText('');
            this.puzleFloresW2.visible = false;
        }

        ColocarFlores1() {
            // Se representa a la rosa roja con un 1, al clavel con un 2 y al girasol con un 3
            for(var i=0; i<this.floresJardin1.length; i++) {
                switch(i) {
                    case 0:
                        if(this.floresJardin1[i]==="1") {
                            this.rosaRoja.x = this.xPlantaA1;
                            this.rosaRoja.y = this.yPlantaA1;
                        }
                        if(this.floresJardin1[i]==="2") {
                            this.clavel.x = this.xPlantaA1;
                            this.clavel.y = this.yPlantaA1;
                        }
                        if(this.floresJardin1[i]==="3") {
                            this.girasol.x = this.xPlantaA1;
                            this.girasol.y = this.yPlantaA1;
                        }
                        break;
                    case 1:
                        if(this.floresJardin1[i]==="1") {
                            this.rosaRoja.x = this.xPlantaB1;
                            this.rosaRoja.y = this.yPlantaB1;
                        }
                        if(this.floresJardin1[i]==="2") {
                            this.clavel.x = this.xPlantaB1;
                            this.clavel.y = this.yPlantaB1;
                        }
                        if(this.floresJardin1[i]==="3") {
                            this.girasol.x = this.xPlantaB1;
                            this.girasol.y = this.yPlantaB1;
                        }
                        break;
                    case 2:
                        if(this.floresJardin1[i]==="1") {
                            this.rosaRoja.x = this.xPlantaC1;
                            this.rosaRoja.y = this.yPlantaC1;
                        }
                        if(this.floresJardin1[i]==="2") {
                            this.clavel.x = this.xPlantaC1;
                            this.clavel.y = this.yPlantaC1;
                        }
                        if(this.floresJardin1[i]==="3") {
                            this.girasol.x = this.xPlantaC1;
                            this.girasol.y = this.yPlantaC1;
                        }
                }
            }
            this.ComprobarOrdenPlantas();
        }

        ColocarFlores2() {
            // Se representa a la rosa roja con un 1, al clavel con un 2 y al girasol con un 3
            for(var i=0; i<this.floresJardin2.length; i++) {
                switch(i) {
                    case 0:
                        if(this.floresJardin2[i]==="1") {
                            this.rosaBlanca.x = this.xPlantaA2;
                            this.rosaBlanca.y = this.yPlantaA2;
                        }
                        if(this.floresJardin2[i]==="2") {
                            this.lirio.x = this.xPlantaA2;
                            this.lirio.y = this.yPlantaA2;
                        }
                        if(this.floresJardin2[i]==="3") {
                            this.tulipan.x = this.xPlantaA2;
                            this.tulipan.y = this.yPlantaA2;
                        }
                        break;
                    case 1:
                        if(this.floresJardin2[i]==="1") {
                            this.rosaBlanca.x = this.xPlantaB2;
                            this.rosaBlanca.y = this.yPlantaB2;
                        }
                        if(this.floresJardin2[i]==="2") {
                            this.lirio.x = this.xPlantaB2;
                            this.lirio.y = this.yPlantaB2;
                        }
                        if(this.floresJardin2[i]==="3") {
                            this.tulipan.x = this.xPlantaB2;
                            this.tulipan.y = this.yPlantaB2;
                        }
                        break;
                    case 2:
                        if(this.floresJardin2[i]==="1") {
                            this.rosaBlanca.x = this.xPlantaC2;
                            this.rosaBlanca.y = this.yPlantaC2;
                        }
                        if(this.floresJardin2[i]==="2") {
                            this.lirio.x = this.xPlantaC2;
                            this.lirio.y = this.yPlantaC2;
                        }
                        if(this.floresJardin2[i]==="3") {
                            this.tulipan.x = this.xPlantaC2;
                            this.tulipan.y = this.yPlantaC2;
                        }
                }
            }
            this.ComprobarOrdenPlantas();
        }

        NuevoIntentoPlantas() {
            this.nuevoIntento = true;
            this.temporizadorNuevoIntento = this.time.addEvent({ delay: 300, callback: this.NuevoIntentoPlantas, callbackScope: this});
            this.temporizadorNuevoIntento.paused = true;
        }

        ComprobarOrdenPlantas() {
            if(
                this.floresJardin1[0]==="1"&&
                this.floresJardin1[1]==="3"&&
                this.floresJardin1[2]==="2"&&
                this.floresJardin2[0]==="2"&&
                this.floresJardin2[1]==="3"&&
                this.floresJardin2[2]==="1"
            ) {
                this.jardinEnArmonia = true;
            }     
        }

        JardinEnArmoniaResuelto() {
            if(this.jardinEnArmonia&&!this.resolucionMostradaJardin) {
                var frase = "¡Lo hemos resuelto! Ha caído una nueva llave del árbol. ¿Qué puertas abrirá?";
                this.MostrarTexto(frase);
                this.MostrarTexto2(frase);
                this.resolucionMostradaJardin = true;
                this.inventarioRiddle.push("Llave cocinas");
                this.inventarioWiggle.push("Llave cocinas");
            }
        }

        SecretoEnLosFogonesResuelto() {
            if(this.secretoFogones&&!this.resolucionMostradaCocina) {
                var frase = "Otra llave se encontraba oculta en los muebles... Esto comienza a ser un caos. ¿De dónde será?";
                this.resolucionMostradaCocina = true;

                if(this.resuelveFogones==="R") {
                    this.MostrarTexto(frase);
                    this.inventarioRiddle.push("Llave baño");
                }
                if(this.resuelveFogones==="W") {
                    this.MostrarTexto2(frase);
                    this.inventarioWiggle.push("Llave baño");
                }
            }
        }
        OcultarPuzleSimbolos1() {
            this.puzleSimbolos.visible =false;
        }

        OcultarPuzleSimbolos2() {
            this.puzleSimbolos2.visible =false;
        }

        OcultarPuzleContraseña1() {
            this.panelContraseña1.visible = false;
            this.contraseña1.setText('');
        }

        OcultarPuzleContraseña2() {
            this.panelContraseña2.visible = false;
            this.contraseña2.setText('');
        }

        ComprobarContraseñaSimbolos(resolutor) {
            if(
                this.contraseñaSimbolos[0]==="1"&&
                this.contraseñaSimbolos[1]==="7"&&
                this.contraseñaSimbolos[2]==="9"
            ) {
                this.contraseña1.setText('');
                this.contraseña2.setText('');
                this.enigmaAlmacen = true;
            }
            else {
                for(var i=0; i<this.contraseñaSimbolos.length; i++) {
                    this.contraseñaSimbolos[i] = 0;
                }
                var frase = "La contraseña no abre la puerta...";
                if(resolutor==="R") {
                    this.MostrarTexto(frase);
                }
                else {
                    this.MostrarTexto2(frase);
                }
            }
        }

        EnigmaAlmacenResuelto() {
            if(this.enigmaAlmacen&&!this.resolucionMostradaAlmacen) {
                var frase = "¡La contraseña es correcta! Hemos podido entrar en el almacén y hemos encontrado un candelabro...";
                this.MostrarTexto(frase);
                this.MostrarTexto2(frase);
                this.panelContraseña1.visible = false;
                this.panelContraseña2.visible = false;
                this.juegoDetenidoRiddle = false;
                this.juegoDetenidoWiggle = false;
                this.resolucionMostradaAlmacen = true;
                this.inventarioWiggle.push("Candelabro");
                this.inventarioRiddle.push("Candelabro");
            }
        }
        PrepararVelasRiddle() {
            this.puzleGatos1.visible = true;
            if(this.velasEncendidas[0]) {
                this.vela1AE.visible = true;
            }
            if(!this.velasEncendidas[0]) {
                this.vela1AN.visible = true;
            }
            if(this.velasEncendidas[1]) {
                this.vela2AE.visible = true;
            }
            if(!this.velasEncendidas[1]) {
                this.vela2AN.visible = true;
            }
            if(this.velasEncendidas[2]) {
                this.vela3AE.visible = true;
            }
            if(!this.velasEncendidas[2]) {
                this.vela3AN.visible = true;
            }
            if(this.velasEncendidas[3]) {
                this.vela4AE.visible = true;
            }
            if(!this.velasEncendidas[3]) {
                this.vela4AN.visible = true;
            }
            if(this.velasEncendidas[4]) {
                this.vela5AE.visible = true;
            }
            if(!this.velasEncendidas[4]) {
                this.vela5AN.visible = true;
            }
        }

        PrepararVelasWiggle() {
            this.puzleGatos2.visible = true;
            if(this.velasEncendidas[0]) {
                this.vela1BE.visible = true;
            }
            if(!this.velasEncendidas[0]) {
                this.vela1BN.visible = true;
            }
            if(this.velasEncendidas[1]) {
                this.vela2BE.visible = true;
            }
            if(!this.velasEncendidas[1]) {
                this.vela2BN.visible = true;
            }
            if(this.velasEncendidas[2]) {
                this.vela3BE.visible = true;
            }
            if(!this.velasEncendidas[2]) {
                this.vela3BN.visible = true;
            }
            if(this.velasEncendidas[3]) {
                this.vela4BE.visible = true;
            }
            if(!this.velasEncendidas[3]) {
                this.vela4BN.visible = true;
            }
            if(this.velasEncendidas[4]) {
                this.vela5BE.visible = true;
            }
            if(!this.velasEncendidas[4]) {
                this.vela5BN.visible = true;
            }
        }

        OcultarPuzleGatos1() {
            this.puzleGatos1.visible = false;
            this.vela1AE.visible = false;
            this.vela1AN.visible = false;
            this.vela2AE.visible = false;
            this.vela2AN.visible = false;
            this.vela3AE.visible = false;
            this.vela3AN.visible = false;
            this.vela4AE.visible = false;
            this.vela4AN.visible = false;
            this.vela5AE.visible = false;
            this.vela5AN.visible = false;
        }

        OcultarPuzleGatos2() {
            this.puzleGatos2.visible = false;
            this.vela1BE.visible = false;
            this.vela1BN.visible = false;
            this.vela2BE.visible = false;
            this.vela2BN.visible = false;
            this.vela3BE.visible = false;
            this.vela3BN.visible = false;
            this.vela4BE.visible = false;
            this.vela4BN.visible = false;
            this.vela5BE.visible = false;
            this.vela5BN.visible = false;
        }

        ComprobarVelasEncendidas() {
            if(
                !this.velasEncendidas[0]&&
                !this.velasEncendidas[1]&&
                this.velasEncendidas[2]&&
                !this.velasEncendidas[3]&&
                this.velasEncendidas[4]
            ) {
                this.llamasFelinas = true;
            }
        }

        OcultarMensajeGatos1() {
            this.mensajeGatos1.visible = false;
        }

        OcultarMensajeGatos2() {
            this.mensajeGatos2.visible = false;
        }

        LlamasFelinasResuelto() {
            if(this.llamasFelinas&&!this.mensajeGatosMostrado) {
                this.puzleGatos1.visible = false;
                this.puzleGatos2.visible = false;
                this.juegoDetenidoRiddle = false;
                this.juegoDetenidoWiggle = false;
                this.vela1AE.visible = false;
                this.vela1AN.visible = false;
                this.vela2AE.visible = false;
                this.vela2AN.visible = false;
                this.vela3AE.visible = false;
                this.vela3AN.visible = false;
                this.vela4AE.visible = false;
                this.vela4AN.visible = false;
                this.vela5AE.visible = false;
                this.vela5AN.visible = false;
                this.vela1BE.visible = false;
                this.vela1BN.visible = false;
                this.vela2BE.visible = false;
                this.vela2BN.visible = false;
                this.vela3BE.visible = false;
                this.vela3BN.visible = false;
                this.vela4BE.visible = false;
                this.vela4BN.visible = false;
                this.vela5BE.visible = false;
                this.vela5BN.visible = false;

                var candelabroWiggle = false;
                for(var i=0; i<this.inventarioWiggle.length; i++) {
                    if(this.inventarioWiggle[i]==="Candelabro") {
                        candelabroWiggle = true;
                    }
                }
                var frase = "He debido de acertar, porque se ha escuchado un ruido y, ¡he visto abrirse el resto de puertas!";
                if(candelabroWiggle) {
                    this.MostrarTexto2(frase);
                }
                else {
                    this.MostrarTexto(frase);
                }
                this.mensajeGatosMostrado = true;

                // Abrir todas las puertas
                this.puertaBibliotecaRiddle.disableBody(true,true);
                this.puertaBibliotecaWiggle.disableBody(true,true);
                this.puertaLaboratorioRiddle.disableBody(true,true);
                this.puertaLaboratorioWiggle.disableBody(true,true);

            }
        }

        MostrarTextoRubi1() {
            var frase = "Parece la fórmula del elixir rojo que necesitamos para salir. Hay que buscar los ingredientes.";
            this.MostrarTexto(frase);
            this.formulaRubi1.paused = true;
        }

        MostrarTextoRubi2() {
            var frase = "Parece la fórmula del elixir rojo que necesitamos para salir. Hay que buscar los ingredientes.";
            this.MostrarTexto2(frase);
            this.formulaRubi2.paused = true;
        }

        MostrarTextoZafiro1() {
            var frase = "Parece la fórmula del elixir azul que necesitamos para salir. Hay que buscar los ingredientes.";
            this.MostrarTexto(frase);
            this.formulaZafiro1.paused = true;
        }

        MostrarTextoZafiro2() {
            var frase = "Parece la fórmula del elixir azul que necesitamos para salir. Hay que buscar los ingredientes.";
            this.MostrarTexto2(frase);
            this.formulaZafiro2.paused = true;
        }

        OcultarIngredientesNeveraR1() {
            this.ingredientesNeveraR1.visible = false;
            for(var i=0; i<this.iconosNevera1.length; i++) {
                this.iconosNevera1[i].visible = false;
            }
        }

        OcultarIngredientesNeveraR2() {
            this.ingredientesNeveraR2.visible = false;
            for(var i=0; i<this.iconosNevera2.length; i++) {
                this.iconosNevera2[i].visible = false;
            }
        }

        OcultarIngredientesNeveraW1() {
            this.ingredientesNeveraW1.visible = false;
            for(var i=0; i<this.iconosNevera1.length; i++) {
                this.iconosNevera1[i].visible = false;
            }
        }

        OcultarIngredientesNeveraW2() {
            this.ingredientesNeveraW2.visible = false;
            for(var i=0; i<this.iconosNevera2.length; i++) {
                this.iconosNevera2[i].visible = false;
            }
        }

        OcultarIngredientesCaldero1() {
            this.ingredientesCaldero1.visible = false;
            for(var i=0; i<this.arrayIngredientesRiddle.length; i++) {
                this.arrayIngredientesRiddle[i].setText('');
            }
            for(var i=0; i<this.iconosCaldero1.length;i++) {
                this.iconosCaldero1[i].visible = false;
            }
            for(var i=0; i<this.ingredientesIntroducidosCaldero1.length;i++) {
                    this.ingredientesIntroducidosCaldero1[i] = 0;
                }
        }

        OcultarIngredientesCaldero2() {
            this.ingredientesCaldero2.visible = false;
            for(var i=0; i<this.arrayIngredientesWiggle.length; i++) {
                this.arrayIngredientesWiggle[i].setText('');
            }
            for(var i=0; i<this.iconosCaldero2.length;i++) {
                this.iconosCaldero2[i].visible = false;
            }
            for(var i=0; i<this.ingredientesIntroducidosCaldero2.length;i++) {
                    this.ingredientesIntroducidosCaldero2[i] = 0;
                }
        }

        ComprobarInventarioRiddle1() {
            for(var i=0; i<this.inventarioRiddle.length;i++) {
                if(this.inventarioRiddle[i]==="Pitahayas") {
                    this.ingredientesRiddle1[0] = true;
                }
                if(this.inventarioRiddle[i]==="Uvas") {
                    this.ingredientesRiddle1[1] = true;
                }
                if(this.inventarioRiddle[i]==="Zumo de tomate") {
                    this.ingredientesRiddle1[2] = true;
                }
                if(this.inventarioRiddle[i]==="Manzana") {
                    this.ingredientesRiddle1[3] = true;
                }
                if(this.inventarioRiddle[i]==="Pomelo") {
                    this.ingredientesRiddle1[4] = true;
                }
                if(this.inventarioRiddle[i]==="Calabaza") {
                    this.ingredientesRiddle1[5] = true;
                }
                if(this.inventarioRiddle[i]==="Zumo de piña") {
                    this.ingredientesRiddle1[6] = true;
                }
            }
            for(var i=0; i<this.ingredientesRiddle1.length;i++) {
                if(this.ingredientesRiddle1[i]) {
                    this.iconosNevera1[i].visible = true;
                }
            }
        }

        ComprobarInventarioRiddle2() {
            for(var i=0; i<this.inventarioRiddle.length;i++) {
                if(this.inventarioRiddle[i]==="Coco helado") {
                    this.ingredientesRiddle2[0] = true;
                }
                if(this.inventarioRiddle[i]==="Cerezas") {
                    this.ingredientesRiddle2[1] = true;
                }
                if(this.inventarioRiddle[i]==="Zumo de arandanos") {
                    this.ingredientesRiddle2[2] = true;
                }
                if(this.inventarioRiddle[i]==="Zumo de naranja") {
                    this.ingredientesRiddle2[3] = true;
                }
                if(this.inventarioRiddle[i]==="Limon") {
                    this.ingredientesRiddle2[4] = true;
                }
                if(this.inventarioRiddle[i]==="Sandia") {
                    this.ingredientesRiddle2[5] = true;
                }
                if(this.inventarioRiddle[i]==="Melon") {
                    this.ingredientesRiddle2[6] = true;
                }
            }
            for(var i=0; i<this.ingredientesRiddle2.length;i++) {
                if(this.ingredientesRiddle2[i]) {
                    this.iconosNevera1[i].visible = true;
                }
            }
        }

        ComprobarInventarioWiggle1() {
            for(var i=0; i<this.inventarioWiggle.length;i++) {
                if(this.inventarioWiggle[i]==="Pitahayas") {
                    this.ingredientesWiggle1[0] = true;
                }
                if(this.inventarioWiggle[i]==="Uvas") {
                    this.ingredientesWiggle1[1] = true;
                }
                if(this.inventarioWiggle[i]==="Zumo de tomate") {
                    this.ingredientesWiggle1[2] = true;
                }
                if(this.inventarioWiggle[i]==="Manzana") {
                    this.ingredientesWiggle1[3] = true;
                }
                if(this.inventarioWiggle[i]==="Pomelo") {
                    this.ingredientesWiggle1[4] = true;
                }
                if(this.inventarioWiggle[i]==="Calabaza") {
                    this.ingredientesWiggle1[5] = true;
                }
                if(this.inventarioWiggle[i]==="Zumo de piña") {
                    this.ingredientesWiggle1[6] = true;
                }
            }
            for(var i=0; i<this.ingredientesWiggle1.length;i++) {
                if(this.ingredientesWiggle1[i]) {
                    this.iconosNevera2[i].visible = true;
                }
            }
        }

        ComprobarInventarioWiggle2() {
            for(var i=0; i<this.inventarioWiggle.length;i++) {
                if(this.inventarioWiggle[i]==="Coco helado") {
                    this.ingredientesWiggle2[0] = true;
                }
                if(this.inventarioWiggle[i]==="Cerezas") {
                    this.ingredientesWiggle2[1] = true;
                }
                if(this.inventarioWiggle[i]==="Zumo de arandanos") {
                    this.ingredientesWiggle2[2] = true;
                }
                if(this.inventarioWiggle[i]==="Zumo de naranja") {
                    this.ingredientesWiggle2[3] = true;
                }
                if(this.inventarioWiggle[i]==="Limon") {
                    this.ingredientesWiggle2[4] = true;
                }
                if(this.inventarioWiggle[i]==="Sandia") {
                    this.ingredientesWiggle2[5] = true;
                }
                if(this.inventarioWiggle[i]==="Melon") {
                    this.ingredientesWiggle2[6] = true;
                }
            }
            for(var i=0; i<this.ingredientesWiggle2.length;i++) {
                if(this.ingredientesWiggle2[i]) {
                    this.iconosNevera2[i].visible = true;
                }
            }
        }

        PrepararIngredientesZafiro() {
            var indice = 0;
            var clave = indice+1;
            for(var i=0; i<this.ingredientesRiddle1.length*2;i++) {
                if(i<7) {
                    if(this.ingredientesRiddle1[i]) {
                        switch(i) {
                            case 0:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Pitahayas");
                                break;
                            case 1:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Uvas");
                                break;
                            case 2:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Zumo de tomate");
                                break;
                            case 3:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Manzana");
                                break;
                            case 4:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Pomelo");
                                break;
                            case 5:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Calabaza");
                                break;
                            case 6:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Zumo de piña");
                                break;
                        }
                        indice++;
                        this.numeroIngredientesCaldero1++;
                        if(indice<9) {
                            clave = indice+1;
                        }
                        if(indice==9) {
                            clave = "A";
                        }
                        if(indice==10) {
                            clave = "B";
                        }
                        if(indice==11) {
                            clave = "C";
                        }
                        if(indice==12) {
                            clave = "D";
                        }
                        if(indice==13) {
                            clave = "E";
                        }
                    }
                }
                else {
                    if(this.ingredientesRiddle2[i-this.ingredientesRiddle1.length]) {
                        switch(i-this.ingredientesRiddle1.length) {
                            case 0:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Coco helado");
                                break;
                            case 1:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Cerezas");
                                break;
                            case 2:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Zumo de arándanos");
                                break;
                            case 3:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Zumo de naranja");
                                break;
                            case 4:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Limón");
                                break;
                            case 5:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Sandía");
                                break;
                            case 6:
                                this.arrayIngredientesRiddle[indice].setText((clave)+"- Melón");
                                break;
                        }
                        indice++;
                        this.numeroIngredientesCaldero1++;
                        if(indice<9) {
                            clave = indice+1;
                        }
                        if(indice==9) {
                            clave = "A";
                        }
                        if(indice==10) {
                            clave = "B";
                        }
                        if(indice==11) {
                            clave = "C";
                        }
                        if(indice==12) {
                            clave = "D";
                        }
                        if(indice==13) {
                            clave = "E";
                        }
                    }
                }
            }
        }

        PrepararIngredientesRubi() {
            var indice = 0;
            var clave = indice+1;
            for(var i=0; i<this.ingredientesWiggle1.length*2;i++) {
                if(i<7) {
                    if(this.ingredientesWiggle1[i]) {
                        switch(i) {
                            case 0:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Pitahayas");
                                break;
                            case 1:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Uvas");
                                break;
                            case 2:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Zumo de tomate");
                                break;
                            case 3:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Manzana");
                                break;
                            case 4:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Pomelo");
                                break;
                            case 5:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Calabaza");
                                break;
                            case 6:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Zumo de piña");
                                break;
                        }
                        indice++;
                        this.numeroIngredientesCaldero2++;
                        if(indice<9) {
                            clave = indice+1;
                        }
                        if(indice==9) {
                            clave = "A";
                        }
                        if(indice==10) {
                            clave = "B";
                        }
                        if(indice==11) {
                            clave = "C";
                        }
                        if(indice==12) {
                            clave = "D";
                        }
                        if(indice==13) {
                            clave = "E";
                        }
                    }
                }
                else {
                    if(this.ingredientesWiggle2[i-this.ingredientesWiggle1.length]) {
                        switch(i-this.ingredientesWiggle1.length) {
                            case 0:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Coco helado");
                                break;
                            case 1:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Cerezas");
                                break;
                            case 2:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Zumo de arándanos");
                                break;
                            case 3:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Zumo de naranja");
                                break;
                            case 4:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Limón");
                                break;
                            case 5:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Sandía");
                                break;
                            case 6:
                                this.arrayIngredientesWiggle[indice].setText((clave)+"- Melón");
                                break;
                        }
                        indice++;
                        this.numeroIngredientesCaldero2++;
                        if(indice<9) {
                            clave = indice+1;
                        }
                        if(indice==9) {
                            clave = "A";
                        }
                        if(indice==10) {
                            clave = "B";
                        }
                        if(indice==11) {
                            clave = "C";
                        }
                        if(indice==12) {
                            clave = "D";
                        }
                        if(indice==13) {
                            clave = "E";
                        }
                    }
                }
            }
        }

        AñadirIngredienteZafiro(indice) {
            var contador = 0;
            var idIngrediente = 0;
            for(var i=0; i<this.ingredientesRiddle1.length*2;i++) {
                if(i<7) {
                    if(this.ingredientesRiddle1[i]) {
                        contador++;
                    }
                }
                else {
                    if(this.ingredientesRiddle2[i-this.ingredientesRiddle1.length]) {
                        contador++;
                    }
                }
                if(contador==indice&&idIngrediente==0) {
                    idIngrediente = i+1;
                }
            }
            this.ingredientesIntroducidosCaldero1[this.numeroIngredientesIntroducidos1] = idIngrediente;
        }

        AñadirIngredienteRubi(indice) {
            var contador = 0;
            var idIngrediente = 0;
            for(var i=0; i<this.ingredientesWiggle1.length*2;i++) {
                if(i<7) {
                    if(this.ingredientesWiggle1[i]) {
                        contador++;
                    }
                }
                else {
                    if(this.ingredientesWiggle2[i-this.ingredientesWiggle1.length]) {
                        contador++;
                    }
                }
                if(contador==indice&&idIngrediente==0) {
                    idIngrediente = i+1;
                }
            }
            this.ingredientesIntroducidosCaldero2[this.numeroIngredientesIntroducidos2] = idIngrediente;
        }

        ComprobarFormulaZafiro() {
            var frase;
            // Los identificadores de los ingredientes que tienen que estar en los introducidos son: 5, 8, 10 (Pomelo, coco helado y zumo de arándanos)
            var id5 = false;
            var id8 = false;
            var id10 = false;
            for(var i=0; i<this.ingredientesIntroducidosCaldero1.length;i++) {
                if(this.ingredientesIntroducidosCaldero1[i]==5) {
                    id5 = true;
                }
                if(this.ingredientesIntroducidosCaldero1[i]==8) {
                    id8 = true;
                }
                if(this.ingredientesIntroducidosCaldero1[i]==10) {
                    id10 = true;
                }
            }
            if(id5&&id8&&id10) {
                // Cambiar icono caldero azul
                this.caldero1zafiro.visible = false;
                this.caldero2zafiro.visible = true;
                this.elixirZafiro = true;
                if(this.elixirRubi) {
                    this.maestroMezclas = true;
                }
                else{
                    frase = "El contenido del caldero se ha teñido de azul, ¡he acertado! Solo queda que Wiggle haga lo suyo.";
                }
            }
            else {
                frase = "He debido de equivocarme en algo, revisaré bien la fórmula y los detalles de cada ingrediente.";

            }
            this.OcultarIngredientesCaldero1();
            this.MostrarTexto(frase);
        }

        ComprobarFormulaRubi() {
            var frase;
            // Los identificadores de los ingredientes que tienen que estar en los introducidos son: 1, 3, 9 (Pitahayas, zumo de tomate y cerezas)
            var id1 = false;
            var id3 = false;
            var id9 = false;
            for(var i=0; i<this.ingredientesIntroducidosCaldero2.length;i++) {
                if(this.ingredientesIntroducidosCaldero2[i]==1) {
                    id1 = true;
                }
                if(this.ingredientesIntroducidosCaldero2[i]==3) {
                    id3 = true;
                }
                if(this.ingredientesIntroducidosCaldero2[i]==9) {
                    id9 = true;
                }
            }
            if(id1&&id3&&id9) {                       
                // Cambiar icono caldero rojo
                this.caldero1rubi.visible = false;
                this.caldero2rubi.visible = true;
                this.elixirRubi = true;
                if(this.elixirZafiro) {
                    this.maestroMezclas = true;
                }
                else{
                    frase = "El contenido del caldero se ha teñido de rojo, ¡he acertado! Solo queda que Riddle haga lo suyo.";
                }
            }
            else {
                frase = "He debido de equivocarme en algo, revisaré bien la fórmula y los detalles de cada ingrediente."
            }
            this.OcultarIngredientesCaldero2();
            this.MostrarTexto2(frase);
        }

        ComprobarMaestroMezclas() {
            if(this.maestroMezclas&&!this.finalMostrado) {
                var frase = "Los dos elixires están empezando a crear un portal... ¡Por fin saldremos de aquí!";
                this.MostrarTexto(frase);
                this.MostrarTexto2(frase);
                this.finalMostrado = true;
                // TRANSICIÓN A ESCENA DE VICTORIA
            }
        }

}
export default SceneGame;