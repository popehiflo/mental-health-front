/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../../services/user';
import UploadImage from '../UploadImage/UploadImage';
import './Profile.css';

function Profile() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(userProfile._id, form);
    setForm({});
    navigate(userProfile.role === 'doctor' ? '/viewerDoctor' : '/viewerPatient');
  };
  useEffect(async () => {
    const person = await getUser(user._id);
    setUserProfile(person);
  }, []);
  return (
    <div className="main__container">
      <p className="section-headingProfile">Mi perfil</p>
      <div className="profile__container">
        <div className="imgupload">
          <img className="imgPerfil" src={userProfile.avatar} alt="imagen" />
          <br />
          <UploadImage id={userProfile._id} />
        </div>
        <table className="tableProfile">
          <td rowSpan="4">
            {user?.role === 'patient' && (
            <form onSubmit={handleSubmit}>
              <fieldset>
                <h2>Nombres:</h2>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  size="20"
                  onChange={handleChange}
                  placeholder={userProfile.firstName}
                />
              </fieldset>
              <fieldset>
                <h2>Apellidos:</h2>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  size="20"
                  onChange={handleChange}
                  placeholder={userProfile.lastName}
                />
              </fieldset>
              <fieldset>
                <h2>Teléfono:</h2>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  size="20"
                  onChange={handleChange}
                  placeholder={userProfile.phone}
                />
              </fieldset>
              <fieldset>
                <h2>Fecha de nacimiento:</h2>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  size="20"
                  min="1940-01-01"
                  onChange={handleChange}
                />
                <td><strong>{userProfile.birthDate}</strong></td>
              </fieldset>
              <div className="btn__centered">
                <button type="submit" className="btn-appointment">
                  Modifica tus datos
                </button>
              </div>
            </form>
            )}
            {user?.role === 'doctor' && (
              <form className="tableProfileDoctor" onSubmit={handleSubmit}>
                <fieldset>
                  <h2>Nombres:</h2>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    size="20"
                    onChange={handleChange}
                    placeholder={userProfile.firstName}
                  />
                </fieldset>
                <fieldset>
                  <h2>Apellidos:</h2>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    size="20"
                    onChange={handleChange}
                    placeholder={userProfile.lastName}
                  />
                </fieldset>
                <fieldset>
                  <h2>Teléfono:</h2>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    size="20"
                    onChange={handleChange}
                    placeholder={userProfile.phone}
                  />
                </fieldset>
                <fieldset>
                  <h2>Descripción:</h2>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    rows="8"
                    cols="24"
                    onChange={handleChange}
                    placeholder={userProfile.description}
                  />
                </fieldset>
                <fieldset>
                  <h2>Areas de atención:</h2>
                  <input
                    type="text"
                    id="atentionarea"
                    name="atentionarea"
                    size="20"
                    onChange={handleChange}
                    placeholder={userProfile.atentionarea}
                  />
                </fieldset>
                <fieldset>
                  <h2>Expriencia profesional:</h2>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    size="20"
                    onChange={handleChange}
                    placeholder={userProfile.experience}
                  />
                </fieldset>
                <fieldset>
                  <h2>Formación Académica:</h2>
                  <input
                    type="text"
                    id="academic"
                    name="academic"
                    size="20"
                    onChange={handleChange}
                    placeholder={userProfile.academic}
                  />
                </fieldset>
                <div className="btn__centered">
                  <button type="submit" className="btn-appointment" data-cy="updateData">
                    Modifica tus datos
                  </button>
                </div>
              </form>
            )}

          </td>
        </table>
      </div>
    </div>
  );
}
export default Profile;
