import { types } from "../types/types"
import Swe from "sweetalert2"
import { clienteAxios } from "../config/axios"


export const productoCreate = (producto) => {
    return async (dispatch) => { 
        
        try {
            const result = await clienteAxios.post('/productos', producto);
            console.log(result)
            dispatch(agregarProduct(producto))
            Swe.fire('Correcto','El producto se agrego correctamente','success')
            
        } catch (error) {
            console.log(error)
            Swe.fire('Error','El producto no se agrego','error')
            
        }
    }

}

const agregarProduct = (producto) => ({
    type: types.AddProduct,
    payload : producto
})


export const productoGET = () => {
    return async (dispatch) => { 

        try {
            const result = await clienteAxios.get('/productos');
            dispatch(getProduct(result.data))
            
        } catch (error) {
            Swe.fire('Correcto',error.response,'success')
            
        }
    }
}

const getProduct = (productos) => ({
    type: types.GetProduct,
    payload: productos
})


export const productoDelete = (id) => {
    return async (dispatch) => { 
        try {
            const result = await clienteAxios.delete(`/productos/${id}`);
            console.log(result)
            dispatch(DeleteProduct(id))
            Swe.fire('Correcto','El producto Se elimino correctamente','success')
            
        } catch (error) {
            Swe.fire('Correcto',error.response,'success')
            
        }
    }
}

const DeleteProduct = (id) => ({
    type: types.DeleteProduct,
    payload: id
})

export const selectProduct = (producto) => {
    return async (dispatch) => { 
        dispatch(ProductSelect(producto))
        
    }
}

const ProductSelect = (producto) => ({
    type: types.selectProduct,
    payload: producto
})

export const productoUpdate = (producto) => {
    return async (dispatch) => { 
        try {
            const result = await clienteAxios.put(`/productos/${producto.id}`,producto);
            console.log(result)
            dispatch(updateProduct(producto))
            Swe.fire('Correcto','El producto se actualizo correctamente','success')
            
        } catch (error) {
            Swe.fire('Correcto',error.response,'success')
            
        }
    }
}

const updateProduct = (producto) => ({
    type: types.updateProduct,
    payload: producto
})