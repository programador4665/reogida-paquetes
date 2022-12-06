import EnvioForm from "./envio-form"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import dateFormat from "dateformat"
import "../hojas-de-estilos/envio-edit.css"

// const envioData = {
//     id: 1,
//     fecha: '01/01/2021',
//     ciudad_entrega: 'Santa Marta',
//     dir_entrega: 'calle 1 #2-3',
//     estado: 'Guardado'
// }

const EnvioEdit = () => {
    const { id } = useParams()
    const [envio, setEnvio] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:4000/envios/" + id)
            .then(response => {
                console.log(response.data)
                const fecha = response.data.fecha
                response.data['fecha'] = dateFormat(fecha, "yyyy-mm-dd")
                setEnvio(response.data)
            })
    }, [])

console.log(envio)
    return (
        <>
            {envio ? (
                <div className="contenedor-principal">
                <div className="contenedor">
                    <h6>Gestión de paquetes - Actualizacion de órdenes (Recogida)</h6>
                    <EnvioForm data={envio} envioId={id} />
                </div>
                </div>        
            ):''}
        
        </>
            )
}

export default EnvioEdit