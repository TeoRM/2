class Usuario {
    constructor(nombre, apellido, cedula, carro, valorCarro) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.carro = carro;
        this.valorCarro = valorCarro;
    }
}

const usuarioStefania = new Usuario('Stefania', 'Lopez', 12346687, 'FORD', 50000000);
const usuarioAdriana = new Usuario('Adriana', 'Morales', 14789635, 'CHEVROLET', 45000000);
const usuarioAdolfo = new Usuario('Adolfo', 'Jimenez', 7854161564, 'MAZDA', 60000000);
const usuarioMaria = new Usuario('Maria', 'Morales', 648654754, 'NISSAN', 49000000);
const usuarioValeria = new Usuario('Valeria', 'Osorio', 648783564, 'BMW', 150000000);

const arrayUsuarios = [usuarioAdolfo, usuarioAdriana, usuarioMaria, usuarioStefania, usuarioValeria];

function menu() {
    alert("Bienvenido a Teo's servicios");
    let opcion = parseInt(prompt("Ingrese una opción: \n1) Convertidor. \n2) Promediador. \n3) Credito. \n4) Seguro de carro. \n5) Salir."));
    return opcion;
}

function convertidor() {

    alert(`Hola ${usuarioIngresado} en este momento nuestra función es convertir de grados celsius a grados fahrenheit`);

    let gradosCelsius = parseInt(prompt('Ingrese grados celsius:'));

    for (let i = 0; i < 100; i++) {
        if (gradosCelsius > 0) {
            alert(usuarioIngresado + ' la conversion de ' + gradosCelsius + '°C son ' + (gradosCelsius * 9 / 5 + 32) + '°F');
            gradosCelsius = parseInt(prompt('Ingrese grados celsius:  (para salir ingrese: 0)'));
        } else if (gradosCelsius === 0) {
            alert('Chao ;D')
            break;
        } else {
            alert('No entendimos tu dato. Cerramos tu sesion. ')
            break;
        }
    }
}

function promediador() {
    alert(`${usuarioIngresado} Ahora podras sacar el promedio de tu nota final. \n(Podrás promediar hasta 5 notas). \nEsperamos te sirva mucho.`)

    let primeraNota = parseInt(prompt('Ingrese su primera nota'))
    let segundaNota = parseInt(prompt('Ingrese su segunda nota'))
    let terceraNota = parseInt(prompt('Ingrese su tarcera nota'))
    let cuartaNota = parseInt(prompt('Ingrese su cuarta nota'))
    let quintaNota = parseInt(prompt('Ingrese su quinta nota'))


    alert(`${usuarioIngresado} su promedio final es: ${(primeraNota + segundaNota + terceraNota + cuartaNota + quintaNota) / 5}`);
}

function credito() {
    alert(`${usuarioIngresado} Aca podras ver si eres apto para sacar un credito con nosotros, debes de ser mayor de 20 años`)
    let usuarioCredito = {
        nombre: prompt('Ingrese su Nombre:'),
        apellido: prompt('Ingrese su Apellido:'),
        edad: parseInt(prompt('Ingrese su edad:')),
        ingresosMensuales: parseInt(prompt('Ingrese sus ingresos mensuales:')),
        valorPedido: parseInt(prompt('Ingrese sus el valor a prestar:')),
        cuotas: parseInt(prompt('a cuantas cuotas? 6, 12, 24, hasta 60:')),
    }
    if (usuarioCredito.ingresosMensuales / 5 >= usuarioCredito.valorPedido / usuarioCredito.cuotas && edad > 18) {
        alert(`${usuarioIngresado} tu credito a sido aprovado.`)
    } else {
        alert(`${usuarioIngresado} tu credito a sido denegado.`)
    }

}

function seguro() {
    alert(`${usuarioIngresado} Aca podras ver si eres apto para sacar un seguro de carro con nosotros, por el momento solo tenemos estas opciones de marcas de carros: FORD, CHEVROLET, MAZDA, NISSAN Y BMW`)
    let nombre = prompt("Ingrese el nombre del Usuario: ");
    let apellido = prompt("Ingrese el apellido del Usuario: ");
    let cedula = parseInt(prompt("Ingrese la cedula del usuario:"));
    let carro = prompt("Marca del carro: ");
    let valorCarro = parseInt(prompt("Ingrese el valor del carro: "));
    let usuario = new Usuario(nombre, apellido, cedula, carro, valorCarro);
    alert(`${usuarioIngresado} su carro marca ${usuario.carro} por valor de ${usuario.valorCarro} fue asegurado correctamente.`)
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
}

function salir() {
    alert("Fue un gusto ayudarte :D");
}

let usuarioIngresado = prompt('Ingrese su Usuario por favor: ');

if (usuarioIngresado != '') {

    alert('El usuario ingresado es ' + usuarioIngresado)

    let passwordIngresado = prompt('Ingrese una contraseña por favor: ');

    alert(`${usuarioIngresado} puedes continuar`);

    let opcion = menu();

    switch (opcion) {
        case 1:
            convertidor()
            break;
        case 2:
            promediador()
            break;
        case 3:
            credito()
            break;
        case 4:
            seguro()
            break;
        case 5:
            salir()
            break;
        default:
            alert("Opción incorrecta vuelve a empezar");
            break;
    }




} else {
    alert('Debes ingresar un usuario porfavor')
}

