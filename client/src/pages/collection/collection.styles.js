import styled from "styled-components";

export const CollectionPage = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  text-transform: uppercase;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  &.collection-item {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
  }
`;
