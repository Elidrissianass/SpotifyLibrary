import styled from "styled-components";


export const LoginStyle = styled.div`
div {
    display: grid;
    place-items: center;
    background-color: #000;
    height: 100vh;
}
@keyframes slideFromTop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
img {
    width: 100%;
    max-width: 830px;
    animation: 1.3s ease-out 0s 1 slideFromTop;
}
a { 
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    border-radius: 99px;
    background: none;
    background-color: #1db954;
    padding: 20px;
    transition: 0.15s;
  }a:hover{
    background-color: #22dd64;
  }
`