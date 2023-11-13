import styled from 'styled-components';

export const Card = styled.div`
  block-size: 40rem;
  inline-size: 22.4rem;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  img {
    padding: 1.2rem;
    block-size: 24rem;
    inline-size: auto;
  }
`;

export const Information = styled.div`
  padding-inline: 2.4rem;
  padding-block: 1.4rem;
  border-block-start: 0.1rem solid #ebebeb;

  s,
  p {
    font-size: 1.4rem;
    line-height: 1;
  }

  .price {
    font-size: 2rem;
    color: #000;
    margin-block: 1rem;
  }

  .installments {
    margin-block-end: 1.4rem;
  }

  .platform {
    margin-block-start: 1rem;
  }
`;
