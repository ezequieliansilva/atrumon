let reptantesArray = [];
async function readJSONFile(filePath) {
    try {
        // Fetch the JSON file
        const response = await fetch(filePath);
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON content
        const data = await response.json();
        
        // Log the data to the console (or use it as needed)
        console.log(data);
        
        // Return the data for further use
        return data;
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
}

// Call the function with the path to your JSON file
document.addEventListener('DOMContentLoaded', async () => {
    const reptantes = await readJSONFile('primera_edicion.json');
    // Aquí puedes usar los datos del JSON como necesites
    console.log('Datos cargados:', reptantes);
    reptantesArray = reptantes;
});
function cargar(){
    cargarReptantes(reptantesArray);
}
function filtros(){
    var textoFiltros= [];
    textoFiltros.nombre = document.getElementById("searchNombreReptante").value;
    textoFiltros.expansion = document.getElementById("searchExpansion").value;
    textoFiltros.poder0 = document.getElementById("searchPoder0").value;
    textoFiltros.poder1 = document.getElementById("searchPoder1").value;
    textoFiltros.poder2 = document.getElementById("searchPoder2").value;
    textoFiltros.poder3 = document.getElementById("searchPoder3").value;
    textoFiltros.poder4 = document.getElementById("searchPoder4").value;
    return textoFiltros;

}
function cargarReptantes(reptantes){
    var reptantesVistos= document.getElementById("respuestas");
    var filtrosCargados = filtros();
    reptantesVistos.innerHTML = "<br>";
    reptantesVistos.innerHTML += "<p>"+filtrosCargados.nombre+"</p>";

    reptantes.forEach(reptante => {
        if( reptante.nombre.includes(filtrosCargados.nombre) && reptante.poderes.nombre_0.includes(filtrosCargados.poder0) && reptante.poderes.nombre_1.includes(filtrosCargados.poder1) && reptante.poderes.nombre_2.includes(filtrosCargados.poder2) && reptante.poderes.nombre_3.includes(filtrosCargados.poder3) && reptante.poderes.nombre_4.includes(filtrosCargados.poder4)){
            reptantesVistos.innerHTML += "<table> <tr> <th> Nombre </th> <td> "+ reptante.nombre+" </td> </tr> <tr> <th> Edición </th> <td>"+ reptante.edición+" </td> </tr> <tr> <th> Número </th> <td>"+ reptante.número+" </td> </tr> <tr> <th> Rareza </th> <td>"+ reptante.rareza+" </td> </tr> <tr> <th> Especialidad </th> <td>"+ reptante.especialidad+" </td> </tr> <tr> <th> Artista </th> <td>"+ reptante.artista+" </td> </tr> <tr> <th> Poderes: </th> <td>  </td> </tr> <tr> <th> Poder costo 4 </th> <td>"+ reptante.poderes.nombre_4 +" ("+ reptante.poderes.tipo_4 +")"+" </td> </tr> <tr> <th> Tipo Esbirro </th> <td>"+ reptante.poderes.esbirro_4+" </td> </tr> <tr> <th> Poder costo 3 </th> <td>"+ reptante.poderes.nombre_3 +" ("+ reptante.poderes.tipo_3 +")"+" </td> </tr> <tr> <th> Tipo Esbirro </th> <td>"+ reptante.poderes.esbirro_3+" </td> </tr> <tr> <th> Poder costo 2 </th> <td>"+ reptante.poderes.nombre_2 +" ("+ reptante.poderes.tipo_2 +")"+" </td> </tr> <tr> <th> Tipo Esbirro </th> <td>"+ reptante.poderes.esbirro_2+" </td> </tr> <tr> <th> Poder costo 1 </th> <td>"+ reptante.poderes.nombre_1 +" ("+ reptante.poderes.tipo_1 +")"+" </td> </tr> <tr> <th> Tipo Esbirro </th> <td>"+ reptante.poderes.esbirro_1+" </td> </tr> <tr> <th> Poder costo 0 </th> <td>"+ reptante.poderes.nombre_0 +" ("+ reptante.poderes.tipo_0 +")"+" </td> </tr> <tr> <th> Tipo Esbirro </th> <td>"+ reptante.poderes.esbirro_0+" </td> </tr> </table> <br>";
    
        }
        });
}

