import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import "../hojas-de-estilos/listado.css"

// const envios= [
//     {
//         id:1,
//         fecha: '01/01/2021',
//         ciudad_entrega: 'Santa Marta',
//         dir_entrega: 'call 1 #2-3',
//         estado: 'Guardado' 
//     },
//     {
//         id:2,
//         fecha: '01/01/2021',
//         ciudad_entrega: 'Barranquilla',
//         dir_entrega: 'calle 4 #5-6',
//         estado: 'Cancelado' 
//     },
//     {
//         id:3,
//         fecha: '01/01/2021',
//         ciudad_entrega: 'Cartagena',
//         dir_entrega: 'calle 7 #8-9',
//         estado: 'Cumplido' 
//     }
// ]

const labels = [
        '# Servicio',
        'Fecha',
        'Ciudad Entrega',
        'Dirección Entrega',
        'Estado',
        "Acción"
]

const EnviosHome = () => {
    const [envios, setEnvios] = useState(null)
    const [update, setUpdate] = useState(false)
    
    useEffect(() => {
        const userId = "1234"
        axios
            .get("http://localhost:4000/envios?userId=" + userId)
            .then((response) => {
                console.log(response.data)
                setEnvios(response.data)
            })

    }, [update])

    const deleteClick = (envioId) => {
        axios
            .delete("http://localhost:4000/envios/delete/" + envioId)
            .then(response => {
                console.log(response.data)
                setUpdate(!update)
            })
    }

    return (
        <div className="contenedor-principal" >
            <div className="contenedor-medio">
            <div className="link-crear"><Link to='/envios/crear'>Crear Orden</Link></div>
            <table className="table">
                <thead>
                    <tr>
                        {labels.map((label,index)=>  {
                            return(<th key={index} scope="col">{label}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>

                    {envios != null ? envios.map((envio, index) =>{
                        return (
                            <tr key={index} >
                                <th scope="row">
                                    <Link to={'/envios/'+ envio._id + '/edit'}>{index}</Link>
                                </th>
                                <td>{envio.fecha}</td>
                                <td>{envio.ciudad_entrega}</td>
                                <td>{envio.dir_entrega}</td>
                                <td>{envio.estado}</td>
                                <td className="d-flex gap-1 justify-content-center">
                                        <a className="btn btn-danger" onClick={() => deleteClick(envio._id)}>Delete</a>
                                    </td>
                            </tr>)
                    }):''}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default EnviosHome