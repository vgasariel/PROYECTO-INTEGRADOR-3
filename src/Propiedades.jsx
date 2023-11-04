import { useContext } from "react";
import { AppContext } from "./AppProvider";

function Propiedades() {
    const { propiedades, cotizador, setCotizador } = useContext(AppContext);

    const handleChange = (event) => {
        const propiedadValue = propiedades.find ((propiedad) => propiedad.id == event.target.value);
        setCotizador({...cotizador, propiedadValue});
    };

    return (
        <>
        <label htmlFor="propiedadSelect">Seleccione una propiedad</label>
        <select id="propiedadSelect" onChange={handleChange} required>
            <option value="" defaultValue={""}></option>
            {propiedades.map((propiedad) => (
                <option key={propiedad.id} value={propiedad.id}>{propiedad.tipo}</option>
            ))};
        </select>
        </>
    );
}

export default Propiedades;