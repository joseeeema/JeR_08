# JeR_08
# RIDDLE & WIGGLE

***Documento de diseño del videojuego***

*Juegos en Red - Grado en Diseño y Desarrollo de Videojuegos*


|**Nombre :**|**Correo:**|**Github:**|
| :- | :- | :- |
|Juan Coronado Gómez|<j.coronado.2021@alumnos.urjc.es>|@juan9578|
|Luis Fernando Rodríguez Rivera|<lf.rodriguez.2021@alumnos.urjc.es>|@luissferr|
|Santiago Rubio Montero|s.rubio.2021@alumnos.urjc.es|@thebasilisko|
|Jacobo Sánchez García|<j.sanchezg.2021@alumnos.urjc.es>|@erJaco|
|Jose María Soriano Villalba|<jm.soriano.2021@alumnos.urjc.es>|<p>@joseeeema</p><p></p>|

**ÍNDICE**

1. INTRODUCCIÓN
2. GUIÓN
3. MECÁNICAS

    3.1 CÁMARA Y ESPACIO

    3.2 CONTROLES

    3.3 SISTEMA DE GUARDADO Y CARGA

    3.4 SISTEMA DE DIFICULTAD Y PUNTUACIÓN

    3.5 JUGABILIDAD

    3.6 NIVELES

    3.7 FUNCIONAMIENTO Y PROGRESIÓN DEL JUEGO

4. ESTADO DEL JUEGO
5. INTERFACES

    5.1 MENÚ PRINCIPAL

    5.2 INTERFAZ DEL JUEGO

    5.3 MENÚ DE INVENTARIO

    5.4 MENÚ DE PAUSA

6. PERSONAJES
7. ÍTEMS
8. PUZLES
9. PROGRESO DEL JUEGO
10. ARTE

    10.1 PERSONAJES

    10.2 ÍTEMS

    10.3 ESCENARIO

11. MÚSICA Y EFECTOS DE SONIDO












**ÍNDICE DE FIGURAS**

FIGURA 1 - *ESTADO DEL JUEGO* 

FIGURA 2 - *INTERFAZ DEL MENÚ PRINCIPAL* 

FIGURA 3 - *INTERFAZ DEL JUEGO* 

FIGURA 4 - *INTERFAZ DEL MENÚ DE INVENTARIO* 

FIGURA 5 - *INTERFAZ DEL MENÚ DE PAUSA* 

FIGURA 6 - *TECLADO CON CIFRADO AMERICANO* 

FIGURA 7 - *CÓDIGO EN LA PARED* 

FIGURA 8 - *MAPA EN ESTADO INICIAL* 

FIGURA 9 - *MAPA EN ESTADO 1* 

FIGURA 10 - *MAPA EN ESTADO 2* 

FIGURA 11 - *MAPA EN ESTADO 3*

FIGURA 12 - *MAPA EN ESTADO 4* 

FIGURA 13 - *MAPA EN ESTADO 5* 

FIGURA 14 - *MAPA EN ESTADO 6* 

FIGURA 15 - *MAPA EN ESTADO 7* 

FIGURA 16 - *DIAGRAMA DE FLUJO PROCESO DEL JUEGO* 

FIGURA 17 - *PERSONAJE DE RIDDLE* 

FIGURA 18 - *PERSONAJE DE WIGGLE* 

FIGURA 19 - *ANIMACIÓN BOMBA* 

FIGURA 20 - *ESTANTERÍA* 

FIGURA 21 - *COFRE* 

FIGURA 22 - *BANDERAS*

FIGURA 23 - *LLAVE* 

FIGURA 24 - *POCIONES* 

FIGURA 25 - *ESQUELETO* 

FIGURA 26 - *MESAS*

FIGURA 27 - *ANTORCHA* 

FIGURA 28 - *PROPS PAREDES* 

FIGURA 29 - *PROPS SUELO* 

FIGURA 30 - *MAPA DE WIGGLE* 

FIGURA 31 - *MAPA DE RIDDLE* 





1. **INTRODUCCIÓN**

El juego diseñado se titula Riddle & Wiggle y es un videojuego caracterizado por la resolución de puzzles como mecánica principal. El videojuego es del género RPG y tiene una clasificación de Pegi 7. El mensaje a transmitir es que hay momentos en la vida en que es mejor hacer las cosas acompañados por alguien porque uno solo no puede con todo. En cuanto a estilo, Riddle & Wiggle es un juego 2D con visión en perspectiva cenital, pantalla dividida, colores vivos y alegres.

En cuanto a la ubicación temporal de Riddle & Wiggle, es un videojuego ambientado en la Edad Media, aproximadamente entre los siglos XV y XVII momento en el cuál los protagonistas de la historia son expulsados de su colegio de magia y un malvado mago los secuestra para ponerlos a prueba.

