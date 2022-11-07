import styled from "styled-components";
import { BsPlusLg, BsSun, BsMoon } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isThemeAtom } from '../recoil/theme'


const ThemeNavigation = ({changeTheme}:any) => {
    const useSetTheme = useSetRecoilState(isThemeAtom);
    const themeState= useRecoilState(isThemeAtom);
    return (
        <Container>
            <Title>테마 설정</Title>
            <BsPlusLg className="cancel"/>
            <LightDarkTheme color={themeState}>
                <div onClick={()=>changeTheme(true)}>
                    <BsSun className="sun"/>
                </div>
                <div onClick={()=>changeTheme(false)}>
                    <BsMoon/>
                </div>
            </LightDarkTheme>
            <PointTheme>
                <h2>Color Ficker</h2>
                <div className="container">
                    <ColorContent onClick={()=>useSetTheme('#f53b57')} color={'#f53b57'}/>
                    <ColorContent onClick={()=>useSetTheme('#3c40c6')} color={'#3c40c6'}/>
                    <ColorContent onClick={()=>useSetTheme('#0be881')} color={'#0be881'}/>
                </div>
            </PointTheme>
        </Container>
    )
}

const Container = styled.div`
    width: 280px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
    box-shadow: ${props => props.theme.shadowColor} 0px 2px 5px -1px, ${props => props.theme.shadowColor} 0px 1px 3px -1px;
    color: ${props => props.theme.textColor};
    padding: 14px;
    
    .cancel{
        position: absolute;
        right: 12px;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        cursor: pointer;
    }
`
const Title = styled.p`
    width: 100%;
    font-size: 19px;
    pointer-events: none;
    font-family: 'Pretendard-Regular';
    font-weight: 700;
`
const LightDarkTheme = styled.div`
    width: 100%;
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 64px;
        border-radius: 8px;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
        cursor: pointer;
        transition: all .15s ease-in-out;
        svg {
            width: 22px;
            height: 22px;
        }
        .sun {
            width: 26px;
            height: 26px;
        }
    }
`
const PointTheme = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 24px;
    div.container {
        width: 255px;
        height: 85px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
        cursor: pointer;
    }
    h2{
        color: ${props => props.theme.textColor};
        font-size: 20px;
        font-weight: 500;
    }
`

const ColorContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
`
export default ThemeNavigation;