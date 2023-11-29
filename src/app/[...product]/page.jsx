'use client';
import { useEffect, useState } from 'react';
import gameCatalog from '../gameCatalog';
import { useRouter } from 'next/navigation';
import Navbar from '../components/global/Navbar';
import { Container, ProductInfo, BuyBox } from './styled';
import WhatsAppCTA from '../components/global/WhatsAppCTA';
import Footer from '../components/global/Footer';
import Image from 'next/image';
import convertToBrazilianCurrency from '@/app/utils/convertToBrazilianCurrency';
import generateInstallmentValue from '@/app/utils/generateInstallmentValue';
import Link from 'next/link';

export default function Product() {
  const [product, setProduct] = useState(null);
  const router = useRouter();

  const findProduct = (link) => {
    const product = gameCatalog.find((game) => game.link === link);
    if (product) setProduct(product);
    else router.replace('/404');
  };

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  useEffect(() => {
    const link = window.location.pathname;
    findProduct(link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product) {
    return (
      <>
        <Navbar />
        <Container>
          <Image
            src={product.img}
            width="auto"
            height="auto"
            alt={product.title}
          />
          <ProductInfo>
            <span>{product.label ? capitalize(product.label) : 'Novo'}</span>
            <h1>{product.title}</h1>
            <h2>{convertToBrazilianCurrency(product.price)}</h2>
            <h3>{`em 12x de ${generateInstallmentValue(product.price)}`}</h3>
            <p>Formato: Físico</p>
            <p>Plataforma: {product.platform}</p>
            <h4>O que você precisa saber sobre este produto:</h4>
            <ul>
              {product.about.map(
                (additionalInformation, additionalInformationIndex) => (
                  <li key={additionalInformationIndex}>
                    {additionalInformation}
                  </li>
                )
              )}
            </ul>
          </ProductInfo>
          <BuyBox>
            <Link href="/sobre">Política de troca</Link>
            <p>1 mês de garantia</p>
            <p>Envio para todo o país</p>
            <div className="ctas">
              <Link
                href={`https://api.whatsapp.com/send?phone=5519996618086&text=Ol%C3%A1,%20visitei%20o%20site%20da%20PS%20Games%20e%20tenho%20interesse%20em%20adquirir%20o%20seguinte%20jogo:%0A%0Ahttps://ps-games.vercel.app${product.link}`}
                target="_blank"
              >
                Comprar
              </Link>
              <Link href="#">Adicionar ao carrinho</Link>
            </div>
          </BuyBox>
        </Container>
        <WhatsAppCTA />
        <Footer />
      </>
    );
  }
}
