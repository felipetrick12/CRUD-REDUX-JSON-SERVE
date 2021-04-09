import React, { useState } from 'react'
import { useDispatch  } from 'react-redux'

import {productoCreate} from '../actions/productoAction'

export const NuevoProducto = ({history}) => {

     //utilizar dispatchde redux
    const dispatch = useDispatch();

   //crear validacion del formulario
   const [error, setError] = useState(false)
   
    // Crear state del fomrulario
    const [producto, setState] = useState( {
        nombre: '',
        precio: ''
    })

    //desestructurar arreglo
    const {nombre,precio} = producto;

    //hacer el cambio de valor en los campos
    const guardarState = (e) => {
        setState({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    //enviar producto
    const submitNuevoProducto = (e) => {
        e.preventDefault();

        
        if( nombre.trim() === '' || precio <=0 ){
            return setError(true);
        }else{
            setError(false);
            dispatch(productoCreate(producto))
            setInterval(() => {
                history.push('/');
            }, 1000);
        }
    
        
    }
    

    return (
       <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        {/* {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null } */}

                        <form
                             onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={guardarState}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={guardarState}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>

                         {/* { cargando ? <p>Cargando...</p> : null } */}
                        
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null } 
                    </div>
                </div>
            </div>
        </div>
    )
}
