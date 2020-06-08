
//inizializa el juego 
var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    //carga el player para poder moverse por la imagen de fondo
    game.load.image('player', 'images/focus.png');
    //Carga la imagenes de fondo y las imagenes de la exposición virtual
    game.load.image('background','images/EXPO.jpg');
    //imagenes de infografias
    game.load.image('infografia1', 'images/infografia2.jpg');
    game.load.image('infografia2', 'images/infografia3.jpg');
    game.load.image('infografia3', 'images/infografia4.jpg');
    game.load.image('infografia4', 'images/infografia5.jpg');
    //imagenes de fotos
    game.load.image('foto1', 'images/foto1.jpg');
    game.load.image('foto2', 'images/foto2.jpg');
    game.load.image('foto3', 'images/foto3.jpg');
    game.load.image('foto4', 'images/foto4.jpg');
    //flechas de desplazamiento
    game.load.image('right', 'images/flecha-der.png');
    game.load.image('left', 'images/flecha-izq.png');
    game.load.image('rightGris', 'images/flecha-der-gris.png');
    game.load.image('leftGris', 'images/flecha-izq-gris.png');
    //botones de la galeria ver, link, video, infografia
    game.load.spritesheet('info', 'images/info.png', 560, 389);
    game.load.spritesheet('ver', 'images/ver.png', 100, 100);
    game.load.spritesheet('facebook', 'images/facebook.png', 100, 100);
    game.load.spritesheet('close', 'images/close.png', 100, 100);
    game.load.spritesheet('desplegar', 'images/desplegar.png', 210, 210);
    game.load.spritesheet('play', 'images/play.png', 100, 100);
    game.load.spritesheet('play-big', 'images/boton-big.png', 100, 100);
    
}
//tamaño del juego y numero de saltos al pulsar flechas
const WIDTH_FINAL = 5000;
const WIDTH_START = 0;
const MOVING = 80;

//inicializa variables
var group;
var group2;
var player;
var background;

var leftArrow;
var rightArrow;

var infografia1;
var closeButton;
var infografia2;
var closeButton2;
var infografia3;
var closeButton3;
var infografia4;
var closeButton8;

var foto1;
var closeButton4;
var foto2;
var closeButton5;
var foto3;
var closeButton6;
var foto4;
var closeButton7;

var video1;
var videoImage1;
var closeVideo1;
var video2;
var videoImage2;
var closeVideo2;
var video3;
var videoImage3;
var closeVideo3;

var info1;
var info2;
var verInfo1;
var verInfo2;
var verInfo3;
var verInfo4;

var verfoto1;
var verfoto2;
var verfoto3;
var verfoto4;

var marco1;
var vervideo1;

var marco2;
var vervideo2;

var marco3;
var vervideo3;

//variable de salto de desplazamiento de primera vez
var firstTime = true;

