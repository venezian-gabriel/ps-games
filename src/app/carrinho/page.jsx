'use client';
import { useCart } from '../context/Cart/CartContext';
import Navbar from '../components/global/Navbar';
import { Container, Product, Total, CTAS, EmptyCart } from './styled';
import WhatsAppCTA from '../components/global/WhatsAppCTA';
import Footer from '../components/global/Footer';
import Link from 'next/link';
import Image from 'next/image';
import capitalize from '../utils/capitalize';
import convertToBrazilianCurrency from '../utils/convertToBrazilianCurrency';

export default function Cart() {
  const { cart, clearCart, removeFromCart } = useCart();

  const removeAllProductsFromCart = (e) => {
    e.preventDefault();
    clearCart();
  };

  const removeProductFromCart = (e, link) => {
    e.preventDefault();
    removeFromCart(link);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
    return convertToBrazilianCurrency(totalPrice);
  };

  const getProductLinks = () => {
    let productLinks = '';
    cart.forEach(
      (product) =>
        (productLinks += `%0Ahttps://ps-games.vercel.app${product.link}`)
    );
    return productLinks;
  };

  return (
    <>
      <Navbar />
      <Container>
        {cart.length ? (
          <>
            <Link href="/" onClick={(e) => removeAllProductsFromCart(e)}>
              Esvaziar carrinho
            </Link>
            <Product>
              {cart.map(
                ({ link, img, title, platform, label, price }, index) => (
                  <Link href={link} key={index}>
                    <Image src={img} width={120} height="auto" alt={title} />
                    <h4>
                      {title} - {platform} ({label ? capitalize(label) : 'Novo'}
                      )
                    </h4>
                    <div>
                      <Link
                        href=""
                        onClick={(e) => removeProductFromCart(e, link)}
                      >
                        Excluir
                      </Link>
                      <p>{convertToBrazilianCurrency(price)}</p>
                    </div>
                  </Link>
                )
              )}
            </Product>
            <Total>
              <p>
                O frete está sujeito ao peso do produto e distância de envio.
                Verifique o custo entrando em contato através do WhatsApp.
              </p>
              <div>
                <p>Total</p>
                <p>{calculateTotalPrice()}</p>
              </div>
            </Total>
            <CTAS>
              <Link href="/">Escolher mais produtos</Link>
              <Link
                href={`https://api.whatsapp.com/send?phone=5519996618086&text=Ol%C3%A1,%20visitei%20o%20site%20da%20PS%20Games%20e%20tenho%20interesse%20em%20adquirir%20o(s)%20seguinte(s)%20jogo(s):%0A${getProductLinks()}`}
                className="cta"
                target="_blank"
              >
                Finalizar compra
              </Link>
            </CTAS>
          </>
        ) : (
          <EmptyCart>
            <h4>Seu carrinho está vazio</h4>
            <p>Comece adicionando seus jogos favoritos</p>
            <Link href="/">Ir às compras</Link>
          </EmptyCart>
        )}
      </Container>
      <WhatsAppCTA />
      <Footer />
    </>
  );
}