2. **GUIÓN**

Los protagonistas de la historia son Riddle (personaje más robusto pero con poca inteligencia) y Wiggle ( menos fuerte, pero inteligente), son dos jóvenes magos que estudian en una escuela de magia llamada Amaurotam, situada en la ciudad de Vetusta. La historia de estos jóvenes se tuerce por el uso de magia oscura que realizan dentro la escuela y el director, al descubrirlos, decide expulsarlos durante 3 días. En ese tramo de tiempo, un mago malvado los secuestra y los encierra en dos casas distintas para poner a prueba sus habilidades, en caso de superar las distintas pruebas conseguirán escapar de un agujero negro que debora la casa y seguir con su vida, por el contrario, si no lo logran, morirán absorvidos. Para lograr el escape, ambos personajes deben utilizar sus distintas habilidades y conocimientos para resolver una serie de puzzles que les lleve a la creación de dos elixires para poder escapar. Para ello, disponen de un sistema de teletransporte para poder comunicarse entre ellos y poder hacer cosas juntos y ayudarse.  

El juego comienza con una breve introducción a través de la cual se contextualiza quienes son los protagonistas y lo que ha ocurrido, la cual se lleva a cabo a través de una serie de cinemáticas. Una vez ya dentro del gameplay, se empieza con la pantalla dividida y cada uno de los personajes ubicados en casas distintas, encerrados en una de sus habitaciones. Una vez iniciada la historia, los jugadores dispondrán de un corto periodo de tiempo para interactuar con el entorno, encontrar pistas y resolver los distintos puzzles, si el tiempo se acaba, el juego finaliza. Los puzzles a realizar por los jugadores son 10, el primero de ellos, está preparado para Riddle, puesto que Wiggle está encerrado en la habitación y debido a su poca fuerza, no puede mover las cajas que bloquean la puerta para poder salir. En el segundo puzzle llega el turno de Wiggle que gracias a su inteligencia y conocimiento musical logra tocar las notas correctas para abrir un cajón y conseguir la llave que abre la habitación de Riddle. El tercer puzzle consiste en encontrar tres fragmentos de llave para conseguir una llave maestra que abre la puerta al jardín de ambas casas. En cada jardín se encuentran varias plantas que hay que ordenar en un orden definido en unos cuadros de dentro de las casas, este es el cuarto puzzle de la historia. Una vez ordenadas las plantas aparece una llave que abre las cocinas donde hay que buscar una nueva llave que da el acceso el baño y al sexto puzzle. En el baño, se debe realizar un rompecabezas con una serie de figuras geométricas para obtener el código que abre la puerta del almacén que se encuentra en el salón de la casa en la que se encuentra Wiggle. Una vez dentro del almacén, los jugadores deben buscar unas cerillas para encender unas velas que muestran un acertijo. Tras resolver este acertijo, se abren las puertas del laboratorio y la biblioteca, dónde tras investigar en unos libros, se encuentra la fórmula para crear los dos elixires de la victoria. La creación de estos elixires es el último puzzle de la aventura. Tras conseguir los dos elixires, Riddle & Wiggle deben de juntarse para mezclar dichos elixires y que se forme una reacción química potente contra el metal que al verterla sobre la cerradura de la puerta principal, esta comienza a derretirse y los protagonistas logran escapar.

3. **MECÁNICAS**

El jugador puede interactuar con todo tipo de objetos dentro del espacio en el que se encuentra, pudiendo explorar por todo su entorno y descubrir todo tipo de elementos/objetos que le permitan seguir avanzando e ir ayudando a su compañero con su progreso. Se pueden resolver acertijos, enigmas, puzzles complicados, rompecabezas... y una infinidad de situaciones que tiene que lidiar con la ayuda de su compañero, que están en constante comunicación para poder ir resolviendo cada uno de estos impedimentos...

La principal mecánica, con la que tienen que lidiar los jugadores, es la resolución de puzzles de diferentes estilos, por ejemplo: uno consiste en la recolecta de fragmentos de llave a medida que los jugadores exploran sus espacios para así lograr hacerse con una llave completa que les permita continuar la partida. Otro tipo es encontrar con exactitud y el orden correcto una contraseña que les permite a los jugadores desbloquear instancias claves del espacio para así seguir avanzando. Otros puzles más complejos, son la necesidad de interactuar con el entorno a través de los botones asignados en el teclado para así poder dar con el objeto clave ya sea un libro, una mesa, un botón... que moviendolo desencadenara un movimiento que les permita resolver el puzle, otro puzzle va ligado a la familia de los colores y los patrones que nos permiten formar uniendo cada uno de ellos, por lo que los jugadores van a tener que ir encontrando colores para luego así poder dar la solución correcta al enigma planteado.  

**3.1 Cámara y espacio**

