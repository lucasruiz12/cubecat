import React from 'react';
import colors from '../../styles/colors';
import genericImage2 from '../../assets/genericImage2.png';
import genericImage3 from '../../assets/genericImage3.png';

const Products = () => {
  return (
    <section id="products" className="py-5" style={{ backgroundColor: colors.verdeClaro }}>
      <div className="container" data-aos="fade-up">
        <h2 className="mb-4 text-center" style={{ color: colors.azul }}>Nuestros Productos</h2>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card custom-img-border">
              <img src={genericImage2} alt="Producto 1" className="card-img-top custom-img-border" />
              <div className="card-body text-center">
                <h5 className="card-title">Modelo Modular 40x40</h5>
                <p className="card-text">Envíos a toda la Argentina</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card custom-img-border">
              <img src={genericImage3} alt="Producto 2" className="card-img-top custom-img-border" />
              <div className="card-body text-center">
                <h5 className="card-title">Modelo Personalizado</h5>
                <p className="card-text">Consultanos por otros modelos</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
