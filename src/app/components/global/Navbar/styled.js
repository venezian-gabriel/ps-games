import styled from 'styled-components';

export const ShippingInfo = styled.div`
  inline-size: 100%;
  background: #000;
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
  padding-block: 1.2rem;
  line-height: 1;
`;

export const Wrapper = styled.div`
  inline-size: 100%;
  background: #2d1060;
  block-size: 14rem;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  ul:nth-child(2) {
    li {
      list-style: none;
      color: #fff;
      position: relative;

      a {
        display: flex;
        block-size: 2.5rem;
      }

      &:hover::after {
        content: '';
        position: absolute;
        block-size: 0.1rem;
        inline-size: 100%;
        background: #fff;
        inset-block-end: -0.1rem;
        inset-inline-start: 0;
      }
    }
  }
`;

export const Ctas = styled.ul`
  display: flex;
  column-gap: 2.4rem;

  li:nth-child(2) {
    position: relative;

    span {
      position: absolute;
      color: #fff;
      inset-block-start: -0.8rem;
      inset-inline-end: -1.4rem;
      font-size: 1rem;
      border: 1px solid #fff;
      border-radius: 50%;
      block-size: 1.6rem;
      inline-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
    }
  }
`;
