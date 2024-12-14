import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigator=useNavigate();
  const handleSearch=(e)=>{
    e.preventDefault();
    const queryTerm=e.target.search.value;
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`)
  }
  return (
   <nav className="navbar navbar-expand-md fixed-top bg1 navbar-dark">
    <div className="container-fluid">
      <NavLink to="/" className="navbar-brand">
      <i className="bi bi-camera-reels-fill"></i> MovieLab
      </NavLink>
      <button className="navbar-toggler" type="button" 
      data-bs-toggle="collapse" data-bs-target="#menu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
          <li>
            <NavLink className="nav-link" to="/movies/top">Top Rated</NavLink>
            </li>
          <li>
            <NavLink className="nav-link" to="/movies/popular">Popular</NavLink>
            </li>
          <li>
            <NavLink className="nav-link" to="/movies/upcoming">Upcoming</NavLink>
            </li>
        </ul>
        <form onSubmit={handleSearch}>
          <input type="search" name="search" className="form-control " placeholder="Search"></input>
        </form>
      </div>
    </div>
   </nav>
  )
}

