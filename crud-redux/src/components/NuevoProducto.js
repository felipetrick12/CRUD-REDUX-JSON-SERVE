import React from 'react'

export const NuevoProducto = () => {
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
                            // onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    // value={nombre}
                                    // onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    // value={precio}
                                    // onChange={e =>  guardarPrecio( Number(e.target.value) )}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>

                        {/* { cargando ? <p>Cargando...</p> : null }
                        
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null } */}
                    </div>
                </div>
            </div>
        </div>
    )
}
