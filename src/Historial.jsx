import { Link } from 'react-router-dom';

function Historial () {
    let historialGuardado = JSON.parse(localStorage.getItem("guardado"));

    return (
        <div className='containter centrar'>
        <h2>Historial</h2>
        <table className='container'>
            <thead>
                <tr>
                    <th>Fecha y hora</th>
                    <th>Propiedad</th>
                    <th>Ubicación</th>
                    <th>Metros cuadrados</th>
                    <th>Póliza mensual</th>
                </tr>
            </thead>
            <tbody>
                {historialGuardado?.map((historia, index) => (
                    <tr key={index}>
                        <td>{historia.fecha}</td>
                        <td>{historia.propiedad}</td>
                        <td>{historia.ubicacion}</td>
                        <td>{historia.metros2}</td>
                        <td>{historia.poliza}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <button type='button' className='button-outline'><Link to={"/"}>Volver</Link></button>
        </div>
    )
}

export default Historial;