El videojuego opta por una vista cenital centrada en el jugador/es, para así dejar oculto las partes del entorno y poder dar lugar a la búsqueda e investigación de todo el entorno y poder solucionar los puzzles y así avanzar.


**3.2 Controles**

En cuanto a los controles, Riddle & Wiggle al tratarse de un juego cooperativo en la misma pantalla, cada jugador tiene que interactuar con el juego a través del teclado manejando cada uno de los dos personajes jugables. Los controles, están pensados para un jugador las flechas para un movimiento total, es decir para todos los lados y para el otro jugador su movimiento es a través del "a,w,s,d". Además, el botón de interactuar con el escenario y los objetos es la "E" en el caso del jugador del a,w,s,d y la tecla "P" para el caso del jugador de las flechas. 

Se dan situaciones del juego donde se necesitan teclas especiales, ya que existen mecánicas dentro del juego, que permiten hacer cosas extras como por ejemplo el intercambio de espacio de los personajes, es decir, intercambiarse pulsando la tecla espaciadora, ya que no hay posibilidad a saltar para ninguno de los jugadores. Aparte, existen las teclas como "esq" para abrir el menú de pausa y de salida del juego, luego con las teclas "q" y "m", se abre una interfaz donde se puede, si el jugador lleva algún ítem encima, guardarlo en su inventario.  

**3.3 Sistema de guardado y carga**

El sistema de guardado es un sistema de guardado automático, hay distintos puntos de control distribuidos por el mapa que, al pasar por ellos, la partida se guarda automáticamente, pero en caso de querer salir del juego antes de llegar a uno de esos puntos, el jugador puede hacerlo sin problemas puesto que su progreso se queda guardado sin ningún problema. Para cargar el juego, se puede hacer desde el menú principal, cargando cualquier partida que haya sido guardada previamente, ya sea desde el último punto de control o un grabado hecho por el jugador.

**3.4 Sistema de dificultad y puntuación**

En Riddle & Wiggle al comienzo de cada partida, no se puede escoger entre niveles de dificultad distintos, el juego tiene un nivel de dificultad estándar. En este juego, no hay un sistema de puntuación, pero sí que a medida que se van descifrando y resolviendo todos los puzzles, se avanza en el juego. 

El jugador consigue más espacio que explorar y estar más cerca de poder lograr su objetivo que será salir, diferentes ítems con los que interactuar con el entorno. Al final del juego, tras acabar toda la secuencia de acertijos,se da una calificación al jugador que va desde la D hasta la S (siendo la D la más baja y la S la más alta). Esta puntuación va en relación de cuanto tiempo haya tardado en pasarse el juego, la cantidad de vidas perdidas en el transcurso de este o incluso por el número de muertes y por consiguiente el número de intentos que tienen los jugadores para pasarse el juego.


**3.5 Jugabilidad**

La jugabilidad hace referencia a todas las experiencias de un jugador durante su interacción con los sistemas del juego. Para la jugabilidad hay que seguir una serie de criterios como la satisfacción, el aprendizaje, la eficiencia, inmersión, motivación, emoción y socialización. Para conseguir todos estos criterios, el juego cuenta con explicaciones de todas las reglas, normas y objetivos que tienen que lograr los jugadores para adentrarse en el mundo, seguir avanzando en él y por último terminar ganando la partida. La dificultad en los puzzles, como la habilidad mental requerida para poder ejecutarlos, dotan a este juego con una capacidad de persuasión, ya que crea en los jugadores una necesidad que puede llegar hasta ser frustrante de la necesidad de pasarse todos los quebraderos de cabeza que se les imponen en su camino a la victoria. Este juego está diseñado para jugadores del tipo achievers o explorers, más centrados en interactuar con el mundo e ir resolviendo puzzles, que se basan en acertijos, enigmas, quebraderos de cabeza, etc que les mantendrán ocupados y con todos los sentidos puestos en la partida para intentar pasarlos.  

**3.6 Niveles** 

En cuanto a los niveles, no se encuentran niveles típicos de cualquier otro videojuego, sino que se encuentra con un solo nivel en toda la experiencia del juego, pero lo que sí caracteriza a este juego, es la serie de puzles que encuentran dentro de la única y misma partida, tiene cierta relación los niveles a los puzzles que tienen que ir resolviendo los jugadores, ya que dentro de que son los puzles si poseen niveles, es decir, tienen un nivel de dificultad distinto, ya que los primeros puzzles son de un nivel de dificultad inferior a los últimos, con la intención de enganchar a los jugadores, ya que si en los primeros puzzles la dificultad es demasiado elevada y se quedan estancados sin saber cómo resolverlos, lo más posible es que estos jugadores se terminan cansando y aburriendo del juego, por lo que hay que tener una subida de nivel moderada y controlada en el nivel de dificultad de las pruebas, debido que un juego demasiado fácil acabaría de la misma manera, con los jugadores totalmente aburridos.

