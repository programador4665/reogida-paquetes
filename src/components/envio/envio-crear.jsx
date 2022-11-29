import BookForm from "./envio-form"
import "../hojas-de-estilos/envio-edit.css"

const enviocrear = () => {
    return (
        <div className="contenedor-principal">
        <div className="contenedor">
            <h6>Gestión de paquetes - Registro de órdenes (Recogida)</h6>
            <BookForm data={[]} />
            </div>
        </div>
    )
}

export default enviocrear