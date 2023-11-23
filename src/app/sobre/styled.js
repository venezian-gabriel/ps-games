import styled from 'styled-components';

export const StyledAbout = styled.section`
  margin-block: 8rem;

  h1 {
    margin-block-end: 2.4rem;
  }

  h2 {
    display: flex;
    column-gap: 0.8rem;
    align-items: center;
    font-weight: 400;
    margin-block-end: 1.8rem;
  }

  h1,
  h2,
  h4 {
    color: #0072b7;
    text-transform: uppercase;
  }

  h4 {
    margin-block-start: 4rem;
    margin-block-end: 1.2rem;
  }

  p {
    line-height: 1.6;
  }
`;

export const Pillars = styled.article`
  display: grid;
  grid-template-columns: auto auto;
  gap: 3.2rem;
  margin-block-start: 4rem;

  div:nth-child(3) {
    grid-column: 1 / -1;
  }
`;

export const Pillar = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  block-size: fit-content;

  img {
    block-size: 3.2rem;
    inline-size: 3.2rem;
  }
`;
