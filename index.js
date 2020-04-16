let url = []
function get()

axios.get('http://localhost:3000/url').then(response => {
        let data = response.data
        let url = data.informacion
        tareasTemp=url
        let tbody = document.getElementById('url')
        tbody.innerHTML = ""
        for (let index = 0; index < links.length; index++) {
            let element = url[index];
            let row = ""
            row += "<tr>"
            row += "<td>" + element['id'] + "</td>"
            row += "<td>" + element['nombre'] + "</td>"
            row += "<td>" + element['descripcion'] + "</td>"
            row += "<td>" + element['url'] + "</td>"
            row += "<td><button onclick='modificar(" + element['id'] + ")'> Modificar </button> </td>"
            row += "<td><button onclick='eliminar(" + element['id'] + ")'> Eliminar </button> </td>"
            row += "</tr>"
            tbody.innerHTML += row
        }

    }).catch(error => {
        console.log(error);

    })

// Fila a modificar cuando se selecciona
let filaAModificar;

listarSimulador()


// Listar los links en una tablas")
function listarUrl() {
    //Cargar links del localstorage
    let str_url = localStorage.getItem("lista_url")
    // Parse a Array
    url = JSON.parse(str_url)

    if (url == null) {
        url = []
    }
     // Agregar filas a la tabla
     let tbody = document.getElementById('list_body')
     tbody.innerHTML = ""
     for (let index = 0; index < simulador.length; index++) {
         let element = url[index];
         let row = ""
         row += "<tr>"
         row += "<td>" + element['id'] + "</td>"
         row += "<td>" + element['nombre'] + "</td>"
         row += "<td>" + element['descripcion'] + "</td>"
         row += "<td>" + element['url'] + "</td>"
         row += "<td><button onclick='modificar(" + index + ")'> Modificar </button> </td>"
         row += "<td><button onclick='eliminar(" + index + ")'> Eliminar </button> </td>"
         row += "</tr>"
         tbody.innerHTML += row
     }
 }
 
 function obtenerDatos(id,nombre,descripcion) {
     // Obteniendo los valores de los campos
     let id = document.getElementById('id').value;
     let nombre = document.getElementById('nombre').value;
     let descripcion = document.getElementById('descripcion').value;
     let url = document.getElementById('url').value;
     let url = {
        id: " ",
        url: "",
        nombre: "",
        descripcion: ""
         
     }
     return url
 }
 function crearUrl() {
    let simulador = obtenerDatos()
    axios.post('http://localhost:3000/url', simulador).then((response) => {
        console.log(response);
        get()
    }).catch(error => {
        console.log(error);
    })
  
}

function cargarDatos(element) {
    document.getElementById('id').value = element.id;
    document.getElementById('nombre').value = element.nombre;
    document.getElementById('descripcion').value = element.descripcion;
    document.getElementById('url').value = element.url;
 
  
}

function modificar(id) {
    let links = limksTemp.find(x => x.id==id)
    if(links.length)
    cargarDatos(links)
    //Guardar el indice de forma global
    filaAModificar = index
    document.getElementById('index').value = index;
}


function eliminar(id) {
    axios.delete('http://localhost:3000/url/'+id).then((response) => {
        console.log(response);
        get()
    }).catch(error => {
        console.log(error);
    })
}

get()

    
