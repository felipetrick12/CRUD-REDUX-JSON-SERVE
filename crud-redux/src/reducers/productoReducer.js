import { types } from "../types/types"


const initialState = {
    products : [],
    loading: false,
    
}

export const productoReducer = ( state = initialState, action )=> {

    switch( action.type ) {
        case types.AddProduct :
            return {
                ...state,
                loading:true,
                products:[...state.products , action.payload],
            }
            case types.GetProduct :
                return {
                    ...state,
                    products: action.payload
                }
            case types.DeleteProduct :
                    return {
                        ...state,
                        products: state.products.filter(product => product.id !== action.payload)
                    }
            case types.selectProduct :
                    return {
                            ...state,
                            products: [action.payload]
                    }
            case types.updateProduct : 
            console.log(action.payload.id)
                    return {
                        ...state,
                        products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product)

                    }
        default: 

        return state
    }
}