import React, {useState, useContext} from 'react'
import Button from './Button'
import styled from 'styled-components'

const SigninForm = (props) => {
    const [email, setEmail] = useState("bob@yopmail.com")
    const [password, setPassword] = useState("")


    const login = (e) => {
        e.preventDefault()

        Meteor.loginWithPassword(email, password, (err, data) => {
            if(err) return alert(err.message)
            if(props.onLogin){
                props.onLogin()
            }
        })
    }

    return(
        <CustomForm onSubmit={login}>
            <h1>CONNECTEZ VOUS</h1>
            <input type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
            <Button>S'identifier</Button>
        </CustomForm>
    )
}

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;

    > input {
        margin-bottom: 1em;
        padding: 0.5em;
        font-size: 2em;
    }
`

export default SigninForm