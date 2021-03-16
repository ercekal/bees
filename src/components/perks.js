import React from 'react';
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: green;
  width: 100%;
  height: 100vh;
`

const Perks = ({perks}) => {
    const {title} = perks 

    return (
        <Container>
            {title}
        </Container>
    );
};

export default Perks;