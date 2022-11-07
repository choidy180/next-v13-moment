import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { isThemeAtom } from '../recoil/theme'

export default function Home() {
  const isTheme = useRecoilValue(isThemeAtom);
  return (
    <>
      <Title color={isTheme} onClick={() => console.log(isTheme)}>nextJS</Title>
    </>
  )
}

const Title = styled.h1`
  font-size: 32px;
  color: ${props => props.color};
`