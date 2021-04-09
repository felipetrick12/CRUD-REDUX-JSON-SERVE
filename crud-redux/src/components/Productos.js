import React, { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { productoGET } from '../actions/productoAction'
import { Producto } from './Producto';

export const Productos = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(productoGET());
    }, [dispatch])
    
    const {products} = useSelector( state => state.productos)

   
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
                   { products.length === 0 ? 'No hay productos' : (
                       products.map(producto => (
                        
                           <Producto
                                key={producto.id}
                                producto={producto}
                           />
                       ))
                   ) }
               </tbody>
           </table>
       </>
    )
}
