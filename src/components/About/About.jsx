import React from 'react';
import colors from '../../styles/colors';

const About = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: colors.crema }}>
      <div className="container" data-aos="fade-up">
        <h2 className="mb-4 text-center" style={{ color: colors.azul }}>Quiénes Somos</h2>
        <p className="lead text-center" style={{ color: colors.azul }}>
          Somos Cube Cat, una marca nacida del amor por los gatos y el diseño.
          Creamos refugios que respetan su naturaleza curiosa, su necesidad de descanso y su forma única de habitar el mundo.
        </p>
      </div>
    </section>
  );
};

export default About;
