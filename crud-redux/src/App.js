import React from 'react'
import { AppRouter } from './router/AppRouter';
//redux
import { store } from './store/store';
import { Provider } from 'react-redux'

export const App = () => {
  return (
    
    <Provider store={store}>
    <AppRouter/>
    </Provider>
       
  )
}
