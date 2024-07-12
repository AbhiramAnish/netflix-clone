import "./Banner.css"
import {useEffect, useState} from 'react'
import { ImageURL } from "../../constants/Consts"
import axios from "../../Axios"

function Banner(prop) {
  let [movie,setMovie] = useState();
  let [movieTitle,setMovieTitle] = useState();
  let [movieName,setMovieName] = useState();
 
  useEffect(()=>{
    axios.get(prop.url).then((response)=>{
      console.log(response.data.results);
      let num = Math.floor(Math.random()*20);
      setMovie(response.data.results[num])
      setMovieTitle(response.data.results[num].title)
      setMovieName(response.data.results[num].name)
    })
  },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? ImageURL+movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movieTitle? movieTitle : movieName }</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
  )
}

export default Banner
