﻿$(document).ready(function() { 
	
	$(".image").click(function(){	
	  	var img = $(this);	
		var src = img.attr('src'); 
		$("body").append("<div class='popup'>"+"<div class='popup_bg'></div>"+"<img src="+src+" class='popup_img' >"+"</div>"); 
		$(".popup").fadeIn(400); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(200);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 200);
		});
	});
	
});