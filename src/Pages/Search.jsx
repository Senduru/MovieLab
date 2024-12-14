
import { useEffect } from "react"
import {useSearchParams } from "react-router-dom";
import { Card } from "../Components";
import { useFectch } from "../hooks/useFectch";

export function Search({apiPath}) {
  const [searchparams]=useSearchParams();
  const queryTerm=searchparams.get("q");
  const {data:movies}=useFectch(apiPath,queryTerm);

  useEffect(()=>{
    document.title=`Search result for ${queryTerm}`;
  })
  return (
    <main className="container">
      <h2 className="text-danger py-2 border-bottom">{movies.length==0 ?`No result found for ${queryTerm}`:`Result for ${queryTerm}`}</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>
          })}
        </div>
    </main>
  )
}

