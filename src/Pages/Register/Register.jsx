/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import sweetalert from 'sweetalert';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Register.css';
import { createUser } from '../../store/actions';

function Register() {
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmit = (event) => {
    // event.preventDefault();
    dispatch(createUser(form));
    setForm({});
    sweetalert({
      icon: 'success',
      title: 'Gracias por registrarte con nosotros.',
      text: 'Para continuar con el proceso revisa tu correo',
      buttons: 'Continuar',
    });
  };
  return (
    <div className="register">
      <div className="landingReg">
        <div className="subtitleReg">Registro</div>
        <form onSubmit={onSubmit}>
          <fieldset>
            <label htmlFor="firstName" className="register__label">
              Nombre
              <br />
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                size="30"
               /* {...register('firstName', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              <br />
              {errors.firstName && <span className="validationP">{errors.firstName.message}</span>} */
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="lastName" className="register__label">
              Apellido
              <br />
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                size="30"
               /* {...register('lastName', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              <br />
              {errors.lastName && <span className="validationP">{errors.lastName.message}</span>} */
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="phone" className="register__label">
              Celular
              <br />
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                size="30"
                /*{...register('phone', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              <br />
              {errors.phone && <span className="validationP">{errors.phone.message}</span>}*/
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="email" className="register__label">
              Email
              <br />
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                size="30"
                /*{...register('email', {
                  required: {
                    value: true,
                    message: 'El email es requerido',
                  },
                })}
              />
              <br />
              {errors.email && <span className="validationP">{errors.email.message}</span>}*/
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="password" className="register__label">
              Contraseña
              <br />
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                size="30"
                /*{...register('password', {
                  required: {
                    value: true,
                    message: 'La contraseña es requerida',
                  },
                  minLength: {
                    value: 3,
                    message: 'La contraseña debe tener al menos 3 caracteres',
                  },
                })}
              />
              <br />
              {errors.password && <span className="validationP">{errors.password.message}</span>}*/
              />
            </label>
          </fieldset>
          <div className="btn__centered">
            <button type="submit" className="btn-appointment">
              Regístrate
            </button>
          </div>
        </form>
        <div className="session">
          ¿Ya eres un miembro?
          <Link to="/login">Inicia sesión</Link>
        </div>
        <Link to="/doctor-warning">
          <button type="submit" className="btn-appointment">
            ¿Doctor?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
