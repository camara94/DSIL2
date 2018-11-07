// Voici le fichier JavaScript référencé par index.html. Il est actuellement vide.
// En ajoutant du code dans ce fichier vide et en affichant index.html dans un
// navigateur, vous pouvez tester la page d'exemple ou suivre les exemples du livre.
$(document).ready(function() {
	
	            //    1-	Ajoutez la classe horizontal aux éléments de premier niveau de la liste (comédies, tragédies et historiques),
               // $('#selected-plays > li').addClass('horizontal');
     $('#selected-plays > li').attr('class','horizontal');
	 
	 
               //2-	Ajoutez la classe sub-level à tous les éléments de la liste qui ne sont pas de la classe horizontal 
              //  $('#selected-plays> li:not(.horizontal)').addClass('sub-level');
               $('#selected-plays   li:not(.horizontal) ').attr('class','sub-level');
              //('*:not(.horizontal) ').attr('class','sub-level');
          //$('#selected-plays   li:gt(3)').attr('class','sub-level');
 
                  //    3-	Ajoutez la classe mailto à tous les liens de types courrier électronique,  
                 // $('a[href^="mailto:"]').addClass('mailto');
       $('a[href^="mailto:"]').attr('class','mailto');
	   
	   
                //     4-	Ajoutez la classe pdflink à tous les liens vers des fichiers pdf,  
               // $('a[href$=".pdf"]').addClass('pdflink');
       $('a[href$=".pdf"]').attr('class','pdflink');
});