import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Card } from "../Components";
import { useFectch } from "../hooks/useFectch";

export function MovieList({title , apiPath }) {
  console.log(apiPath)
  const {data:movies}=useFectch(apiPath)
  useEffect(()=>{
    document.title = title;
  })
  const navigator= useNavigate();
  return (
    <div className="container">
      <main className="container">
        {title=="MovieLab 🍿🎥"? <div className="bg-body-tertiary mb-5 p-5 top-cover fade-in">
          <h3 className="text-primary" >Welcome to <span>Movie Lab</span>, Your Ultimate Movie Destination!</h3>
          <p className="lead">Welcome to <span><strong>Movie Lab</strong></span>, your go-to hub for discovering, exploring, and enjoying movies. <br />From timeless classics to the latest releases, find curated lists, ratings, and reviews all in one place. Start your movie journey today!</p>
          <button className="btn btn-danger" onClick={()=>navigator("/movies/upcoming")}>Explore Now</button>
        </div>
        : <h5 className="text-danger py-2 ">{title}</h5>}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 Movie-Details">
          {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>
          })}
        </div>
      </main>
    </div>
  )
}
