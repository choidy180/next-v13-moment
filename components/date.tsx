import moment from 'moment-timezone'
import * as React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components'
import { isThemeAtom } from '../recoil/theme';

const Date = () => {
    const isTheme = useRecoilValue(isThemeAtom);
    return (
        <Container color={isTheme}>
            <h1>{moment().format('LL')}</h1>
        </Container>
    )
}

const Container = styled.div`
    padding: 14px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999;
    h1{
        font-size: 1.75em;
        transition: all .1s ease-in-out;
        &:hover{
            cursor: pointer;
            color: ${props => props.color}
        }
    }
`

export default Date;