import styled from "styled-components";

export const Card = styled.div`
  animation: showCard 600ms ease-in-out;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  width: 18rem;
  height: auto;
  min-height: 18rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  backface-visibility: hidden;
  overflow: hidden;
  &:hover {
    transition: 0.4s ease-in-out;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 560px) {
    margin-right: 0;
  }
`;
export const ImageCard = styled.img`
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 220px;
`;
export const CardDescription = styled.div`
  padding: 1.4rem;
`;
