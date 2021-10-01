function productosUI(productos,id){
  for(const producto of productos){
      $("#productosContenedor").append(`<div class="card" style="width: 18rem;">
                                          <img src="${producto.img}", class="card-img-top" alt="...">
                                      <div class="card-body">
                                           <h5 class="card-title">${producto.nombre}</h5>
                                           <p class="card-text">${producto.precio}</p>
                                           <a href="#" id="${producto.id}" class="btn btn-primary">Comprar</a>
                                       </div>
                                       </div>`)
  }
}
    