import { useContext } from "react";
import { AppContext } from "./AppProvider";

function Metros() {
    const { cotizador, setCotizador } = useContext(AppContext)

    const handleChange = (event) => {
        const metrosValue = event.target.value;
        setCotizador({...cotizador, metrosValue});
    };


    return (
        <>
        <label htmlFor="metros">Ingrese los metros cuadrados:</label>
        <input type="number" id="metros" min="20" max="500" onChange={handleChange} required/>
        </>
    );
}

export default Metros;