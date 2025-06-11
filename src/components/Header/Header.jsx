import React from 'react';
import colors from '../../styles/colors';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: colors.azul }}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Cube Cat" style={{ height: '50px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#about">Quiénes Somos</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#products">Productos</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#materials">Materiales</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
