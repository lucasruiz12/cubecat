import React from 'react';
import colors from '../../styles/colors';

const Info = () => {
    return (
        <section id="info" className="py-5" style={{ backgroundColor: colors.verdePalido }}>
            <div className="container" data-aos="fade-up">
                <p className="lead text-justify" style={{ color: colors.azul }}>Cube Cat combina bienestar felino, diseño funcional y adaptación al hogar moderno.
                    Su inspiración proviene de la naturaleza, específicamente de la piel del tiburón, que impide la adhesión de partículas no deseadas. Usan una lycra suave y funcional que, además de ser agradable al tacto, retiene los pelos del gato, ayudando a mantener la limpieza del hogar.
                    Cada módulo está diseñado con intención: para brindar comodidad a los gatos y facilitar la vida de quienes los cuidan. Cube Cat no solo ofrece un producto, sino una historia de amor por los gatos y de diseño consciente.</p>
            </div>
        </section>
    );
};

export default Info;
