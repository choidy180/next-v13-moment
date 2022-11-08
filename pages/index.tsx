import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { isThemeAtom } from '../recoil/theme'

export default function Home() {
  const isTheme = useRecoilValue(isThemeAtom);
  return (
    <>
      <Title color={isTheme} onClick={() => console.log(isTheme)}>안녕하세요. 반갑습니다</Title>
    </>
  )
}

const Title = styled.h1`
  font-size: 60px;
  text-shadow: ${props => props.color} 4px 0 10px;
`