import { NavLink } from "react-router-dom"


export const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-danger"><a href="https://www.linkedin.com/in/senduru/" target="_blank" className="text-warning p-1 text-decoration-none">Senduru</a>© 2024 Company, Inc</p>


          <NavLink to="/" className="navbar-brand text-danger col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto  text-decoration-none">
          <i className="bi bi-camera-reels-fill"></i> MovieLab
          </NavLink>

        <ul className="nav col-md-4 justify-content-end text-danger">
          <li className="nav-item"><NavLink className="nav-link px-2 text-warning" to="/">Home | </NavLink></li>
          <li className="nav-item"><NavLink className="nav-link px-2 text-warning" to="/movies/top">Top Rated | </NavLink></li>
          <li className="nav-item"><NavLink className="nav-link px-2 text-warning" to="/movies/popular">Popular | </NavLink></li>
          <li className="nav-item"><NavLink className="nav-link px-2 text-warning" to="/movies/upcoming">Upcoming |</NavLink></li>
        </ul>
      </footer>
    </div>
  )
}

