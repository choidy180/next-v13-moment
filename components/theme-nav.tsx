import styled from "styled-components";
import { BsPlusLg, BsSun, BsMoon } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { isPointAtom } from "../src/theme";


const ThemeNavigation = ({changeTheme}:any) => {
    const useSetTheme = useSetRecoilState(isPointAtom);
    return (
        <Container>
            <Title>테마 설정</Title>
            <BsPlusLg className="cancel"/>
            <LightDarkTheme>
                <div onClick={()=>changeTheme(true)}>
                    <BsSun className="sun"/>
                </div>
                <div onClick={()=>changeTheme(false)}>
                    <BsMoon/>
                </div>
            </LightDarkTheme>
            <PointTheme>

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
    font-size: 18px;
    pointer-events: none;
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
        box-shadow: ${props => props.theme.shadowColor} 0px 1px 1px, ${props => props.theme.shadowColor} 0px 0px 1px 1px;
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
        :hover{
            box-shadow: ${props => props.theme.shadowColor} 0px 4px 8px -2px, ${props => props.theme.shadowColor} 0px 0px 0px 1px;
        }
    }
`
const PointTheme = styled.div`
    width: 100%;
`
export default ThemeNavigation;