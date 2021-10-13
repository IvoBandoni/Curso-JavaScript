function productosUI(productos,id){
  for(const producto of productos){
      $("#productosContenedor").append(`<div class="card" style="width: 18rem;">
                                          <img src="${producto.img}", class="card-img-top" alt="...">
                                      <div class="card-body">
                                           <h5 class="card-title">${producto.nombre}</h5>
                                           <p class="card-text">${producto.precio}</p>
                                           <a href="#" id="${producto.id}" class="btn btn-primary btn-compra">Comprar</a>
                                       </div>
                                       </div>`)
  }
}
  
//MANEJADOR DE COMPRA DE PRODUCTOS
function comprarProducto(event){
  //PREVENIR REFRESCO AL PRESIONAR ENLACES
  event.preventDefault();
  //OBTENER ID DEL BOTON PRESIONADO
  const idProducto   = event.target.id;
  //OBTENER OBJETO DEL PRODUCTO CORRESPONDIENTE AL ID
  const existe=carrito.find(producto => producto.id ==idProducto);
  
  if (existe == undefined) {
    const seleccionado = productos.find(producto => producto.id == idProducto);
    carrito.push(seleccionado);    
  }else{
    existe.agregarCantidad(1);
  }
 
  //GENERAR SALIDA PRODUCTO
  carritoUI(carrito);
}


//FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO
function carritoUI(productos){
  //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD DE PRODUCTOS;
  $('#carritoCantidad').html(productos.length);
  //VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
  $('#carritoProductos').empty();
  for (const producto of productos) {
    $('#carritoProductos').append(`<p> ${producto.nombre} 
                                    <span class="badge badge-warning">
                                    $ ${producto.precio}</span>
                                    <span class="badge badge-warning">
                                    Cantidad: ${producto.cantidad}</span>
                                    <span class="badge badge-warning">
                                    Subtotal: ${producto.subtotal()}</span>                                
                                    <a href="#"  class="cta" id="cta">COMPRAR</a> 
                                    
                                    </p>`);
  }
}