**3.7 Funcionamiento y progresión del juego**

El juego se trata de un escape room contrarreloj, esto significa que los jugadores deben jugar de manera cooperativa por un bien común para escapar de las casas en las que se encuentran con un tiempo determinado. La unica forma de poder escapar del agujero negro que absorbe poco a poco las casas de los  jugadores es resolver los diferentes puzzles, que se componen de enigmas, acertijos y algun que otro quebradero de cabeza. A medida que se resuelven, sin olvidar que es vital la cooperación de su compañero para así lograr pasarlos, van a poder escapar de las habitaciones y tener más clara la salida.

Haciendo referencia a los objetos, en este juego hay variedad de recursos con los que interactuar para poder avanzar en la historia, que son claves y definitivos en el transcurso de la partida, ya que el juego se basa en ir interactuando con estos recursos repartidos por el mapa de juego que deben ser utilizados para resolver todos los puzzles planteados e ir avanzando hasta la salida. La manera de interactuar con los objetos es sencilla ya que solo los jugadores se tienen que acercar al objeto deseado y apretar la tecla correspondiente.

4. **ESTADO DEL JUEGO**
   
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Diagrama%20de%20flujo%20de%20estado%20del%20juego.png)
*Figura 1 - Estado del juego*

5. **INTERFACES**

Este apartado muestra las interfaces de Riddle & Wiggle. Las interfaces presentes en el videojuego son: menú principal, interfaz del juego, menú de inventario y menú de pausa.


**5.1 Menú principal**

Destaca la la utilización de la estética pixel-art que está presente en el juego, se encarga de presentar de manera simple y visual la idea base del gameplay, donde observamos dos personajes que utilizan su magia para superar distintas pruebas y detener a su gran amenaza, el agujero negro.
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/title%20screen%202.png)
*Figura 2 - Interfaz del menú principal*

Las opciones con las cuales el jugador puede elegir si empezar una partida desde cero (nueva partida), continuar la partida ya existente (continuar), modificar aspectos del juego según sus preferencias (ajustes) o cerrar el juego (salir) se encuentran en la parte inferior izquierda de la pantalla.

**5.2 Interfaz del juego**

Una parte fundamental de este videojuego es el ámbito cooperativo. El objetivo para lograr este ámbito es utilizar una misma pantalla, dividiéndola en dos, así un jugador puede interactuar con la mitad izquierda y el otro con la mitad derecha. Esto se ve resaltado en la interfaz, la cual presenta una línea separatoria negra entre las dos pantallas.

Además, es una interfaz simple con pocos gráficos, ya que intenta no abarcar demasiado espacio para que así los jugadores puedan observar la mayor cantidad de mapa posible, facilitando así la resolución de puzzles y pruebas.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/interfaz%20del%20juego.png)
*Figura 3 - Interfaz del juego*

En cuanto a gráficos que se pueden observar, en la esquina superior izquierda y derecha están posicionados los nombres de los personajes que cada jugador controla, en su lado correspondiente. La parte superior contiene un gráfico en forma de “&” que tiene dentro una cuenta regresiva.

Por último están los botones de inventario, que al ser presionados, dan al menú de inventario(único para cada personaje), ilustrados con una mochila en la esquina inferior izquierda y derecha.

**5.3 Menú de inventario**

En referencia al punto anterior, al presionar el botón asignado para el inventario, el jugador podrá ver una interfaz en la cual puede administrar los objetos que recoja.


![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/interfaz%20inventario%202.png)
*Figura 4 - Interfaz del menú de inventario*

Cabe destacar que cada jugador tiene su propia mochila y por lo tanto sus propios objetos, la interfaz se encarga de ilustrar esta diferencia mediante una imagen del personaje que abre el inventario y un mensaje escrito por él.

**5.4 Menú de pausa**

Este menú simple permite al jugador tomarse un descanso y elegir entre distintas opciones: continuar, para seguir jugando, guardar la partida, para mantener el progreso conseguido, ajustes, para modificar sus preferencias de juego y salir, para retroceder al menú principal.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/menu%20pausa%202.png)
*Figura 5 - Interfaz del menú de pausa*

6. **PERSONAJES**

El videojuego cuenta con 2 personajes jugables, Riddle y Wiggle y dos personajes que son relevantes en el guión del juego, el mago malvado y el director de la academia. Este apartado se centrará en estos cuatro.

***Riddle***: Es uno de los protagonistas de la historia. Un jóven y carismático mago, se vale de su gran fuerza física y ambición para, a pesar de su poca astucia, producir poderosa magia. Tiene una complexión física robusta y porta su “ropaje de mago”, es así como llama a su traje que no es nada más que el uniforme de hechicero de su academia Amaurotam que tras un tonto accidente en uno de sus experimentos con polvos mágicos se tiñó de un azúl celeste. 

