$(document).ready(function() {
	/* Store the original positions */
	 var $images = $('.hover-gif');
     console.log($images);

     $images.each(function(index, element){
        $(element).mouseover(function(){
            element.src = element.src.replace('.png','.gif');
        })
        $(element).mouseout(function(){
            element.src = element.src.replace('.gif','.png');  
        })
     })
    
});