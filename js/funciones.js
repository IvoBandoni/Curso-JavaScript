$.getJSON('stock.json', function(respuesta, estado){
  if (estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos){
      $("#productosContenedor").prepend(`<div class="card" style="width: 18rem;">
                                         <img src="${dato.image}", class="card-img-top" alt="...">
                                         <div class="card-body">
                                         <h5 class="card-title">${dato.nombre}</h5>
                                         <p class="card-text">${dato.precio}</p>
                                         <a href="#" id="${dato.id}" class="btn btn-primary btn-compra">Comprar</a>
                                         </div>
                                         </div>`
                                         )
    }
  }
});




document.querySelector('#botonCarrito').addEventListener('click',comprarProducto);



 
function comprarProducto(){
    const xhttp = new XMLHttpRequest();
    //Traer el JSON
    xhttp.open('GET', 'stock.json',true)

    xhttp.send();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

      //console.log(this.responseText);
      //Pasar los datos a array
      let datos = JSON.parse(this.responseText);

      let carritoProductos = document.querySelector('#carritoProductos');
      carritoProductos.innerHTML += '';
      
      for(let info of datos){
        $('#carritoProductos').append(`
                               <p> ${info.nombre} 
                                    <span class="badge badge-warning">
                                    $ ${info.precio}</span>
                                    <span class="badge badge-warning">
                                    Cantidad: ${info.cantidad}</span>
                                    <span class="badge badge-warning">
                                    Subtotal: ${info.subtotal}</span>                                
                                    <a href="#"  class="cta" >COMPRAR</a> 
                                    
                                    </p>
                                           `)
      }
    }
  }

}


/*
//FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO
function carritoUI(carrito){
  //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD DE PRODUCTOS;
  $('#carritoCantidad').html(carrito.length);
  //VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
  $('#carritoProductos').empty();
  for (const dato of misDatos) {
    $('#carritoProductos').append(`<p> ${dato.nombre} 
                                    <span class="badge badge-warning">
                                    $ ${dato.precio}</span>
                                    <span class="badge badge-warning">
                                    Cantidad: ${dato.cantidad}</span>
                                    <span class="badge badge-warning">
                                    Subtotal: ${dato.subtotal()}</span>                                
                                    <a href="#"  class="cta" id="cta">COMPRAR</a> 
                                    
                                    </p>`);
  }
}
*/