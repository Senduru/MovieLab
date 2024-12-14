import { useEffect, useState } from "react"


export const useFectch = (apiPath,querytherm="") => {
  console.log(apiPath)

  const [data,setdata]=useState([]);
  const key=import.meta.env.VITE_API_KEY;
  
  const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${querytherm}`;

  useEffect(()=>{
    async function Fetchmovie() {
        fetch(url)
        .then((res)=>res.json())
        .then((jsonData)=>setdata(jsonData.results));
    }
    Fetchmovie();
  },[url])
  return {data};
}
