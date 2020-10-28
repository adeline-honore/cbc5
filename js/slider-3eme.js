'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

// tableau contenant les lobjets slide
let slide = 

[
	{ image: "asset/reunion-parents-professeurs-3eme/01.jpeg"}, 
	{ image: "asset/reunion-parents-professeurs-3eme/02.jpeg"}, 
	{ image: "asset/reunion-parents-professeurs-3eme/03.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/04.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/05.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/06.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/07.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/08.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/09.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/10.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/11.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/12.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/13.jpeg"},
	{ image: "asset/reunion-parents-professeurs-3eme/14.jpeg"}
];


let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("parent-prof").src = slide[numero].image;
}
