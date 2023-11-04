import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [propiedades, setPropiedades] = useState([]);
  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
    .then((res) => res.json())
    .then((datos) => setPropiedades(datos));
    }, []);

    const [ubicaciones, setUbicaciones] = useState([]);
    useEffect(() => {
      fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
        .then((res) => res.json())
        .then((datos) => setUbicaciones(datos));
    }, []);

    const [cotizador, setCotizador] = useState({})
    const costo = 35.86;
    
    const data = { propiedades, ubicaciones, cotizador, setCotizador, costo };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
};