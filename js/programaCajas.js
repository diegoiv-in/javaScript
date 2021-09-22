function crearCajas()
{
    var numCajas = parseInt(document.getElementById("numCajas").value); 
    var color = document.getElementById("colores").value; 
    var bordes = document.getElementById("bordes").value; 

    var estilo = "width: 70px; height: 70px; margin: 10px; border: 5px "+bordes+" "+color; 
    var caja = "";

    for(var i = 0; i < numCajas; i++)
    {
        caja += "<aside style=\""+estilo+"\"></aside>";
    }

    document.getElementById('cajas').innerHTML = caja;
}