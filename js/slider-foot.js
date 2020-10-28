'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

// tableau contenant les lobjets slide avec leur source et leur légende
let footSlider = 

[
    { image: 'asset/presentation-section-reunion-parents/01.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/02.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/03.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/04.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/05.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/06.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/07.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/08.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/09.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/10.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/11.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/12.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/13.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/14.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/15.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/16.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/17.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/18.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/19.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/20.jpeg'},
    { image: 'asset/presentation-section-reunion-parents/21.jpeg'}
];

let figureSliderF;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// fonction SLIDE SUIVANTE 
function nextSlideF()
{
	//incrementation du compteur
    cpt++;
    
    //vérification du compteur et réinitialisation si besoin
    if(cpt >= footSlider.length)
    {
		cpt = 0;
	}
	
    //affichage des nouvelles données
	figureSliderF.src = footSlider[cpt].image;
	
}


// fonction SLIDE PRECEDANTE 
function prevSlideF()
{
	// décrementation du compteur
    cpt--;
    
    //vérification du compteur
    if(cpt < 0)
    {
		cpt = footSlider.length-1;
	}
	
    //affichage des nouvelles données
	figureSliderF.src = footSlider[cpt].image;

}

function playF()
{
		timer = setInterval(nextSlideF, 3000);
}

function playPause(){
	
	//pour changer le bouton play en bouton pause pPI prendre le i du bouton
	pPI.classList.toggle("fa-play");
	pPI.classList.toggle("fa-pause");
}

