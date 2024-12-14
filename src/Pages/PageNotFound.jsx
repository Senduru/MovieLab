import { Link } from "react-router-dom"
import notFound from "../assets/PageNot.jpeg";

export function PageNotFound() {
  return (
    <div className="container text-center">
      <img src={notFound} className="img-fluid align-items-center  rounded-top "/>
      <p className="text-center mt-5">
      <Link to="/" className="btn btn-danger">Go To HomePage</Link>
      </p>
    </div>
  )
}
