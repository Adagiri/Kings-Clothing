import styled from "styled-components";

export const SignInContainer = styled.div`
  min-width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    min-width: unset;
    margin-bottom: 60px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
