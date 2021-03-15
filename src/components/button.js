import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    padding: 0 5px;
    height: 39px;
`

const Text = styled.div`
    font-family: Barlow Semi Condensed;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.05em;
    color: #FFFF00;
    margin-bottom: 0;
`

const Button = ({children}) => {
    return (
        <Container>
            <Link to='/contact'>
                <Text>{children}</Text>
            </Link>
        </Container>
    );
};

export default Button;