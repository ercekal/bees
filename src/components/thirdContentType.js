import React from 'react';
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: blue;
`

const ThirdContentType = ({third}) => {
    const {mainText} = third
    return (
        <Container>
            {mainText}
        </Container>
    );
};

export default ThirdContentType;