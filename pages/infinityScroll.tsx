import * as React from 'react'
import styled from 'styled-components';

const InfinityScroll = () => {
    return (
        <>
            <Container>
                <h1 className="title">infinite scroll</h1>
                <div className="card-container">
                <div className="card">
                    <img src='../assets/scroll/9bd968981a80a10399c7080ed2a69ca423757774.png'/>
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">손 틈새로 비치는 아이유 참 좋다</p>
                </div>
                <div className="card">
                    <img src="images/iu1.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu2.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu3.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu4.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu5.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu6.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu7.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu8.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu9.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu10.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                <div className="card">
                    <img src="images/iu11.png" />
                    <h2 className="card-title">아이유</h2>
                    <p className="card-content">IU</p>
                </div>
                </div>
                <script src="./index.js"></script>
            </Container>
        </>
    )
}

export default InfinityScroll;

const Container = styled.div`
    * {
    box-sizing: border-box;
    }

    .title {
    font-weight: 900;
    color: #bb8bff;
    text-align: center;
    font-size: 30px;
    }

    .card-container {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
    }

    .card {
    width: 240px;
    border: 1px solid #bb8bff;
    box-shadow: 4px 4px 1px #e8e8e850;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    }

    .card::before {
    content: '';
    position: absolute;
    bottom: 0;
    background: #bb8bff;
    width: 100%;
    height: 5px;
    }

    .card::after {
    content: '';
    position: absolute;
    top: 0;
    background: #bb8bff;
    width: 100%;
    height: 5px;
    }

    .card img {
    width: 100%;
    display: block;
    }

    .card-title {
    color: #4a4a4a;
    font-size: 24px;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    }

    .card-content {
    font-size: 14px;
    color: #585858;
    margin: 0;
    margin-bottom: 15px;
    padding: 10px;
    padding-top: 5px;
    }

    .skeleton-card {
    width: 240px;
    border: 1px solid #ddd;
    box-shadow: 4px 4px 1px #e8e8e850;
    border-radius: 5px;

    overflow: hidden;
    position: relative;
    }

    .skeleton-card::before {
    content: 'loading...';
    position: absolute;
    top: 35%;
    left: 50%;
    right: 25%;
    transform: translateX(-50%);
    z-index: 5;
    color: rgb(227, 227, 227);
    }

    .skeleton-card-header {
    width: 100%;
    height: 277px;
    background-color: #f2f2f2;
    border-radius: 5px;

    overflow: hidden;
    position: relative;
    }

    .skeleton-card-header::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 200%;
    background: linear-gradient(
        to left,
        #ffffff10,
        #ffffff50,
        #ffffff70,
        #ffffff50,
        #ffffff10
    );
    transform: rotate(10deg);
    left: -20px;
    top: -200px;

    animation: skeleton-loading infinite 1.2s linear;
    }

    .skeleton-card-title {
    height: 25px;
    background: #f0f0f080;
    margin: 5px;
    border-radius: 5px;

    overflow: hidden;
    position: relative;
    }

    .skeleton-card-content {
    height: 45px;
    background: #f0f0f080;
    margin: 5px;
    border-radius: 5px;

    overflow: hidden;
    position: relative;
    }

    .skeleton-card-content::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 400px;
    background: linear-gradient(
        to left,
        #ffffff10,
        #ffffff50,
        #ffffff50,
        #ffffff50,
        #ffffff10
    );
    transform: rotate(10deg);
    left: -100px;
    bottom: 0;

    animation: skeleton-loading infinite 1.2s linear;
    }

    @keyframes skeleton-loading {
    0% {
        transform: rotate(30deg) translateX(0px);
    }
    50% {
        transform: rotate(30deg) translateX(220px);
    }
    100% {
        transform: rotate(30deg) translateX(340px);
    }
    }
`