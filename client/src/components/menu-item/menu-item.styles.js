import styled from "styled-components";

export const Menuitem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #534343;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.5);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
      height: 200px;
    width: 40%;
      &.large {
        height: 200px;
      }
  }
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.6;
  position: absolute;
  text-align: center;

  @media screen and (max-width: 800px) {
    padding: 5px;
    width: 90%;
    height: 60%;
    opacity: 0.5;
  }

`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;

`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;

 
`;

export const BackgroundImage = styled.div`
background-position: center;
background-size: cover;
width: 100%;
height: 100%;
`
