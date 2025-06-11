import React from 'react';
import colors from '../../styles/colors';
import genericImage4 from '../../assets/genericImage4.png';

const Materials = () => {
    return (
        <section id="materials" className="py-5" style={{ backgroundColor: colors.verdePalido }}>
            <div className="container" data-aos="fade-up">
                <div className="container" data-aos="fade-up">
                    <h2 className="text-center mb-4">Materiales</h2>
                    <ul className="materials-list list-unstyled mx-auto" style={{ fontSize: '1.2rem' }}>
                        <li className="mb-3">🐱 MDF</li>
                        <li className="mb-3">🐱 Tela Felpa Ligera</li>
                        <li className="mb-3">🐱 Tela Polar</li>
                        <li className="mb-3">🐱 Lycra</li>
                    </ul>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={genericImage4} alt="Materiales" className="img-fluid custom-img-border" />
                    </div>
                    <div className="col-md-6">
                        <p style={{ color: colors.azul }}>
                            Nuestro enfoque combina bienestar felino, diseño funcional y adaptabilidad para el hogar moderno.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Materials;
