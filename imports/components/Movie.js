import React from 'react'
import styled from 'styled-components'

const Movie = ({movie}) => {


   return(
       <MainContainer image={movie.image}>
           {movie.netflix &&
            <NetflixLogo src="https://image.flaticon.com/icons/png/512/870/870910.png" />
           }
           {movie.top &&
            <Top>TOP<br/><span>10</span></Top>
           }
           {movie.new_episodes &&
            <NewEpisodes>Nouveaux épisodes</NewEpisodes>
           }
       </MainContainer>
   )
}

const MainContainer = styled.div`
    position: relative;
    height: 15em;
    width: 25em;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 1em;
    border-radius: 0.3em;
    transition: all 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        transform: scale(1.1);
        z-index: 2;
    }
`

const NetflixLogo = styled.img`
    height: 2em;
    position: absolute;
    top: 10px;
    left: 10px;
`

const Top = styled.div`    
    position: absolute;
    right: 0;
    background-color: red;
    color: white;
    font-weight: bold;
    text-align: center;
    line-height: 1.3em;
    padding: 0.3em;

    span {
        font-size: 1.5em;
    }
`

const NewEpisodes = styled.div`
    position: absolute;
    left: 0;
    bottom: 20px;
    background-color: red;
    color: white;
    font-weight: bold;
    padding: 0.3em 0.8em;
    text-transform: uppercase;
`


export default Movie