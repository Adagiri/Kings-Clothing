import style from "styled-components";

export const HomePageContainer = style.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 80px;

@media screen and (max-width: 800px) {
    padding: 10px 20px;
  }
`