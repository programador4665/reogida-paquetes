import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"
import axios from "axios"
import "../hojas-de-estilos/envio-form.css"


const EnvioForm = ({ data, envioId }) => {
    const [isEdit, setIsEdit] = useState(false)

    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    const customSubmit = (dataForm) => {
        const envioObject = {
            fecha: dataForm.fecha,
            estado: dataForm.estado,
            ciudad_entrega: dataForm.ciudad_entrega,
            dir_entrega: dataForm.dir_entrega,
            ciudad_recogida: dataForm.ciudad_recogida,
            dir_recogida: dataForm.dir_recogida,
            nombre: dataForm.nombre,
            cedula: dataForm.cedula,
            userId: "1234",
        }

        if (isEdit) {
            axios
                .put("http://localhost:4000/envios/edit/" + envioId, envioObject)
                .then(response => console.log(response.data))
        } else {
            axios
                .post("http://localhost:4000/envios/create", envioObject)
                .then(response => console.log(response.data))
        }
        console.log('dataForm', dataForm)
    }

    useEffect(() => {
        console.log(data)
        if (data.length !== 0) {
            setIsEdit(true)
            setValue('fecha', data.fecha)
            setValue('ciudad_entrega', data.ciudad_entrega)
            setValue('dir_entrega', data.dir_entrega)
            setValue('ciudad_recogida', data.ciudad_recogida)
            setValue('dir_recogida', data.dir_recogida)
            setValue('nombre', data.nombre)
            setValue('cedula', data.cedula)
            setValue('estado', data.estado)
        }
    }, [])


    return (
        <>
            <form className="form" onSubmit={handleSubmit(customSubmit)}>
            <div className="fila">
                <div className="form__item">
                    <label>Fecha</label>
                    <input
                        type="date"
                        size={"10"}
                        {...register("fecha", { required: true })}
                        aria-invalid={errors.fecha ? "true" : "false"}
                    />
                    {errors.fecha && <p>Field required</p>}
                    
                    
                    {/* <label>Hora</label>
                    <input
                        type="time"
                        {...register("hora", { required: true })}
                        aria-invalid={errors.hora ? "true" : "false"}
                    /> */}
                </div>
                </div>
               
                <div className="fila">
                    <div className="form__item">
                        <label>Dirección Recogida</label>
                        <input
                            {...register("dir_recogida", { required: true })}
                            aria-invalid={errors.dir_recogida ? "true" : "false"}
                        />
                        {errors.dir_recogida && <p>Field required</p>}
                    </div>    
                </div>  

                <div className="fila">
                    <div className="form__item">
                        <label>Ciudad Recogida</label>
                        <input
                            {...register("ciudad_recogida", { required: true })}
                            aria-invalid={errors.ciudad_recogida ? "true" : "false"}
                        />
                        {errors.ciudad_recogida && <p>Field required</p>}
                    </div>    
                </div>  

                <div className="fila">
                    <div className="form__item">
                        <label>Nombre destinatario</label>
                        <input
                            {...register("nombre", { required: true })}
                            aria-invalid={errors.nombre ? "true" : "false"}
                        />
                        {errors.nombre && <p>Field required</p>}
                    </div>    
                </div>  

                <div className="fila">
                    <div className="form__item">
                        <label>Cedula/Nit destinatario</label>
                        <input
                            type="number"
                            {...register("cedula", { required: true })}
                            aria-invalid={errors.cedula ? "true" : "false"}
                        />
                        {errors.cedula && <p>Field required</p>}
                    </div>    
                </div>  

                <div className="fila">
                    <div className="form__item">
                        <label>Direccion Entrega</label>
                        <input
                            {...register("dir_entrega", { required: true})}
                            aria-invalid={errors.dir_entrega ? "true" : "false"}
                        />
                        {errors.dir_entrega }
                    </div>    
                </div>  

                <div className="fila">
                    <div className="form__item">
                        <label>Ciudad Entrega</label>
                        <input
                            {...register("ciudad_entrega", { required: true })}
                            aria-invalid={errors.ciudad_entrega ? "true" : "false"}
                        />
                        {errors.ciudad_entrega && <p>Field required</p>}
                    </div>
                </div>

                <div className="fila">
                    <div className="form__item">
                        <label>Estado</label>
                        <input
                            {...register("estado", { required: true })}
                            aria-invalid={errors.estado ? "true" : "false"}
                        />
                        {errors.estado && <p>Field required</p>}
                    </div>
                </div>

                <div className="boton"><input type="submit" value={isEdit ? "Actualizar órden" : "Crear órden"} /></div>
           
            </form>
        </>
    )
}

export default EnvioForm