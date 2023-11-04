import './App.css';
import Propiedades from "./Propiedades";
import Ubicaciones from "./Ubicaciones";
import Metros from "./Metros";
import { useContext, useState } from 'react';
import { AppContext } from './AppProvider';
import { Link } from 'react-router-dom';

function Inicio() {
  const [resultado, setResultado] = useState(0.00);
  const { cotizador, costo } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (cotizador.propiedadValue && cotizador.ubicacionValue && cotizador.metrosValue) {
      let propiedadFactor = parseFloat(cotizador.propiedadValue.factor);
      let ubicacionFactor = parseFloat(cotizador.ubicacionValue.factor);
      let metros = parseInt(cotizador.metrosValue);
      let res = parseFloat(costo) * propiedadFactor * ubicacionFactor * metros;
      setResultado(res);

      const cotizacion = {
        fecha: new Date().toLocaleString(),
        propiedad: cotizador.propiedadValue.tipo,
        ubicacion: cotizador.ubicacionValue.tipo,
        metros2: metros,
        poliza: res.toFixed(2),
      }
      
      let historial = JSON.parse(localStorage.getItem("guardado")) || [];
      historial.push(cotizacion);
      localStorage.setItem("guardado", JSON.stringify(historial));
    }    
  }
  
  return (
    <div className='container centrar'>
      <h1>Seguros del hogar</h1>
      <h2>Complete el siguiente formulario</h2>
        <form onSubmit={handleSubmit} className="container">
            <Propiedades />
            <Ubicaciones />
            <Metros />
            <button type="submit">Cotizar</button>
            <button type='button' className='button-outline'><Link to={"/historial"}>Historial</Link></button>
        </form>
        <p className='destacado'>Precio estimado: ${resultado.toFixed(2)}</p>
    </div>
  );
}

export default Inicio;
