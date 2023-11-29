import { ShippingInfo, Wrapper, Nav, Ctas } from './styled';
import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../../public/global/logo/logo.svg';
import emailIcon from '../../../../../public/global/navbar/email.svg';
import cartIcon from '../../../../../public/global/navbar/cart.svg';
import { useCart } from '@/app/context/Cart/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <>
      <ShippingInfo>
        Frete <b>grátis</b> para a cidade de <strong>Araras</strong>
      </ShippingInfo>
      <Wrapper>
        <Container>
          <Nav>
            <Link href="/">
              <Image width="auto" height="auto" src={logo} alt="PS Games" />
            </Link>
            <Ctas>
              <li>
                <Link href="/sobre">SOBRE</Link>
              </li>
            </Ctas>
            <Ctas>
              <li>
                <Link href="mailto:gabriel.venezian@hotmail.com?subject=Atendimento PS Games&body=Olá, visitei o site da PS Games e tenho interesse nos seguintes jogos...">
                  <Image
                    width="auto"
                    height="auto"
                    src={emailIcon}
                    alt="Email"
                  />
                </Link>
              </li>
              <li>
                <Link href="/carrinho">
                  <Image
                    width="auto"
                    height="auto"
                    src={cartIcon}
                    alt="Carrinho"
                  />
                  {cart.length > 0 && <span>{cart.length}</span>}
                </Link>
              </li>
            </Ctas>
          </Nav>
        </Container>
      </Wrapper>
    </>
  );
}
