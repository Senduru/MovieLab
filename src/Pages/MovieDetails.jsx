import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import packup from "../assets/backup.jpeg"
import { coverMinutes } from "../utility/utils";
export function MovieDetails() {
  const key=import.meta.env.VITE_API_KEY;
  const params=useParams();
  const [movie,setmovie]=useState([]);
  const url=`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  const image =movie.poster_path? `https://image.tmdb.org/t/p/original${movie.poster_path}`:packup;
  console.log(url)

  useEffect(()=>{
    async function Fetchmovie() {
        fetch(url)
        .then((res)=>res.json())
        .then((jsonData)=>{setmovie(jsonData);console.log(jsonData);});
    }
    Fetchmovie();
  },[])
  useEffect(()=>{
    document.title=`${movie.title}`;
  })
  return <main className="container">
    <h2 className="text-danger py-2 border-buottom mb-3">{movie.title}</h2>
    <div className="row">
      <div className="col-md-4 Movie-Slide">
        <img src={image} className="img-fluid poster-details" />
      </div>
      <div className="col col-md-8 mt-5 Movie-Details">
        <h3 className="text-danger">{movie.title}</h3>
        <p className="mt-3">{movie.overview}</p>
        {movie.genres?<p className="d-flex gap-3">
          {movie.genres.map((genre)=>(
            <span key={genre.id} className="badge bg-danger">{genre.name}</span>
          ))}
        </p>:""}
        <p className="mt-2">
          <i className="bi bi-star-fill text-warning"></i>
          {movie.vote_average} |  
          <i className="bi bi-people-fill text-success"></i>
          {movie.vote_count} reviews
        </p>

        <table className="table table-border w-50 mt-2 Movie-Details">
          <tbody>
            <tr>
              <th>Runtime</th>
              <td>{coverMinutes(movie.runtime)}</td>
            </tr>
            <tr>
              <th>Budget</th>
              <td>{movie.budget}</td>
            </tr>
            <tr>
              <th>Revenue</th>
              <td>{movie.revenue}</td>
            </tr>
            <tr>
              <th>Release Date</th>
              <td>{movie.release_date}</td>
            </tr>
          </tbody>
        </table>
        <a className="btn btn-warning" target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}/`}>View In IMDB</a>
      </div>
    </div>
  </main>
}

