import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch  } from 'react-redux'
import { productoDelete, selectProduct } from '../actions/productoAction';


export const Producto = ({producto}) => {

    const { id ,nombre, precio } = producto;

    const dispatch = useDispatch();
    const history = useHistory();
   
    const confirmarEliminarProducto = ()=> {
        dispatch(productoDelete(id))
    }

    const redireccionarEdicion = () => {
        dispatch(selectProduct(producto))
        history.push(`/productos/editar/${id}`)
    }


    return (
        <tr className= "text-white">
            <td >{nombre}</td>
            <td><span className="font-weight-bold"> $ {precio} </span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ redireccionarEdicion }
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={confirmarEliminarProducto}
                >Eliminar </button>
            </td>
        </tr>
    )
}
