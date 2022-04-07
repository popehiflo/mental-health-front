import React, { useEffect, useState } from 'react';
import './Services.css';
import getAllServices from '../../services/serviceServices';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';

export default function Services() {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const data = await getAllServices();
    setServices(data);
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <section className="services" id="services">
      <h1 className="section-heading">
        <span>Servicios</span>
      </h1>
      <div className="services__box-container">
        {services.map((servicio, index) => (
          <ServiceCard
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            // eslint-disable-next-line no-underscore-dangle
            id={servicio._id}
            service={servicio.title}
            description={servicio.description}
          />
        ))}
      </div>
    </section>
  );
}
