import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-block: 8rem;
  block-size: 20rem;
  background-color: #e6e6e6;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  path {
    fill: #fff;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 1.6rem;
      line-height: 1;
      font-weight: 600;
    }

    p {
      color: #6a6c6e;
      font-size: 1.4rem;
      line-height: 1;
      margin-block-start: 0.4rem;
    }
  }
`;
