
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    @font-face {
        font-family: 'NEXON Lv2 Gothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'MaplestoryOTFBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    * {
        position: relative;
        box-sizing: border-box;
    }
    html{
        font-size: 12px;
        -webkit-text-size-adjust: none;
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        background-color: #141414;
        color: #fff;
    }
    body{
        margin: 0px;
        padding: 0px;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
    /* CSS */
    .HomeInput{
        border: .5px solid white;
        border-radius: 4px;
        font-weight: 300;
        ::placeholder{
            font-weight: 300;
        }
    }
    .sign_button{
        border: none;
        padding: 8px 0;
        border-radius: 28px;
        background-color: #00ACEE;
        color: white;
        outline: none;
    }
    .indexBorderLine{
        border-top: .4px solid white;
    }
    .Main_SocialIcon{
        cursor: pointer;
    }
    .postUnderIcon{
        cursor: pointer;
    }
    textarea{
        resize: none !important;
        border-bottom: .4px solid #fff;
        outline: none;
        border-bottom: .4px solid #fff;
    }
    input, textarea, ::selection,
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
`;