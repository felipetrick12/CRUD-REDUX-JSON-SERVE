import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { EditarProducto } from '../components/EditarProducto';
import { Header } from '../components/Header';
import { NuevoProducto } from '../components/NuevoProducto';
import { Productos } from '../components/Productos';


export const AppRouter = () => {
    return (
        
    <Router>
      
      <Header />

      <div className="container mt-5">
        <Switch>
          <Route  exact path="/" component={Productos} />  
          <Route  exact path="/productos/nuevo" component={NuevoProducto} />  
          <Route  exact path="/productos/editar/:id" component={EditarProducto} />  

        <Redirect to="/" />
        </Switch>
      </div>
    
     </Router>
    
    )
}
