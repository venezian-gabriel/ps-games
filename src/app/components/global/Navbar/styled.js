import styled from 'styled-components';

export const ShippingInfo = styled.div`
  inline-size: 100%;
  background: #000;
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
  padding-block: 0.8rem;
  line-height: 1;
`;

export const Wrapper = styled.div`
  inline-size: 100%;
  background: #2d1060;
  block-size: 14rem;
  display: flex;
  align-items: center;
`;

export const Ctas = styled.ul`
  display: flex;
  column-gap: 2.4rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  ul:nth-child(2) {
    li {
      list-style: none;
      color: #fff;
      position: relative;

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
