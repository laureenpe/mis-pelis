$(document).ready(function() {

	var req = new XMLHttpRequest();
	var URL = "https://netflixroulette.net/api/api.php?";
	var queryType = "director=";
	var director = "Quentin%20Tarantino";
	req.open('GET', URL + queryType + director, true);
	req.addEventListener("load", function() {
		var response = JSON.parse(req.responseText);
		console.log(response);
		response.forEach(function(ele){
			console.log(ele);
			var titulo = ele.show_title;
			var anio = ele.release_year;
			var categoria = ele.category;
			var duracion = ele.runtime;
			var director = ele.director;
			$(".mostrar-pelis").append("<div class='movie'><div class='row'><div class='col m8 s8'><div class='titulos'><a href='' class='movie-title'>"+titulo+"</a><p class='movie-year'>"+anio+"</p><div class='lineavert'></div><p class='category'>"+categoria+"</p></div></div><div class='col m4 s4'><button class='add-favorite'>Add favorites</button></div></div><div class='row'><div class='col m8 s8'><div class='movie-details'><i class='fa fa-clock-o' aria-hidden='true'></i><p class='movie-minutes'>"+duracion+"</p><i class='fa fa-film' aria-hidden='true'></i><p class='movie-director'>"+director+"</p></div></div><div class='col m4 s4'><i class='fa fa-star' aria-hidden='true'></i></div></div></div>")
		});
     var img = ele.poster;
     var nombrePelicula = ele.show_title;
     var summary = ele.summary;
     var categoria = ele.category;
     var director = ele.director;
     var actores = ele.show_cast;
      $(".movie-title").click(function(){
                $(".detalles").append("<img src='"+img+"'>");
                $(".moviesDetalles").append(nombrePelicula + summary + categoria + director);
                $(".actorsName").append("<a>"+actores+"</a>");
      });
	});
	req.send(null);
});

	//funcion para que se despliegue el menu lateral
	function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
	}
	//funcion para cerrar el menu lateral
	function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	}

