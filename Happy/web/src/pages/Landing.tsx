import React from 'react';
import logoImg from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt='Happy' />
        <main>
          <h1>Leve felicidade para os lares de idosos</h1>
          <p>Visite azilos  e mude o dia de vovôs e vovós.</p>
        </main>
        <div className="location">
          <strong>Araguaína</strong>
          <span>Tocantins</span>
        </div>

        {/* button */}
        <Link to="app/" className="enter-app">
          <FiArrowRight size={26} color="white"
          />
        </Link>
      </div>
    </div>
  );
}

export default Landing;