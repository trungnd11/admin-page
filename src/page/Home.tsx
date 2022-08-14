import logo from "../static/images/logos/vetc.png";
import { fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

const zoomInAnimation = keyframes`
  5%,
  50% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.8);
  }
  15% {
    transform: scale(1.5);
  }
  20% {
    transform: scale(1.5) rotate(-5deg);
  }
  25% {
    transform: scale(1.5) rotate(5deg);
  }
  30% {
    transform: scale(1.5) rotate(-3deg);
  }
  35% {
    transform: scale(1.5) rotate(2deg);
  }
  40% {
    transform: scale(1.5) rotate(0);
  }
`;
const titleInAnimation = keyframes`${fadeInDown}`;

const ZoomDiv = styled.img`
  animation: 3s ${zoomInAnimation} infinite linear alternate;
`;

const Title = styled.h1`
  animation: 5s ${titleInAnimation} forwards;
  text-shadow: 6px 6px white, 12px 12px #464545;
  font-weight: 700;
  letter-spacing: 1rem;
`;

export default function Home() {
  const titleStyle = {
    fontSize: "10rem",
    fontFamily: "Great Vibes,cursive",
    color: "#41af5f",
  };
  return (
    <div className="container h-100">
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <Title style={titleStyle}>Welcome</Title>
        <ZoomDiv src={logo} alt="logo vetc" width="30%" />
      </div>
    </div>
  );
}
