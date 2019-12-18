import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark grey-dark">
  <a className="navbar-brand" href="#">MovieSeriesFind</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(Página atual)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Lançamentos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sobre</a>
      </li>
     
    </ul>
    <ul className="navbar-nav mr-4 mt-2 mt-lg-0">
    <li className="nav-item">
          <i className="fab fa-react fa-3x" id="react-logo" />
      </li>
    <li className="nav-item">
          <i className="fab fa-imdb fa-3x" id="imdb-logo" />
      </li>
    </ul>
  </div>
</nav>
  </div>
  )
}

export default Navbar
  