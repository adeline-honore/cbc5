'use strict';

/***********************************************************************************/
/* ********************************** CODE PRINCIPAL ***************************** */
/***********************************************************************************/

document.addEventListener('DOMContentLoaded', function(){

	cpt = 0;
	timer = null;

	// effet toggle de l'affichage des boutons class="toogle-button"
	showHide();
	
	/* ********************* HOME.html : SLIDER ********************* */

	figureSlider = document.querySelector("#sliderhome img");
	
	// Lecture au chargement de la page
	play();
	
	
	/* *********************  FOOTBALL.html : SLIDER ********************* */
	
    let prev = document.getElementById("slider-prev");
	let next = document.getElementById("slider-next");
	
	prev.addEventListener('click', prevSlideF);
	next.addEventListener('click', nextSlideF);
	

	figureSliderF = document.querySelector("#slider-foot img");

	
});
