var listaFilmes = ["https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg", "https://upload.wikimedia.org/wikipedia/pt/3/3a/Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg", "https://m.media-amazon.com/images/I/91MJHdDvZAL._AC_SY741_.jpg"];


// function mostrarTodosOsFilmes(){
//     for (index = 0; index <listaFilmes.length; index++) {
//         document.write("<img src=" + listaFilmes[index] + ">")
//     }
// }

function adicionarFilme(){
  var campofilme = document.getElementById("filme").value
  if(campofilme.endsWith(".jpg")){
     listaFilmes(campofilme)
  } else {
      console.error("Endereço Inaválido")
  }
  document.getElementById("filme").value = ""  
}

function ListarFilmes(filme){
    var elementoFilmeFavorito = "<img src=" + filme + ">"
    var elementoListaFilme = document.getElementById("listaFilmes")
    elementoListaFilme.innerHTML = elementoListaFilme.innerHTML =elementoFilmeFavorito;
}

