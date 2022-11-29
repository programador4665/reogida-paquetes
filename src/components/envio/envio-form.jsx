import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"
import "../hojas-de-estilos/envio-form.css"


const EnvioForm = ({ data }) => {
    const [isEdit, setIsEdit] = useState(false)

   
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    const customSubmit = (dataForm) => {
        if (isEdit) {
            console.log('Here goes the edit logic')
        } else {
            console.log('Here goes create logic')
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
            setValue('estado', data.estado)
        }
    })

    
    return (
        <>
            <form className="form" onSubmit={handleSubmit(customSubmit)}>
            <div className="fila">
                <div className="form__item">
                    <label>Fecha</label>
                    <input
                        type="text"
                        size={"10"}
                        {...register("fecha", { required: true })}
                        aria-invalid={errors.fecha ? "true" : "false"}
                    />
                    {errors.fecha && <p>Field required</p>}
                     <input className="fecha" type="date"/>
                     <label>Hora</label>
                    <input
                        type="time"
                        {...register("hora", { required: true })}
                        aria-invalid={errors.hora ? "true" : "false"}
                    />
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
                            {...register("nombre_destinatario", { required: true })}
                            aria-invalid={errors.nombre_destinatario ? "true" : "false"}
                        />
                        {errors.nombre_destinatario && <p>Field required</p>}
                    </div>    
                </div>  

                <div className="fila">
                    <div className="form__item">
                        <label>Cedula/Nit destinatario</label>
                        <input
                            {...register("nit_destinatario", { required: true })}
                            aria-invalid={errors.nit_destinatario ? "true" : "false"}
                        />
                        {errors.nit_destinatario && <p>Field required</p>}
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