import { useContext } from "react";
import { AppContext } from "./AppProvider";

function Ubicaciones() {
    const { ubicaciones, cotizador, setCotizador } = useContext(AppContext);

    const handleChange = (event) => {
        const ubicacionValue = ubicaciones.find ((ubicacion) => ubicacion.id == event.target.value);
        setCotizador({...cotizador, ubicacionValue});
    };


    return (
        <>
        <label htmlFor="ubicacionSelect">Seleccione una ubicación</label>
        <select id="ubicacionSelect" onChange={handleChange} required>
            <option defaultValue={""}></option>
            {ubicaciones.map((ubicacion) => (
                <option key={ubicacion.id} value={ubicacion.id}>{ubicacion.tipo}</option>
            ))};
        </select>
        </>
   );
}

export default Ubicaciones;