Al saludar a su mejor amigo y casi compañero de vida en lo que hasta ese momento había sido un día normal de encantamientos en Amaurotam, se dió cuenta de que tras darle el brusco abrazo que como de costumbre le proporcionaba todas las mañanas, no reaccionó como siempre, retorciéndose del dolor y riéndose, sino que ni reaccionó, estaba frío al tacto y pálido como si estuviese muerto. Es entonces cuando Wiggle le explicó que su madre había muerto de la grave enfermedad que acarreaba. Al pasar las semanas, Riddle aguardaba con esperanzas a que su amigo volviese a la normalidad, algo que no ocurrió. Devastado, le propuso a Wiggle algo prohibido en el mundo de la magia: utilizar la magia oscura para devolver la vida a su madre, algo que pondría sus vidas en riesgo.

Es uno de los dos personajes jugables, se vale de su portento físico para resolver puzzles pero carece de agilidad.

***Wiggle***: El otro protagonista de la historia, es un jóven simpático e inteligente al cual le fascina la magia. Utiliza su astucia para producir hechizos útiles e innovadores, demostrando así su proeza para la magia. Tiene una complexión física delgada  y pequeña. Viste el uniforme de la academia Amaurotam, de color morado oscuro y siempre lo lleva impecable.

Llevaba una vida gratificante y feliz hasta que, un día, su madre es afectada por una grave enfermedad. A pesar de esto, Wiggle supo cuidarla y seguir adelante, sin mostrar en su rostro tristeza alguna. Todo siguió así hasta que el momento que temía llegó: su madre falleció. Es aquí cuando Wiggle se derrumba, y procede a vivir semanas como un cuerpo sin alma, sin comunicarse ni siquiera con su fiel mejor amigo Riddle. Hasta que ve una tímida luz al final del túnel tras escuchar el plan de su amigo: utilizar la magia oscura para devolver a la vida a su difunta madre y poder ver así su sonrisa una vez más. Totalmente deprimido y abatido, acepta el reto prohibido sin pensar en las consecuencias, que tras intentarlo, serían muy graves.

Como Riddle, es un personaje jugable, se vale de su inteligencia y agilidad para resolver puzzles, aunque su poca fuerza hace que algunos sean imposibles para él.

***El mago malvado***: El villano de la historia. Un ente malvado y misterioso que alberga un gran poder mágico el cual utiliza de manera macabra. Viste una túnica negra que impide ver su complexión física. Su cara es casi imperceptible, solo se puede ver como esboza una tenebrosa sonrisa. 

Poco se sabe de este oscuro personaje, existen rumores de que fue un antiguo alumno de Amaurotam que tenía un talento nunca antes visto para la magia, se dice que incluso llegó a superar el poder del director. Sin embargo, su avaricia y su sed insaciable de poder le llevó a realizar ciertas prácticas mágicas ilegales en la academia y como consecuencia fue expulsado. Tras esto se dedicó a refinar su poder y buscar vengarse de la academia.

En el juego secuestra y encierra a los protagonistas en dos casas, con distintas pruebas para verificar su poder. En el caso de no poder pasarlas y con ello decepcionar, los matará.

***El director:*** Es el encargado de la academia Amaurotam y el mago más poderoso de ella. Un viejo y estricto hechicero, supervisa todo rincón de la academia con su orbe mágico. Su complexión física es alta y fornida a pesar de su edad. Su pelo es corto y gris, elegantemente estilado y peinado hacia atrás. Su barba, también gris por el pasar de los años, está cuidadosamente estilizada y perfilada. Viste el uniforme de la academia aunque debido a su gran complexión le queda un poco ajustado.

Lleva años a cargo de la academia tras la muerte del anterior director, su padre. Como toda su familia, ha dedicado su vida entera a la magia. Esto le ha proporcionado, por algunos, el título del mago más poderoso del mundo.

En el juego tiene una breve aparición cuando descubre el uso de magia oscura en la academia por parte de Riddle y Wiggle lo cual lo hace enfadar, expulsandolos por 3 días al instante de enterarse de esto. 


7. **ÍTEMS**

Los ítems que se pueden encontrar en este videojuego van ligados a la resolución de los distintos puzles que los jugadores deben completar para avanzar. Estos pueden ser recogidos por los personajes para almacenarlos en el inventario.

- ***Llave***: Dorada y pequeña, sirve para abrir distintas puertas a lo largo del juego. Una vez utilizada, desaparece del inventario del jugador. Se encuentran:
1. En el puzle de la sinfonía secreta, donde es utilizada para abrir la puerta de la habitación de Riddle
1. Tras recoger los tres fragmentos de llave para abrir las puertas de los jardines.
1. Después de organizar las plantas en el jardín para abrir las puertas de las cocinas.
1. En la cocina de la casa de Riddle, utilizada para abrir la puerta del baño en la casa de Wiggle.

