'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

// tableau contenant les lobjets slide avec leur source
let tableSlider = 
[
    { image: 'img/slider/homeslider1.jpg'},
    { image: 'img/slider/homeslider2.jpg'},
    { image: 'img/slider/homeslider3.jpg'}
];

let cpt;
let timer;
let figureSlider;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// fonction SLIDE SUIVANTE 
function nextSlide()
{
	//incrementation du compteur
    cpt++;
    
    //vérification du compteur et réinitialisation si besoin
    if(cpt >= tableSlider.length)
    {
		cpt = 0;
	}
	
    //affichage des nouvelles données
	figureSlider.src = tableSlider[cpt].image;
	
}

function play()
{
		timer = setInterval(nextSlide, 3000);
}
