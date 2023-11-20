import styled from "styled-components";

export const Card = styled.div`
  block-size: 39.2rem;
  inline-size: 22.4rem;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    padding: 1.2rem;
    block-size: 24rem;
    inline-size: auto;
  }
`;

export const Label = styled.span`
  position: absolute;
  font-size: 1.2rem;
  line-height: 1;
  color: #fff;
  padding: 0.8rem;
  border-radius: 1rem;
  background-color: #0072b7;
  inset-block-start: 1rem;
  inset-inline-end: 1rem;
`;

export const Information = styled.div`
  padding-inline: 2.4rem;
  padding-block: 1.4rem;
  border-block-start: 0.1rem solid #ebebeb;

  s {
    display: block;
    block-size: 1.7rem;
  }

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
