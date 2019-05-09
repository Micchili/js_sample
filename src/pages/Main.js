import React from 'react'
// import Button from '../components/button/Button'
import styled from 'styled-components'

const ButtonStyle = styled.button`
text-size: 3em;
display: inline-block;
padding: 0.3em 1em;
text-decoration: none;
color: #67c5ff;
border: solid 2px #67c5ff;
border-radius: 3px;
transition: .4s;
}

&:hover {
background: #67c5ff;
color: white;
}
`;

const Main = () => {
    return(
        <article>
            <ButtonStyle>
                Click Here
            </ButtonStyle>
        </article>
    )
}

export default Main;
