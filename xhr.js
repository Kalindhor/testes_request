var xhr = new XMLHttpRequest();
var documento = {
    "userId": 200,
    "id": 12,
    "title": "noticia exclusiva",
    "body": "dev larga jquery após descobrir o quão fácil é viver sem ele"
}

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr);
    }
}
xhr.open("POST","https://jsonplaceholder.typicode.com/posts");

xhr.send(documento)
   