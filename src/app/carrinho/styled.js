import styled from 'styled-components';

export const Container = styled.div`
  inline-size: 120rem;
  margin-inline: auto;
  background: #fff;
  margin-block: 8rem;
  padding: 4rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  min-block-size: calc(100vh - 43.8rem);
  display: flex;
  flex-direction: column;

  & > a {
    font-size: 1.4rem;
    color: #2d1060;
    text-align: right;
    margin-block-end: 1.2rem;
  }
`;

export const Product = styled.div`
  & > a:first-child {
    border-block-start: 0.1rem solid rgba(0, 0, 0, 0.1);
  }

  & > a {
    display: flex;
    align-items: center;
    border-block-end: 0.1rem solid rgba(0, 0, 0, 0.1);
    padding-block: 2rem;
  }

  a h4 {
    min-inline-size: fit-content;
    margin-inline-start: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }

  a > div {
    display: flex;
    inline-size: 100%;
    justify-content: flex-end;
    gap: 4rem;

    a {
      font-size: 1.4rem;
      color: #2d1060;
    }

    p {
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
`;

export const Total = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.55);
  inline-size: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-block-end: 0.1rem solid rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    justify-content: flex-end;
    gap: 4rem;
    color: #1a1a1a;
    font-size: 2.4rem;
    font-weight: 500;
    padding-block: 4rem;
  }
`;

export const CTAS = styled.div`
  padding-block-start: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;

  a:first-child {
    font-size: 1.4rem;
    color: #2d1060;
  }

  a:nth-child(2) {
    border-radius: 1rem;
    font-size: 1.6rem;
    text-align: center;
    padding-block: 1.4rem;
    font-weight: 600;
    color: #fff;
    background: #2d1060;
    padding-inline: 2rem;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  h4 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-block-end: 1.2rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.55);
    margin-block-end: 2rem;
  }

  a {
    border-radius: 1rem;
    font-size: 1.6rem;
    text-align: center;
    padding-block: 1.4rem;
    font-weight: 600;
    color: #fff;
    background: #2d1060;
    inline-size: 14.8rem;
  }
`;
