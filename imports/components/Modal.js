import React from 'react'
import styled from 'styled-components'

const Modal = ({open, ...props}) => {
    return(
        <MainContainer {...props}>
            <ModalContainer>
                {props.children}
            </ModalContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.5s;
`

const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    padding: 1em;
    background-color: white;
    border-radius: 0.5em;
    transition: all 0.5s;
`

export default Modal