import { useForm } from "react-hook-form";
import "../hojas-de-estilos/Login.css"

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }


    return (
        <div className="contenedor-login">
            <div className="form-login" onSubmit={handleSubmit(customSubmit)}>
            {/* <form className="form-login" onSubmit={handleSubmit(customSubmit)}> */}
                <h6>Gestión de Paquetes-Login</h6>
                <div className="registrarse"><a href="/Registrarse">Registrarse</a></div>
                    <div className="form-labels">
                        <label>Usuario</label>
                        <label>Contraseña</label>
                    </div>

                    <div className="form-login__item">    
                        <input placeholder="Field required"
                            {...register("usuario", { required: true })}
                            aria-invalid={errors.usuario ? "true" : "false"}
                        />
                        {errors.usuario && <p>Usuario required. Max length 10</p>}
                    </div>
                    <div className="form-login__item">
                        <input type="password" placeholder= "Field required"
                        {...register("contrasena", { required: true  })}  //pattern: /^[A-Za-z]+$/i
                        aria-invalid={errors.contrasena ? "true" : "false"}
                        />
                        {errors.contrasena && <p>Contraseña requirida.</p>}
                    </div>

                    <div className="form-boton" >
                        <input type="submit" value="Login" />
                    </div>
            </div>

        </div>
        
    )
}

export default Login