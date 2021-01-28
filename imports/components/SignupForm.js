import React, {useState, useContext} from 'react'
import Button from './Button'
import styled from 'styled-components'

const SignupForm = (props) => {
    const [email, setEmail] = useState("bob@yopmail.com")
    const [password, setPassword] = useState("")


    const signup = (e) => {
        e.preventDefault()
        if(!email || !password) return alert("Il manque des informations")

        Accounts.createUser({email, password}, (error, data) => {
            if(error){
                console.log(error.message)
                return alert("Erreur lors de l'inscription")
            }
            if(props.onSignup){
                props.onSignup()
            }
        })
        
        
    }

    return(
        <CustomForm onSubmit={signup}>
            <h1>INSCRIVEZ VOUS</h1>
            <input required type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
            <input required type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
            <Button>S'inscrire</Button>
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

export default SignupForm