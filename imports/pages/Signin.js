import React from 'react'
import styled from 'styled-components'
import SigninForm from '../components/SigninForm'
import { useHistory } from 'react-router-dom'

const Signin = () => {
    const history = useHistory()

    const redirect_user = () => {
        history.push('/home')
    }

  return (
    <MainContainer>
      <Header>
       <SigninForm onLogin={redirect_user} />
      </Header>
    </MainContainer>
  );
}

const MainContainer = styled.div``

const Header = styled.div`
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/b6f906ab-4f9f-49b5-a63b-6a3b29c8d04b/b6af7fc1-fcc2-4659-a949-4c62c0f7d21e/FR-fr-20210118-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 80vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export default Signin;
