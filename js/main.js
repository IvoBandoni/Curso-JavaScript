
productos.push(new Producto(1, "Farenheit (Grey)", 65, "img/lente1.jpg"));
productos.push(new Producto(2, "Opium (Grey)", 120, "./img/lente2.jpg"));
productos.push(new Producto(3, "Kenneth Cole", 60, "./img/lente3.jpg"));
productos.push(new Producto(4, "Farenheit Oval", 75, "./img/lente4.jpg"));

console.log(productos);
productosUI(productos, '#productosContenedor');







const divDinamico = document.getElementById('divDinamico');

function contactoHTML(contactos) {
    for (const contacto of contactos) {
        //Crearlo
        let divContacto = document.createElement('div');
        //Asignar valor
        divContacto.innerHTML = `<h3>${contacto.nombre} - TEL ${contacto.telefono} - DIR ${contacto.direccion} </h3>`;
        //Asignar un Padre
        divDinamico.appendChild(divContacto);
    }
};



let registrarContacto = document.getElementById('registrarContacto');
registrarContacto.onsubmit= (event) => {
    event.preventDefault();
    let hijos = registrarContacto.children;
    contactos.push(new Contacto(hijos[0].value, hijos[1].value, hijos[2].value));
    console.log(contactos);
    divDinamico.innerHTML="";
    contactoHTML(contactos);
    localStorage.setItem('contactos',JSON.stringify(contactos) );
}

let ejemploContacto = JSON.parse(localStorage.getItem('contactos'));