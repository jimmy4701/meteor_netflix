import React, {useMemo, useContext} from 'react'
import Button from '../components/Button'

const MovieHeader = ({movie}) => {

    const style = useMemo(() => {
        return {
            backgroundImage: `url(${movie.image})`
        }
    }, [movie])

    return(
        <div className="movie-header" style={style}>
            <div className="type-container">
                <img src="https://image.flaticon.com/icons/png/512/870/870910.png" />
                <div>{movie.type}</div>
            </div>
            <h1 className="movie-title">{movie.title}</h1>
            <div className="buttons-container">
                <Button onClick={() => alert("Lecture")}>Lecture</Button>
                <Button clear>Plus d'info</Button>
            </div>
        </div>
    )
}

export default MovieHeader