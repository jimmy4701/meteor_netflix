import React from 'react'

const Button = ({clear, ...props}) => {

    return(
        <button className={clear && "clear"}  {...props} >
            {props.children}
        </button>
    )
}

export default Button