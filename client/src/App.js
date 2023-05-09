// Conexion con css
import './App.css';
// Conexion con los componentes
import {Home, Landing, Detail, Form} from './views';
import NavBar from './components/NavBar/NavBar';
// Dependencias
import {Route, useLocation} from "react-router-dom";


function App() {
  //Es un hook que nos permite ver el pathname, de la ruta en la q estamos
  const location = useLocation();

  return (
    <div className="App">

      { location.pathname !== "/" && <NavBar />}
      
      <Route exact path="/" render={ () => <Landing /> } /> 
      <Route path="/home" render={ () => <Home /> } />
      <Route path="/countries/:id"  render={ () => <Detail /> } />
      <Route path="/create" render={ () => <Form /> } />
      
    </div>
  );
}

export default App;
