//VARIABLES
const divResultado = document.querySelector('#resultado'),
    marcaSelect = document.querySelector('#marca'),
    yearSelect = document.querySelector('#year'),
    minimoSelect = document.querySelector('#minimo'),
    maxSelect = document.querySelector('#maximo'),
    puertasSelect = document.querySelector('#puertas'),
    transmisionSelect = document.querySelector('#transmision'),
    colorSelect = document.querySelector('#color');




//GENERAR OBJETO CON BASE A LA BUSQUEDA
const datosBusqueda = {
    marca: '',
    año: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


//MOSTRAR AUTO
const mostrarAutos = (arrautos) => {
    arrautos.forEach(auto => {
        let { marca, modelo, year, puertas, color, transmision, precio } = auto;
        const pAuto = document.createElement('p');
        pAuto.innerText = ` 
        ${marca} - ${modelo} - ${year} - ${color} - ${puertas} Puertas - ${transmision} Precio $${precio}
        `

        divResultado.appendChild(pAuto)
    });
}


//LLENAR EL SELECT DE AÑO DE FORMA DINAMICA
llenarSelect = () => {
    let years = autos.map(anio => anio.year).filter((anio, index, arr) => arr.indexOf(anio) === index);
    years = years.sort().reverse(); //ORDENA ASCENDENTEMENTE LOS NUMEROS

    years.forEach(anio => {
        const option = document.createElement('option')
        option.setAttribute("value", `${anio}`);
        option.innerText = `${anio}`
        yearSelect.appendChild(option)
    })
};




//EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)
    llenarSelect();
});

//EVENTOS QUE CREAN NUESTRO OBJETO DE BUSQUEDA
marcaSelect.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value
    console.log(datosBusqueda);
    filtrarAuto()
});

yearSelect.addEventListener('change', e => {
    datosBusqueda.año = e.target.value
    filtrarAuto()
});

minimoSelect.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
});
maxSelect.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
});
puertasSelect.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value
    filtrarAuto()
});
transmisionSelect.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
});
colorSelect.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    filtrarAuto()
});


//BORRAR HTML DE AUTOS POR CADA BUSQUEDA
const borrarHtml = () => {
    while (divResultado.firstChild) {
        divResultado.removeChild(divResultado.firstChild)
    }
}

//SI NO ENCUENTRA UN RESULTADO DIBUJA UN DIV CON LA LEYENDA SIN RESULTADO
const noResultado = () => {

    const sinBusqueda = document.createElement('div');
    sinBusqueda.textContent = 'SIN RESULTADOS';
    sinBusqueda.classList.add('alerta', 'error');
    divResultado.appendChild(sinBusqueda)
}

//FUNCION QUE FILTRA EN BASE A LA BUSQUEDA
function filtrarAuto() {
    borrarHtml();
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //SI ENCUENTRA ALGO CON ESAS ESPECIFICACIONES SE MUESTRO, SI NO SE MUESTRA NO RESULTADO
    (resultado.length) ? mostrarAutos(resultado): noResultado();

}


//FILTRAR POR MARCA 
function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    } else {
        return auto
    }
}


//FILTRAR POR YEAR
function filtrarYear(auto) {

    if (datosBusqueda.año) {
        //CONVERTILO A ENTERO ES MEJOR QUE COMPARA DE FORMA NO ESTRICTA
        return auto.year === parseInt(datosBusqueda.año)
    } else {
        return auto
    }
}

//FILTRAR POR PRECIO MINIMO
function filtrarMin(auto) {

    if (datosBusqueda.minimo) {
        //CONVERTILO A ENTERO ES MEJOR QUE COMPARA DE FORMA NO ESTRICTA
        return auto.precio >= datosBusqueda.minimo
    } else {
        return auto
    }
}


//FILTRAR POR PRECIO MAXIMO
function filtrarMax(auto) {

    if (datosBusqueda.maximo) {
        //CONVERTILO A ENTERO ES MEJOR QUE COMPARA DE FORMA NO ESTRICTA
        return auto.precio <= datosBusqueda.maximo
    } else {
        return auto
    }
}

//FILTRAR POR PUERTA
function filtrarPuertas(auto) {

    if (datosBusqueda.puertas) {
        //CONVERTILO A ENTERO ES MEJOR QUE COMPARA DE FORMA NO ESTRICTA
        return auto.puertas == datosBusqueda.puertas
    } else {
        return auto
    }
}

//FILTRAR POR PUERTA
function filtrarTransmision(auto) {

    if (datosBusqueda.transmision) {
        //CONVERTILO A ENTERO ES MEJOR QUE COMPARA DE FORMA NO ESTRICTA
        return auto.transmision == datosBusqueda.transmision
    } else {
        return auto
    }
}


//FILTRAR POR COLOR
function filtrarColor(auto) {
    if (datosBusqueda.color) {
        //CONVERTILO A ENTERO ES MEJOR QUE COMPARA DE FORMA NO ESTRICTA
        return auto.color == datosBusqueda.color
    } else {
        return auto
    }
}