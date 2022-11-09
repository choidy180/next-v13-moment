import * as React from 'react'
import moment from "moment-timezone";
import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { isThemeAtom } from '../recoil/theme'

export default function Home() {
  const isTheme = useRecoilValue(isThemeAtom);
  const [time, setTime] = React.useState('');
  const getCurrentTime = () => {
    setInterval(()=>{
      setTime(moment().format('LT'))
    },1000);
    return;
  };
  React.useEffect(()=>{
    getCurrentTime();
  },[]);
  return (
    <Wrapper>
      <Title color={isTheme} onClick={() => console.log(isTheme)}>{time !== '' ? time : 'Non-Time'}</Title>
      <SubTitle color={isTheme}>How was your day today?</SubTitle>
      <div className='inputBox'>
        <input type="text" placeholder='Please write your plan'/>
        <Underline className='underline' color={isTheme}/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div.inputBox{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
      margin-top: 18px;
      width: 100%;
      padding: 8px 14px 5px 14px;
      font-size: 1.75em;
      background-color: transparent;
      outline: none;
      border: none;
      color: #FFFFFF;
      ::placeholder{
        color: #bdc3c7;
      }
      &:focus + .underline {
        width: 100%;
      }
    }
    &::before{
      position: absolute;
      content: '';
      margin-top: 18px;
      top: 0px;
      left: 0px;
      width: 100%;
      height: calc(100% - 12px);
      background-color: #000000;
      opacity: 0.4;
    }
    .underline{
      position: absolute;
      width: 0%;
      height: 2px;
      left: 0;
      bottom: -4px;
      transition: all .25s ease-in-out;
      background-color: ${props => props.color};
    }
  }
`
const Title = styled.h1`
  font-size: 7em;
  text-shadow: ${props => props.color} 4px 0px 12px;
  word-spacing: -4px;
  transition: all .25s ease-in-out;
`
const SubTitle = styled.h2`
  font-size: 3em;
  margin-top: 6px;
  text-shadow: ${props => props.color} 6px 0px 12px;
  transition: all .25s ease-in-out;
`
const Underline = styled.div`
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -4px;
  transition: all .3s ease-in-out;
  background-color: ${props => props.color};
`
