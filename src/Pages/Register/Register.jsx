import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import newUser from '../../services/user';

function Register() {
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser(form);
    setForm({});
  };
  return (
    <div className="register">
      <div className="landingReg">
        <div className="subtitleReg">Registro</div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name" className="register__label">
              Nombre
              <br />
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                size="30"
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
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="mail" className="register__label">
              Email
              <br />
              <input
                type="email"
                id="mail"
                name="mail"
                onChange={handleChange}
                size="30"
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
