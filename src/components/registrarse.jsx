import { useForm } from "react-hook-form";
import "./hojas-de-estilos/Registrarse.css"

const Registrarse = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return (
        <div className="contenedor-registrarse">
            <form className="form-registrarse" onSubmit={handleSubmit(customSubmit)}>
            <h6>Gestión de Paquetes-Registro Usuarios</h6>
            
            <div className="form-labels">
                <label>Nombre</label>
                <label>Usuario</label>
                <label>Contraseña</label>
                <label>Correo</label>
            </div>

            <div className="form-registrarse__item">    
                <input placeholder="Field required"
                    {...register("nombre", { required: true, minLength: 1 })}
                    aria-invalid={errors.nombre ? "true" : "false"}
                />
                {/* {errors.usuario && <p>Usuario required. Max length 10</p>} */}
            </div>

            <div className="form-registrarse__item">    
                <input placeholder="Field required"
                    {...register("nombre", { required: true, minLength: 1 })}
                    aria-invalid={errors.nombre ? "true" : "false"}
                />
                {/* {errors.usuario && <p>Usuario required. Max length 10</p>} */}
            </div>

            <div className="form-registrarse__item">
                <input type="password" placeholder= "Field required"
                    {...register("contrasena", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.contrasena ? "true" : "false"}
                />
                {/* {errors.contrasena && <p>Contraseña requirida.</p>} */}
            </div>
            
            <div className="form-registrarse__item">    
                <input placeholder="Field required"
                    {...register("correo", { required: true, minLength: 1 })}
                    aria-invalid={errors.correo ? "true" : "false"}
                />
                {/* {errors.usuario && <p>Usuario required. Max length 10</p>} */}
            </div>

            <div className="form-boton" >
            <input type="submit" value="Crear" />
            </div>
            
        </form>

        </div>
        
    )
}

export default Registrarse