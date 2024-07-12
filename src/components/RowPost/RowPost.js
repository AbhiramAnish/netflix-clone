import React, { useEffect, useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../Axios'
import {ImageURL } from '../../constants/Consts'


function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    const [playingMovie,setPlayingMOvie] = useState('')
    useEffect(()=>{
        axios.get(props.genre).then((respons)=>{
            console.log(respons.data.results[0])
            setMovies(respons.data.results)
        })
    },[])


    const opts = {
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls:0,
          iv_load_policy:3,
        },
      };


      const HandleTrailer=(movieID)=>{
            if(playingMovie===movieID){
                setPlayingMOvie(null)
            }else{
                setPlayingMOvie(movieID)
            }
        

        console.log(movieID);
        axios.get(`/movie/${movieID}/videos?api_key=f151618fa5b752ba1bbc8024990b04b4&language=en-US`).then((respond)=>{
            console.log(respond.data);
            if(respond.data.results.length!==0){
            setUrlId(respond.data.results[0].key);
            }
            else{
                setUrlId('xjQOFPwVdrk');
            }
        })
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='posters'>
                {movies.map((obj)=>
                     <img onClick={()=>{HandleTrailer(obj.id)}} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${obj ? ImageURL+obj.poster_path : ""}`} /> // map function returns
                )}
                
            </div>
     {urlId  && playingMovie!==null ?  <Youtube opts={opts} videoId={urlId ? urlId : '' }/> : '' }
        </div>
    )
}

export default RowPost