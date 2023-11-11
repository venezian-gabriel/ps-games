import styled from 'styled-components';

export const StyledShoppingInfo = styled.section`
  inline-size: 100%;
  background: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  block-size: 36rem;

  div:nth-child(2) {
    border-inline: 1px solid #e2e2e2;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-inline-size: 40rem;
  block-size: 20rem;
  padding-inline: 4rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.4;
  }

  p {
    font-size: 1.6rem;
    margin-block-start: 0.4rem;
  }
`;
