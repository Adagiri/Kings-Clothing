import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const FooterContainer = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
padding: 0 20px;
`

export const Name = styled.span`
width: 90%;
margin-bottom: 15px;
font-weight: bold;
`

export const Price = styled.span`
width: 10%;
margin-right: 1rem;
font-weight: bold;
`

export const CollectionItemContainer = styled.div`
width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    overflow: hidden;
    position: relative;
    border: solid 2px rgb(200, 197, 197);
    

    &:hover {
      cursor: pointer;
      border: solid 1px rgb(200, 197, 197);
      

  
      &.collection-item__image {
        transform: scale(1.1);
        transition: transform .5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        z-index: 20;
        opacity: 0.8;
      }
  
      .collection-item__button {
        display: block;
        opacity: 0.85;
      }
    }

    @media screen and (max-width: 800px) {
      width: 40vw;
    }
`;

export const CollectionItemImage = styled.div`
width: 100%;
      height: 90%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      margin-bottom: 5px;
`;

export const CollectionItemButton = styled(CustomButton)`
opacity: 0.7;
width: 70%;
position: absolute;
top: 200px;
z-index: 200;
display: none;

@media screen and (max-width: 800px) {
  display: block;
  opacity: 0.9;
  minimum-width: unset;
  padding: 0 10px;
  border: solid 1px #777;
  margin-top: 5px
}
`;