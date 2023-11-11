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

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Ctas = styled.ul`
  display: flex;
  column-gap: 2.4rem;

  li {
    list-style: none;
    color: #fff;
    cursor: pointer;
  }
`;
