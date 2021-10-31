import styled from 'styled-components'

export const Container = styled.div`
    
`

export const Top = styled.div`
    height: 27vh;
    background-color: var(--blue);

    .react-icons {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 25px;
        color: #fff;
    }
`

export const Main = styled.div`
    margin: 0 2.4rem;
    border-radius: 44rem;

    border-collapse: separate;

    background-color: #f5f5f5;

    header {

        display: flex;
        gap: 2rem;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-top: -50px;
        
        }

    }
`

export const HeaderInfo = styled.div`

    h2 {
        margin: 0.5rem 0 0.2rem 0;
    }
   
`


export const ServicesInfo = styled.div`
    font-family: Raleway, sans-serif;
    margin-top: 3rem;
    font-size: 1.2rem;

    .servicesItem {
        margin-top: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {

            p {
                font-family: Raleway, sans-serif;
                font-size: 1.3rem;
                font-weight: 600;
                margin-bottom: 0.3rem;
            }

            span {
                font-family: Poppins, sans-serif;
                color: var(--blue);
            }
            
        }

        button {
            border-radius: 0.4rem;
            height: 2.2rem;
            padding: 0 2.6rem;
            background: var(--blue);
            color: #fff;
        }
    }

`

export const Loading = styled.div`

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

     @keyframes ldio-6mzwot4130t {

    0% {
        opacity: 1;
        backface-visibility: hidden;
        transform: translateZ(0) scale(1.5,1.5);
    } 100% {
        opacity: 0;
        backface-visibility: hidden;
        transform: translateZ(0) scale(1,1);
    }
    }
    .ldio-6mzwot4130t div > div {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #3b4ce6;
        animation: ldio-6mzwot4130t 1s linear infinite;
        }.ldio-6mzwot4130t div:nth-child(1) > div {
        left: 148px;
        top: 88px;
        animation-delay: -0.875s;
    }
    .ldio-6mzwot4130t > div:nth-child(1) {
        transform: rotate(0deg);
        transform-origin: 160px 100px;
    }


    .ldio-6mzwot4130t div:nth-child(2) > div {
        left: 130px;
        top: 130px;
        animation-delay: -0.75s;
    }

    .ldio-6mzwot4130t > div:nth-child(2) {
    transform: rotate(45deg);
    transform-origin: 142px 142px;
    }

    .ldio-6mzwot4130t div:nth-child(3) > div {
    left: 88px;
    top: 148px;
    animation-delay: -0.625s;
    }

    .ldio-6mzwot4130t > div:nth-child(3) {
    transform: rotate(90deg);
    transform-origin: 100px 160px;
    }

    .ldio-6mzwot4130t div:nth-child(4) > div {
    left: 46px;
    top: 130px;
    animation-delay: -0.5s;
    }
    .ldio-6mzwot4130t > div:nth-child(4) {
    transform: rotate(135deg);
    transform-origin: 58px 142px;
    }.ldio-6mzwot4130t div:nth-child(5) > div {
    left: 28px;
    top: 88px;
    animation-delay: -0.375s;
    }
    .ldio-6mzwot4130t > div:nth-child(5) {
    transform: rotate(180deg);
    transform-origin: 40px 100px;
    }.ldio-6mzwot4130t div:nth-child(6) > div {
    left: 46px;
    top: 46px;
    animation-delay: -0.25s;
    }
    .ldio-6mzwot4130t > div:nth-child(6) {
    transform: rotate(225deg);
    transform-origin: 58px 58px;
    }.ldio-6mzwot4130t div:nth-child(7) > div {
    left: 88px;
    top: 28px;
    animation-delay: -0.125s;
    }
    .ldio-6mzwot4130t > div:nth-child(7) {
    transform: rotate(270deg);
    transform-origin: 100px 40px;
    }.ldio-6mzwot4130t div:nth-child(8) > div {
        left: 130px;
        top: 46px;
        animation-delay: 0s;
    }
    .ldio-6mzwot4130t > div:nth-child(8) {
        transform: rotate(315deg);
        transform-origin: 142px 58px;
    }
    .loadingio-spinner-spin-q9009gkv1x {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
    }
    .ldio-6mzwot4130t {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }

    .ldio-6mzwot4130t div { box-sizing: content-box; }
`