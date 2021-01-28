import React from 'react'
import Movie from './Movie'
import styled from 'styled-components'

const CategoryDisplayer = ({category}) => {

   return(
       <MainContainer>
           <Title>{category.name}</Title>
           <MoviesContainer>
               {category.movies.map(movie => <Movie movie={movie} />)}
           </MoviesContainer>
       </MainContainer>
   )
}

const MainContainer = styled.div``

const Title = styled.h3`
    color: white;
    font-size: 2em;
`

const MoviesContainer = styled.div`
    display: inline-flex; 
`

export default CategoryDisplayer