import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    padding-top: 8rem;
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #212121;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.3rem;
        font-weight: 400;
        color: #212121;
        margin-bottom: 1rem;
    }
    @media (min-width: 768px) {
        width: 70%;
        height: 100vh;
        paddting-top: 5rem;

        h1 {
            font-size: 3rem;
            line-height: 1;
        }
        p {
            font-size: 1.6rem;
            padding: 0 10rem;
        }
    }
    `