$(document).ready(function() {




    //API details
    var req = new XMLHttpRequest();
    var URL = "https://netflixroulette.net/api/api.php?";
    var queryType = "director=";
    var director = "Quentin%20Tarantino";
    req.open('GET', URL + queryType + director, true);
    req.addEventListener("load", function() {
        var response = JSON.parse(req.responseText);
        console.log(response);
        response.forEach(function(e){
            console.log(e);
            var img = e.poster;
            var nombrePelicula = e.show_title;
            var summary = e.summary;
            var categoria = e.category;
            var director = e.director;
            var actores = e.show_cast;
            

            $(".movie-title").click(function(){
                $(".detalles").append("<img src='"+img+"'>");
                $(".moviesDetalles").append(nombrePelicula + summary + categoria + director);
                $(".actorsName").append("<a>"+actores+"</a>");
            })
        });
    });
    req.send(null);
    //END API details


});
    //funcion para que se despliegue el menu lateral
    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }
    //funcion para cerrar el menu lateral
    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }