import BookForm from "./envio-form"
import { useParams } from "react-router-dom"
import "../hojas-de-estilos/envio-edit.css"

const bookData = {
    id: 1,
    fecha: '01/01/2021',
    ciudad_entrega: 'Santa Marta',
    dir_entrega: 'calle 1 #2-3',
    estado: 'Guardado'
}

const envioEdit = () => {
    const { id } = useParams()

    return (
        <div className="contenedor-principal">
        <div className="contenedor">
            <h6>Gestión de paquetes - Actualizacion de órdenes (Recogida)</h6>
            <BookForm data={bookData} />
        </div>
        </div>
    )
}

export default envioEdit