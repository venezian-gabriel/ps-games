import styled from "styled-components";
import Link from "next/link";

export const WhatsApp = styled(Link)`
  background: #4dc247;
  display: block;
  block-size: 5rem;
  inline-size: 5rem;
  border-radius: 50%;
  position: fixed;
  inset-block-end: 2.4rem;
  inset-inline-end: 2.4rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
