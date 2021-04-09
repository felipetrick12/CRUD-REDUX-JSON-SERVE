import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector  } from 'react-redux'
import { productoUpdate } from '../actions/productoAction';

export const EditarProducto = ({history}) => {

    
    const products = useSelector( state => state.productos.products)
    
    const dispatch = useDispatch();
    
    //RELLENAR Campos
    useEffect(() => {
        
        setState(products[0])
    }, [products])
    
    // Crear state del fomrulario
    const [producto, setState] = useState( {
        nombre: '',
        precio: ''
    })
    
    //crear validacion del formulario
   const [error, setError] = useState(false)

   //desestructurar arreglo
   const {nombre,precio} = producto;
   
   
    //hacer el cambio de valor en los campos
    const guardarState = (e) => {
        setState({
            ...producto,
            [e.target.name] : e.target.value
        })
    }
    
   

    

    const submitNuevoProducto =  (e) => {
        e.preventDefault();

        if( nombre.trim() === '' || precio <=0 ){
            return setError(true);
        }else{
            setError(false);
           dispatch(productoUpdate(producto))
            
            history.push('/');
           
        }
    }

    return (
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Producto
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
                        >Guardar Cambios</button>
                    </form>

                    { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null } 
               
                </div>
            </div>
        </div>
    </div>
    )
}
