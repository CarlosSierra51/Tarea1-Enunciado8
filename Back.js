class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Contacto extends Persona {
    constructor(nombre, apellido, telef, email){
        super(nombre, apellido);
        this.telef = telef;
        this.email = email;
    }
}

let listaContactos = [];

function menu() {
    let opcion = prompt("1. Añadir Contacto.\n2. Buscar Contacto.\n3. Mostrar Contactos.\n4. Salir");
    switch(opcion) {
        case "1":
            añadirContacto();
            break;
        case "2":
            buscarContacto();
            break;
        case "3":
            mostrarContactos();
            break;
        case "4":
            return;
        default:
            alert("Opción incorrecta.");
    }
    menu();
}

function añadirContacto() {
    let nombre = prompt("Ingrese el nombre: ");
    let apellido = prompt("Ingrese el apellido: ");
    let telef = prompt("Ingrese el teléfono: ");
    let email = prompt("Ingrese el email: ");

    if (!/^[a-zA-Z]+$/.test(nombre)){ // Valida el nombre
        console.log("Error, el nombre solo debe contener letras.");
        return;
    }
    if (!/^[a-zA-Z]+$/.test(apellido)){ // Valida el apellido
        console.log("Error, el apellido solo debe contener letras.");
        return;
    }

    if (!/^\d+$/.test(telef)){ // valida el telefono
        console.log("Error, el teléfono solo debe contener números.");
        return;
    }

    for(let contacto of listaContactos){ // valida que no esten repetidos Numero de telefono y email
        if(contacto.telef === telef){
            console.log("El número de teléfono ya existe.");
            return;
        }
        if(contacto.email === email){
            console.log("El email ya existe.");
            return;
        }
    }

    let contacto = new Contacto(nombre, apellido, telef, email);
    listaContactos.push(contacto);
}

function buscarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto: ");
    let enc = false;
    for(contacto of listaContactos){
        if(contacto.nombre === nombre){
            console.log(`Nombre: ${contacto.nombre}\nApellido: ${contacto.apellido}\nTeléfono: ${contacto.telef}\nEmail: ${contacto.email}`);
            enc = true;
        }
    }
    if(enc === false){
        console.log("No existe el contacto.");
    }
}

function mostrarContactos() {
    for(let contacto of listaContactos){
        console.log(`Nombre: ${contacto.nombre}\nApellido: ${contacto.apellido}\nTeléfono: ${contacto.telef}\nEmail: ${contacto.email}`);    
    }
}
menu();