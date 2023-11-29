import styled from 'styled-components';

export const Container = styled.div`
  inline-size: 120rem;
  margin-inline: auto;
  background: #fff;
  margin-block: 8rem;
  padding: 4rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  place-self: center;

  span {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.4);
    font-weight: 400;
    line-height: 1.4;
    display: block;
    margin-block-end: 0.8rem;
  }

  h1 {
    color: rgba(0, 0, 0, 0.9);
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.18;
    margin-block-end: 2.8rem;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 1;
    color: #000000;
    font-weight: 300;
    margin-block-end: 0.8rem;
  }

  h3 {
    font-size: 1.8rem;
    line-height: 1;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.9);
    margin-block-end: 2.8rem;
  }

  p {
    font-size: 1.6rem;
    margin-block-end: 0.4rem;
    font-weight: 300;
  }

  h4,
  ul {
    font-size: 1.4rem;
    line-height: 1;
  }

  h4 {
    margin-block-start: 2.8rem;
    font-weight: 400;
  }

  ul {
    font-weight: 300;
    list-style: inside;
    margin-block-start: 1.4rem;

    li + li {
      margin-block-start: 0.8rem;
    }
  }
`;

export const BuyBox = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-self: flex-end;
  font-size: 1.4rem;

  a {
    color: #2d1060;
  }

  .ctas {
    display: flex;
    gap: 0.8rem;
    flex-direction: column;
    margin-block-start: 0.8rem;

    a {
      inline-size: 24rem;
      border-radius: 1rem;
      font-size: 1.6rem;
      text-align: center;
      padding-block: 1.4rem;
      font-weight: 600;
    }

    a:first-child {
      color: #fff;
      background: #2d1060;
    }

    a:nth-child(2) {
      background: #fff;
      border: 0.2rem solid #2d1060;
      margin-block-end: 2.3rem;
    }
  }
`;
