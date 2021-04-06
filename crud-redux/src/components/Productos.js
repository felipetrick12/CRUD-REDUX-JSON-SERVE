import React from 'react'

export const Productos = () => {
    return (
        <>
           <h2 className="text-center my-5">Listado de Productos</h2>

           {/* { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
           
           { cargando ? <p className="text-center">Cargando....</p> : null } */}

           <table className="table table-striped">
               <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
               </thead>
               <tbody>
                   {/* { productos.length === 0 ? 'No hay productos' : (
                       productos.map(producto => (
                           <Producto
                                key={producto.id}
                                producto={producto}
                           />
                       ))
                   ) } */}
               </tbody>
           </table>
       </>
    )
}
