import * as React from 'react';
import styled from "styled-components";

const Layout = (props: {children: React.ReactNode}) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'NEXON Lv2 Gothic';
    font-weight: 400;
    z-index: 10;
    color: #FFFFFF;
`

export default Layout;