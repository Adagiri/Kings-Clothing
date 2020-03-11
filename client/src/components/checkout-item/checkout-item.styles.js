import styled from 'styled-components';

export const CheckoutItemComp = styled.div`
width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
width: 22%;
padding-top: 5px;
padding-right: 15px;
margin-left: 0px;
margin-right: 7px;
img {
  width: 100%;
  height: 100%;
}
`;


export const Arrow = styled.div`
cursor: pointer;
`;


export const Value = styled.span`
margin: 0 10px;
`;


export const Name = styled.span`
width: 23%;

`;

export const Quantity = styled.span`
padding-left: 20px;
width: 23%;
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }

    @media screen and (max-width: 800px){
        padding-left: unset;
    }
`;

export const Price = styled.span`
width: 23%;
`;

export const RemoveButton = styled.div`
padding-left: 12px;
cursor: pointer;
`;


