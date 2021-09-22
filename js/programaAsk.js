
function mostrarencuesta() 
{
    var res1 = document.getElementById("res1").value;
    var res2 = document.getElementById("res2").value;
    var res3 = document.getElementById("res3").value;
    var res4 = document.getElementById("res4").value;
    var res5 = document.getElementById("res5").value;
    datos = "¡Resultados!<br><b>¿Qué especialidad de Tecnologias de la informacion escoges?</b> <br>R= " + res1 +
        "<br><b>¿Qué materia te gustaria mas de la carrera ?</b> <br>R= " + res2 +
        "<br><b>¿Qué lenguaje de programacion has querido aprender?</b> <br>R= " + res3 +
        "<br><b>¿Que es lo que mas te gustaria hacer?</b> <br>R= " + res4 +
        "<br><b>¿Que marca de computadora tienes ?</b> <br>R= " + res5;
    document.getElementById("resultado2").innerHTML = datos;
}