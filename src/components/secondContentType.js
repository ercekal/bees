import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background: linear-gradient(to right, ${({leftBgColor}) => leftBgColor ? leftBgColor : 'red'} 0%,${({leftBgColor}) => leftBgColor ? leftBgColor : 'red'} 38%,white 38%,white 100%);
    height: 100vh;
    width: 100%;
`

const SecondContentType = ({item}) => {
    const {
        headerDescriptionSecond,
        headerLogo: {
          description,
          file: {
            url
          },
          title
        },
        headerSubtitleSecond,
        headerTitle,
        leftBgColor
    } = item
    return (
        <Container leftBgColor={leftBgColor}>
            test
        </Container>
    );
};

export default SecondContentType;