- ***Fragmento de llave:*** Trozo de una llave rota. Al juntar tres, se puede utilizar un poco de magia para unir los fragmentos y reparar la llave. Se encuentran en la casa de Riddle: en su habitación, debajo de una mesa cercana a la puerta de la habitación y en un cajón del salón. 

- ***Plantas***: Distintos tipos de plantas plantadas en las macetas de los jardines. Existen seis en total, tres por cada jardín, y son: girasol, rosas rojas y claveles en la casa de Riddle y rosas blancas, lirios morados y tulipanes en la casa de Wiggle.

- ***Caja de cerillas***: Pequeña caja llena de cerillas que se encuentra en el almacén de la casa de Wiggle. Al ser utilizadas por el jugador cerca de una vela, esta se enciende.

- ***Fórmulas***: Páginas arrancadas de unos libros de hechicería que detallan las instrucciones para realizar distintos elixires. Son dos, localizadas en los libros de las bibliotecas. La fórmula para el elixir rojo se encuentra en la casa de Riddle, y lee: *“Un toque de fuego ligado a una dulzura teñidos de rojo originan el elixir del rubí”*. La fórmula para el elixir azul se encuentra en la casa de Wiggle, y lee: *“La frialdad de un amargo invierno se tiñe de azul y crea el elixir azul”.* Para conseguir los elixires detallados en las fórmulas, los jugadores necesitarán mezclar los ingredientes necesarios.

- ***Ingredientes***: Varios ingredientes utilizados para fabricar elixires. Se encuentran catorce en total, siete por cada cocina, siendo: pitahayas, uvas, zumo de tomate, manzana, pomelo, calabaza y zumo de piña en la casa de Riddle, y coco helado, cerezas, zumo de arándanos, zumo de naranja, limón, sandía y melón en la casa de Wiggle. Al escoger tres e introducirlos en un caldero, se mezclarán. Sin embargo, solo la combinación correcta podrá mezclarse correctamente y convertirse en elixir. Para el elixir rojo, la combinación correcta es: pitahayas, zumo de tomate y cerezas y para el elixir azul es: arándanos, coco helado y pomelo.

8. **PUZLES**

Tal y como se ha mencionado anteriormente, la mecánica principal del juego es la resolución de distintos tipos de puzles que se van planteando a medida que se avanza. No existe un sistema de niveles como tal.

El juego se desarrolla en dos escenarios diferentes de manera simultánea, por lo tanto, para poder solucionar los acertijos y continuar en el juego, ambos jugadores deben cooperar y aprovechar la mecánica de teletransporte. Los diferentes retos que se plantean son los siguientes:

**1- Retirar las cajas de la habitación en la que comienza Wiggle**

**"Inicio Abarrotado"**

El mago Wiggle es bastante débil, por lo que él mismo no es capaz de mover las cajas que bloquean la puerta de la habitación en la que se encuentra. Por lo tanto, gracias a la posibilidad de que Riddle se puede teletransportar, debe retirar él mismo las cajas.

**2-	Tocar la melodía secreta en el piano del salón de la casa de Wiggle** 

**“La sinfonía secreta”** 

Después de salir de la habitación, Wiggle puede acceder al pasillo y llegar al salón, donde hay un piano que se puede tocar. Mientras tanto, Riddle sigue encerrado en su habitación. Es en dicha habitación, donde se puede encontrar un libro, en el que aparece el cifrado americano de las notas musicales y una serie de notas escritas de esta manera:

**A – C# - D – F – E**

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Piano.PNG)

*Figura 6 - Teclado con cifrado americano*

Al tocar esta secuencia de notas, se abre un cajón del salón del que sale una llave. Esta puede abrir la puerta de la habitación de Riddle, por lo que, Wiggle se teletransporta y la abre.

**3-	Buscar los fragmentos de la llave del jardín**

**“Entre Pétalos y Enigmas”** 

Mientras estaba encerrado en la habitación, Riddle podía haber encontrado un fragmento de llave. Los otros dos se encuentran escondidos en la casa y los puede buscar una vez salga de la habitación. El primero se encuentra debajo de una mesa cercana a la puerta de la habitación y el segundo en un cajón del salón. Una vez recogidos los tres fragmentos, se crea una llave, que, en esta ocasión, sirve para abrir las puertas de ambas casas hacia el jardín.

**4-	Ordenar las plantas del jardín**

**“El Jardín en Armonía”**

En ambos jardines, se pueden encontrar tres macetas con plantas diferentes, colocadas sobre unos pedestales muy curiosos. Si se investiga en los salones, se puede observar que en cada uno hay un cuadro diferente, en el que se refleja el orden que deben seguir dichas plantas. El problema es que están mezcladas en ambas casas, por lo que Riddle y Wiggle deben teletransportarse para colocar ambos jardines.

