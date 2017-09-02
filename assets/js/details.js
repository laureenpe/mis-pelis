$(document).ready(function () {
    loadDataMovies();
    getFromLocalStorage(); //obtener local storage

});

function loadDataMovies() {
	var req = new XMLHttpRequest();
	var URL = "https://netflixroulette.net/api/api.php?";
	var queryType = "director=";
	req.open('GET', URL + queryType + director, true);
	req.addEventListener("load", function () {
		response = JSON.parse(req.responseText);
		console.log(response);
		response.forEach(function (ele) {
		var titulo = ele.show_title;
		var anio = ele.release_year;
		var categoria = ele.category;
        var duracion = ele.runtime;
        var id = ele.id;
		//var director = ele.director;
		$(".favorites-show").append("<div id=#movie_"+id+  "class='movie'><div class='row'><div class='col m8 s8'><div class='titulos'><a href='details.html' class='movie-title'>" + titulo + "</a><p class='movie-year'>" + anio + "</p><div class='lineavert'></div><p class='category'>" + categoria + "</p></div></div><div class='col m4 s4'><button class='add-favorite'>Add favorites</button></div></div><div class='row'><div class='col m8 s8'><div class='movie-details'><i class='fa fa-clock-o' aria-hidden='true'></i><p class='movie-minutes'>" + duracion + "</p><i class='fa fa-film' aria-hidden='true'></i><p class='movie-director'>" + director + "</p></div></div><div class='col m4 s4'><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i></div></div></div>");

	});
	});
	req.send(null);
	
}