function create() {

    //Carga el fondo y defina el tamaño del mundo
    game.world.setBounds(0, 0, 5000, 600);
    background = game.add.tileSprite(0, 0, 5000, 600, 'background');
    //carga el jugador imaginario
    player = game.add.sprite(500, 200,'player');
    //añade los grupos para traer al frente siempre a las flechas
    group2 = game.add.group();
    group = game.add.group();
    
    //carga infografias con sus respectivos botones de cerrar
    infografia1 = group.create(300, 10, 'infografia1');
    closeButton = group.create(1050, 0, 'close');
    
    infografia2 = game.add.image(1800, 40, 'infografia2');
    closeButton2 = game.add.sprite(2460, 0, 'close');

    infografia3 = game.add.image(2600, 0, 'infografia3')
    closeButton3 = game.add.sprite(3410, -10, 'close');
    
    infografia4 = game.add.image(4000, 10, 'infografia4');
    closeButton8 = game.add.sprite(4590,0, 'close');

    //carga fotos con sus respectivos botones de cerrar

    foto1 = game.add.image(2900, 0, 'foto1');
    closeButton4 = game.add.sprite(3150, 0, 'close');

    foto2 = game.add.image(3200, 0, 'foto2');
    closeButton5 = game.add.sprite(3410, 0, 'close');

    foto3 = game.add.image(4200, 0 , 'foto3');
    closeButton6 = game.add.sprite(4410, 0, 'close');
    
    foto4 = game.add.image(4400, 0, 'foto4');
    closeButton7 = game.add.sprite(4610, 0, 'close');

    
    //carga flechas de desplazamiento
    rightArrow = game.add.image(1050, 150, 'right');
    leftArrow = game.add.image(50, 150, 'left');
    leftArrow.tint = 0x8e9190;
    //Añade los botones

    info1 = game.add.sprite(1096, 181, 'info');
    info1.scale.setTo(1.2,1.2);
    info2 = game.add.sprite(4797, 290, 'facebook');
    info2.scale.setTo(1.2,1.2);


    verInfo1 = game.add.sprite(1100, 345,'ver');
    verInfo2 = game.add.sprite(1974, 313, 'ver');
    verInfo3 = game.add.sprite(2840, 335, 'ver');
    verInfo4 = game.add.sprite(4750, 300, 'ver');

    verfoto1 = game.add.sprite(3210, 335, 'desplegar');
    verfoto1.scale.setTo(1.2,1.2);
    verfoto2 = game.add.sprite(3437, 375, 'desplegar');
    verfoto2.scale.setTo(1.2,1.2);
    verfoto3 = game.add.sprite(4194, 355, 'desplegar');
    verfoto3.scale.setTo(1.2,1.2);
    verfoto4 = game.add.sprite(4406, 335, 'desplegar');
    verfoto4.scale.setTo(1.2,1.2);
    
    vervideo1 = game.add.sprite(1510, 125, 'play-big');
    vervideo2 = game.add.sprite(2640, 282, 'play');
    vervideo3 = game.add.sprite(3805, 30, 'play-big');
    vervideo3.scale.setTo(0.87,0.87);

    //habilita el input en todos los botones
    rightArrow.inputEnabled = true;
    leftArrow.inputEnabled = true;

    info1.inputEnabled = true;
    info2.inputEnabled = true;

    verInfo1.inputEnabled = true;
    verInfo2.inputEnabled = true;
    verInfo3.inputEnabled = true;
    verInfo4.inputEnabled = true;
    verfoto1.inputEnabled = true;
    verfoto2.inputEnabled = true;
    verfoto3.inputEnabled = true;
    verfoto4.inputEnabled = true;

    vervideo1.inputEnabled = true;
    vervideo2.inputEnabled = true;
    vervideo3.inputEnabled = true;

    closeButton.inputEnabled = true;
    closeButton2.inputEnabled = true;
    closeButton3.inputEnabled = true;
    closeButton4.inputEnabled = true;
    closeButton5.inputEnabled = true;
    closeButton6.inputEnabled = true;
    closeButton7.inputEnabled = true;
    closeButton8.inputEnabled = true;




    //visibilidad en falso de botones de cerrar, infografias, fotos y marcos de video
    infografia1.visible = false;
    closeButton.visible = false;
    infografia2.visible = false;
    closeButton2.visible = false;
    infografia3.visible = false;
    closeButton3.visible = false;
    infografia4.visible = false;
    closeButton8.visible = false;

    foto1.visible = false;
    closeButton4.visible = false;
    foto2.visible = false;
    closeButton5.visible = false;
    foto3.visible = false;
    closeButton6.visible = false;
    foto4.visible = false;
    closeButton7.visible = false;

    //camara sigue al jugador definido anteriormente para desplazarse por la pantalla
    game.camera.follow(player);

    //Al hacer click en cada botón de navegación, ejecuta las funciones listener y leftclick
    rightArrow.events.onInputDown.add(listener, this);
    leftArrow.events.onInputDown.add(leftClick, this);

    //al hacer click en los botones llama a la funcion toggelInfo (para cambiar la visibilidad de los elementos)
    closeButton.events.onInputDown.add(() =>toggelInfo(infografia1, closeButton), this);
    verInfo1.events.onInputDown.add(() =>toggelInfo(infografia1, closeButton), this);
    closeButton2.events.onInputDown.add(() =>toggelInfo(infografia2, closeButton2), this);
    verInfo2.events.onInputDown.add(() =>toggelInfo(infografia2, closeButton2), this);
    closeButton3.events.onInputDown.add(() => toggelInfo(infografia3, closeButton3), this);
    verInfo3.events.onInputDown.add(() => toggelInfo(infografia3, closeButton3), this);
    closeButton8.events.onInputDown.add(() => toggelInfo(infografia4, closeButton8), this);
    verInfo4.events.onInputDown.add(() => toggelInfo(infografia4, closeButton8), this);

    //al hacer click en los botones llama a la funcion toggelInfo (para cambiar la visibilidad de los elementos)
    verfoto1.events.onInputDown.add(() => toggelInfo(foto1, closeButton4), this);
    closeButton4.events.onInputDown.add(() => toggelInfo(foto1, closeButton4), this);
    verfoto2.events.onInputDown.add(() => toggelInfo(foto2, closeButton5), this);
    closeButton5.events.onInputDown.add(() => toggelInfo(foto2, closeButton5), this);
    verfoto3.events.onInputDown.add(() => toggelInfo(foto3, closeButton6), this);
    closeButton6.events.onInputDown.add(() => toggelInfo(foto3, closeButton6), this);
    verfoto4.events.onInputDown.add(() =>toggelInfo(foto4, closeButton7),this);
    closeButton7.events.onInputDown.add(() => toggelInfo(foto4, closeButton7), this);

    //al hacer click en los botones llama a la funcion showvideo (para cambiar la visibilidad de los videos, los crea o los destruye)

    vervideo1.events.onInputDown.add(() => showVideo1(),this);

    vervideo2.events.onInputDown.add(() => showVideo2(),this);

    vervideo3.events.onInputDown.add(() => showVideo3(),this);
    
    //al hacer click llama a la funcion para abrir enlace externo
    info1.events.onInputDown.add(click, this);
    info2.events.onInputDown.add(click2, this);

    
    //Se añaden al grupo para tener las flechas al frente siempre

    group.add(rightArrow);
    group.add(leftArrow);

    group.add(info1);
    group.add(info2);

    group.add(verInfo1);
    group.add(verInfo2);
    group.add(verInfo3);
    group.add(verInfo4);

    group.add(vervideo1);
    group.add(vervideo2);
    group.add(vervideo3);

    group.add(verfoto1);
    group.add(verfoto2);
    group.add(verfoto3);
    group.add(verfoto4);

    group.add(closeButton);
    group.add(closeButton2);
    group.add(closeButton3);
    group.add(closeButton4);
    group.add(closeButton5);
    group.add(closeButton6);
    group.add(closeButton7);
    group.add(closeButton8);

    group.add(infografia1);
    group.add(infografia2);
    group.add(infografia3);
    group.add(infografia4);

    group.add(foto1);
    group.add(foto2);
    group.add(foto3);
    group.add(foto4);

    group.moveDown(vervideo1);
    group.moveDown(background);

    //coloca  a las flechas en el frente
    group.moveUp(leftArrow);
    group.moveUp(rightArrow);   


}
//funcion cuando se selecciona la flecha derecha
function listener() {
    //coloca  a las flechas en el frente
    group.moveUp(leftArrow);
    group.moveUp(rightArrow);
    //si llega al final no haga nada
    if (rightArrow.position.x >= WIDTH_FINAL - MOVING - 100){
        rightArrow.tint = 0x8e9190;
        return;
    }
    leftArrow.tint = 0xffffff;
    rightArrow.tint = 0xffffff;
    //Si es la primera vez salta mas grande 
    if (firstTime){
        player.position.x += 800;
        rightArrow.position.x += 650;
        leftArrow.position.x += 600;
        firstTime = false;
    }else{
        //salto normal
        player.position.x += MOVING;
    }
    //las flechas tambien se desplazan con el jugador
    rightArrow.position.x += MOVING;
    leftArrow.position.x += MOVING;

}
//Al hacer click en la flecha izquierda
function leftClick (){
    //si esta al comienzo de la imagen no haga nada
    if (leftArrow.position.x <= WIDTH_START + MOVING + 100){
        leftArrow.tint = 0x8e9190;
        return;
    }
    rightArrow.tint = 0xffffff;
    leftArrow.tint = 0xffffff;
    //coloca  a las flechas en el frente
    group.moveUp(leftArrow);
    group.moveUp(rightArrow);
    //mueve el jugador y las flechas
    player.position.x -= MOVING;
    rightArrow.position.x -= MOVING;
    leftArrow.position.x -= MOVING

}