En la casa de Riddle se puede encontrar un girasol, unas rosas rojas y unos claveles, y en la casa de Wiggle unas rosas blancas, unos lirios morados y unos tulipanes.

Según los cuadros, en el jardín de Riddle se deben colocar las plantas de esta manera, de izquierda a derecha: **rosas rojas, claveles, tulipanes**. En el jardín de Wiggle: **lirios, girasol, rosas blancas**.

**5-	Buscar una llave en las cocinas**

**"El Secreto de los Fogones"**

Después de haber ordenado las plantas correctamente, cae una nueva llave, que abre las puertas de las cocinas. En la de Riddle, se encuentra de nuevo otra llave diferente, que, en este caso, abre el baño de la casa de Wiggle.

**6-	Descifrar el código del almacén**

**“Enigma del almacén”**

En las paredes del baño recién accesible, se encuentra un código pintado:

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/C%C3%B3digo.PNG)

*Figura 7 - Código en la pared*

Contando el número de vértices de cada figura, se traducen las formas geométricas a números: **36 + 143**. Por lo tanto, el código que se debe introducir en la puerta del almacén, que se encuentra en la puerta del salón de Wiggle, es **179**.

**7-	Encontrar las cerillas del almacén**

**“La llama perdida”**

Una vez introducido el código, se puede acceder al almacén, en el que, buscando, se encuentra una caja de cerillas, que se puede utilizar para encender velas.

**8-	Encender las velas indicadas**

**“En busca de las llamas felinas”**

Tras conseguir las cerillas, se pueden encender las velas que hay encima de unas estatuas de gatos. En los cajones, se puede leer un pergamino con un acertijo: 

*“Cuando el rubí y el zafiro se iluminan, el equilibrio se alcanza”*

Las estatuas de los gatos son de color azul, naranja, blanco, rojo y verde, de izquierda a derecha. A continuación de la frase anterior, aparecen una serie de premisas:

\-   	Zafiro está inmediatamente a la derecha de Esmeralda.

\-   	Perla está en un extremo

\-   	Rubí está inmediatamente a la derecha de Diamante

\-   	Esmeralda no es azul

\-   	Zafiro no es blanco

El orden correcto de los nombres es, de izquierda a derecha: **Perla, Diamante, Rubí, Esmeralda y Zafiro**.

Por lo tanto, si en una de las casas se ilumina la vela encima de Rubí, y, en la otra de Zafiro, se activa un mecanismo que abre la puerta del laboratorio y la biblioteca de ambos lugares.

**9-	Buscar la fórmula de los elixires en la biblioteca**

**“Elixir en las letras”**

Una vez abiertas las puertas a las bibliotecas, se puede investigar en los libros. En la casa de Riddle, se encuentra la fórmula para el elixir rojo:

*“Un toque de fuego ligado a una dulzura teñida de rojo originan el elixir del rubí”*. Mientras tanto, en la casa de Wiggle, se encuentra la fórmula para el elixir azul: *“La frialdad de un amargo invierno se tiñe de azul y crea el elixir azul”*.



**10-  Crear los elixires y combinarlos**

**“Maestro de las mezclas”**

Una vez obtenidas las fórmulas necesarias para crear los elixires, se deben obtener los ingredientes adecuados en las cocinas.

En la cocina de Riddle se encuentran los siguientes ingredientes: pitahayas, uvas, zumo de tomate, manzana, pomelo, calabaza y zumo de piña.

En la cocina de Wiggle, se encuentran: coco helado, cerezas, zumo de arándanos, zumo de naranja, limón, sandía y melón.

De estos ingredientes, se deben escoger tres e introducirlos en un caldero del laboratorio. La combinación correcta para el elixir rojo es: **pitahayas, zumo de tomate y cerezas** y la combinación correcta para el elixir azul es: **arándanos, coco helado y pomelo**. Los ingredientes están mezclados en ambas cocinas, por lo que los personajes deben teletransportarse para poder conseguir crear los elixires.

**9. PROGRESO DEL JUEGO**

El avance en el juego como tal, se produce mediante la resolución de los puzzles o acertijos citados en la sección anterior. Tras su superación, se van desbloqueando nuevas zonas en ambos mapas, como resultado del progreso del juego, tal y como se muestra en los siguientes planos. Las zonas marcadas con color verde son aquellas que son accesibles en ese momento:


***Estado inicial:***
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Estado%200.png)
*Figura 8 - Mapa en estado inicial*

***Estado 1:***
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Estado%201.png)
*Figura 9 - Mapa en estado 1*

***Estado 2:***
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Estado%202.png)
*Figura 10 - Mapa en estado 2*

***Estado 3:***
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Estado%203.png)
*Figura 11 - Mapa en estado 3*

