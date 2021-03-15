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
        headerLogo,
        secondaryContentImage,
        headerSubtitleFirst,
        headerDescriptionFirst,
        headerSubtitleSecond,
        headerDescriptionSecond,
        headerTitle,
        leftBgColor
    } = item
    return (
        <Container leftBgColor={leftBgColor}>
            {headerTitle}
            {/* <img src={headerLogo.file.url} /> */}
            <img src={secondaryContentImage.file.url} />
            <p>{headerSubtitleFirst}</p>
            <p>{headerDescriptionFirst}</p>
            <p>{headerSubtitleSecond}</p>
            <p>{headerDescriptionSecond}</p>
        </Container>
    );
};

export default SecondContentType;