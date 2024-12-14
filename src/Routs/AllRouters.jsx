import { Route, Routes } from "react-router-dom"
import { MovieDetails, MovieList, PageNotFound, Search } from "../Pages"
const AllRouters = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MovieList title="MovieLab 🍿🎥" apiPath="movie/now_playing" />} />
        <Route path="movies/popular" element={<MovieList title="Popular" apiPath="movie/popular" />} />
        <Route path="movies/top" element={<MovieList title="Top Rated Movie" apiPath="movie/top_rated" />} />
        <Route path="movies/upcoming" element={<MovieList title="Upcoming" apiPath="movie/upcoming" />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} title="Page Not Found"  />
    </Routes>
    </>
    
  )
  
}

// http://localhost:5173/
export default AllRouters
