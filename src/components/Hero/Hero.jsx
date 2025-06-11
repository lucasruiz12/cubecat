import React from 'react';
import colors from '../../styles/colors';
import genericImage from '../../assets/genericImage.png';

const Hero = () => {
  return (
    <section className="py-5 text-center" style={{ backgroundColor: colors.amarillo }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <h1 style={{ color: colors.azul, fontWeight: 'bold' }}>
              Diseño modular para el bienestar felino
            </h1>
            <p style={{ color: colors.azul }}>
              Espacios pensados para tus gatos, donde el diseño y el confort se encuentran.
            </p>
            <a href="#products" className="btn btn-dark">Ver Productos</a>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img src={genericImage} alt="Hero" className="img-fluid custom-img-border"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
