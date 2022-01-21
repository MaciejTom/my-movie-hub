import styled from "styled-components";

export const SpinnerElement = styled.div`
    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 0.8s linear infinite;
    margin: 0 auto;
    

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
export const SpinnerContainer = styled.div`
padding: 7.5em 0`
