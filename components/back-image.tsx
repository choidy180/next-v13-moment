import Image from "next/image";
import styled from "styled-components";
import BackImageSrc from '../assets/images/league_of_legends_game-wallpaper-3840x2160.jpg'

const BackImage = () => {
    return (
        <BackLogoImage>
            <Image
                layout='fill'
                objectFit='cover'
                src={BackImageSrc}
                alt={'back-Image'}
            />
            <div className='darkbox'/>
        </BackLogoImage>
    )
}

const BackLogoImage = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    img{
        cursor: pointer;
        pointer-events: none;
    }
    div{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: #000000;
        opacity: 0.45;
    }
`

export default BackImage;