***Estado 4:***


![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Estado%204.png)
*Figura 12 - Mapa en estado 4*

***Estado 5:***


![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Estado%205.png)
*Figura 13 - Mapa en estado 5*

***Estado 6:***


![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Estado%206.png)
*Figura 14 - Mapa en estado 6*

***Estado 7:***


![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Estado%207.png)
*Figura 15 - Mapa en estado 7*

Mediante el siguiente diagrama de flujo, se especifica el momento en el que se pasa de un estado del juego a otro, mediante la superación de un determinado reto.


![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Diagrama%20de%20flujo.png)
*Figura 16 - Diagrama de flujo progreso del juego*

**10.  ARTE**

**10.1   Personajes:**

A continuación se van a presentar las imágenes y bocetos de la creación de los personajes. Todos los personajes protagonistas son originales y realizados siguiendo el estilo Pixelart en la aplicación Photoshop

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Riddle.png)

*Figura 17 - Personaje de Riddle*

**Riddle:** Personaje más bajito y corpulento, esto impedirá que pueda pasar por sitios de estrecho tamaño pero sí pasadizos de baja altura.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Wiggle.png)

*Figura 18 - Personaje de Wiggle*

**Wiggle:** Personaje más alto y delgado, esto impedirá que pueda pasar por pasadizos a baja altura pero si por los más estrechos

**10.2	Items:**

A continuación se van a presentar imágenes y bocetos de los elementos del videojuego. Algunos son originales y otros sacados de una biblioteca para uso libre de los assets. Todos realizados siguiendo el estilo Pixelart.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/bomb_anim_spritesheet.png)

*Figura 19 - Animación bomba*

**Bomba:** Trabajo original en la aplicación de Photoshop.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/bookshelf.png)

*Figura 20 - Estantería*

**Estantería:** Trabajo original en la aplicación de Photoshop.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/chest_closed_anim_f0.png)

*Figura 21 - Cofre*


**Cofre:** Trabajo extraído de la biblioteca de assets Itch.io, realizado por el usuario o\_lobster.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/flag_green.png)

*Figura 22 - Banderas*

**Banderas:** Trabajo extraído de la biblioteca de assets Itch.io, realizado por el usuario o\_lobster.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/key_silver.png)

*Figura 23 - Llave*

**Llave:** Trabajo original en la aplicación de Photoshop.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/potion_red.png)
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/potion_green.png)
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/potion_yellow.png)

*Figura 24 - Pociones*

**Pociones:** Trabajo extraído de la biblioteca de assets Itch.io, realizado por el usuario o\_lobster.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/prisoner.png)

*Figura 25 - Esqueleto*

**Esqueleto:** Trabajo extraído de la biblioteca de assets Itch.io, realizado por el usuario o\_lobster.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/table.png)

*Figura 26 - Mesas*

**Mesas:** Trabajo extraído de la biblioteca de assets Itch.io, realizado por el usuario o\_lobster.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/torch_spritesheet.png)

*Figura 27 - Antorcha*

**Antorcha:** Trabajo extraído de la biblioteca de assets Itch.io, realizado por el usuario o'lobster.





**10.3	Escenario**

A continuación se van a presentar las imágenes y bocetos de la creación de los elementos que componen el escenario. Algunos son originales y otros sacados de una biblioteca para uso libre de los assets. Todos realizados siguiendo el estilo Pixelart.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/wall_bottom.png)
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/wall_side_left%20.png)
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/wall_top_1.png)

*Figura 28 - Props paredes*

**Props Paredes:** Estos assets están sacados de la página itch.io, en concreto del usuario o\_lobster.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/floor_1.png)
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/floor_2.png)
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/floor_4.png)
![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/floor_7.png)

*Figura 29 - Props suelo*

**Props Suelos:** Estos assets están sacados de la página itch.io, en concreto del usuario o\_lobster.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Mapa%20Wiggle.PNG)

*Figura 30 - Mapa Wiggle*

**Mapa de Wiggle:** Este escenario es original realizado en photoshop con los elementos sacados de la página itch.io, en concreto del usuario o\_lobster.

![Image text](https://github.com/joseeeema/JeR_08/blob/main/AssetsGDD/Mapa%20Riddle.PNG)

*Figura 31 - Mapa Riddle*

**Mapa de Riddle:** Este escenario es original realizado en photoshop con los elementos sacados de la página itch.io, en concreto del usuario o\_lobster.



**11. MÚSICA Y EFECTOS DE SONIDO**

La música en el juego va a ser constante y en bucle. Va a ser una música electrónica estilo retro, de suspense para introducir más al jugador en la partida. 

Los efectos de sonido van a  depender de las acciones del jugador, ya sea andar, interactuar con los ítems del escenario o superar un puzzle. Estos efectos han sido recogidos de diferentes bibliotecas de sonidos.

