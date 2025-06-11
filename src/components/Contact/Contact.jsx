import React from 'react';
import colors from '../../styles/colors';
import genericVideo from '../../assets/genericVideo.mp4';

const Contact = () => {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: colors.crema }}>
      <div className="container" data-aos="fade-up">
        <h2 className="mb-4 text-center" style={{ color: colors.azul }}>Contacto</h2>

        <div className="mb-4 text-center">
          <video className="custom-img-border" width="100%" controls>
            <source src={genericVideo} type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </div>

        <div className="text-center">
          <p>¿Querés saber más o hacer un pedido? ¡Nos encanta hablar de gatos y diseño!</p>
          <p><strong>WhatsApp:</strong> +54 9 351 361-5922</p>
          <p><strong>Instagram:</strong> @cubecat_</p>
          <p><strong>Email:</strong> contacto@cubecat.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
