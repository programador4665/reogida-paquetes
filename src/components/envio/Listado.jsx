import { Link } from "react-router-dom"
import "../hojas-de-estilos/listado.css"

const listado= [
    {
        id:1,
        fecha: '01/01/2021',
        ciudad_entrega: 'Santa Marta',
        dir_entrega: 'call 1 #2-3',
        estado: 'Guardado' 
    },
    {
        id:2,
        fecha: '01/01/2021',
        ciudad_entrega: 'Barranquilla',
        dir_entrega: 'calle 4 #5-6',
        estado: 'Cancelado' 
    },
    {
        id:3,
        fecha: '01/01/2021',
        ciudad_entrega: 'Cartagena',
        dir_entrega: 'calle 7 #8-9',
        estado: 'Cumplido' 
    }
]

const labels = [
        '# Servicio',
        'Fecha',
        'Ciudad Entrega',
        'Dirección Entrega',
        'Estado'
]

const Listado = () => {
    return (
        <div className="contenedor-principal" >
            <div className="contenedor-medio">
            <div className="link-crear"><Link to='/Envio/crear'>Crear Orden</Link></div>
            <table className="table">
                <thead>
                    <tr>
                        {labels.map((label,index)=>  {
                            return(<th key={index} scope="col">{label}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>

                    {listado.map((lista,index) =>{
                        return (<tr key={index} >
                            <th scope="row">
                                <Link to={'/Actualizar/'+ lista.id}>{lista.id}</Link>
                            </th>
                            <td>{lista.fecha}</td>
                            <td>{lista.ciudad_entrega}</td>
                            <td>{lista.dir_entrega}</td>
                            <td>{lista.estado}</td>
                        </tr>)

                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Listado