//muestra el video 1
showVideo1 = () =>{
    //coloca  a las flechas en el frente
    group.moveUp(leftArrow);
    group.moveUp(rightArrow);
    //se abre la ventana emergente
    window.open('videos/video1.html', '_blank', 'location=yes,height=570,width=759,scrollbars=yes,status=yes');
}


//mismo procedimiento anterior pero con los videos 2 y 3
showVideo2 = () =>{
    group.moveUp(leftArrow);
    group.moveUp(rightArrow);

    window.open('videos/video2.html', '_blank', 'location=yes,height=570,width=759,scrollbars=yes,status=yes');
}

showVideo3 = () =>{
    group.moveUp(leftArrow);
    group.moveUp(rightArrow);
    
    window.open('videos/video3.html', '_blank', 'location=yes,height=570,width=759,scrollbars=yes,status=yes');
}


//para quitar los elementos del grupo
function removeGroup() {

    game.world.remove(group);

}

//cuando hace click en el primer link, se abre una nueva ventana con los parametros listados
function click() {
    window.open('https://aulavivaparalapaz.wordpress.com', '_blank', 'location=yes,scrollbars=yes,status=yes');
}
//cuando hace click en el segundo link, se abre una nueva ventana con los parametros listados
function click2() {
    window.open('https://www.facebook.com/groups/1261733320537963', '_blank', 'location=yes,scrollbars=yes,status=yes');
}

//para cambiar la visibilidad de los argumentos de la función
function toggelInfo (infografia, closeButton){
    group.moveUp(leftArrow);
    group.moveUp(rightArrow);
    //Si estaba en true pasará a false y no se vera. Y de la otra forma
    infografia.visible = !infografia.visible; 
    closeButton.visible = !closeButton.visible;
    //Este se coloca porque una infografia se proyecta encima de su posición
    verInfo3.visible = !verInfo3.visible;
}
