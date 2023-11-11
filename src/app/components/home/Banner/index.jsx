import Container from '../../global/Container';
import { Wrapper, Information } from './styled';
import Image from 'next/image';
import shipping from '../../../../../public/home/banner/shipping.svg';
import discount from '../../../../../public/home/banner/discount.svg';
import card from '../../../../../public/home/banner/card.svg';
import certificate from '../../../../../public/home/banner/certificate.svg';

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <Information>
          <Image width="auto" height="auto" src={shipping} alt="Entrega" />
          <div>
            <h4>FRETE GRÁTIS</h4>
            <p>Se você for de Araras</p>
          </div>
        </Information>
        <Information>
          <Image width="auto" height="auto" src={discount} alt="Descontos" />
          <div>
            <h4>GANHE DESCONTOS</h4>
            <p>10% em pré-vendas</p>
          </div>
        </Information>
        <Information>
          <Image
            width="auto"
            height="auto"
            src={card}
            alt="Cartão de crédito"
          />
          <div>
            <h4>ATÉ 12X NO CARTÃO</h4>
            <p>Parcele no cartão de crédito</p>
          </div>
        </Information>
        <Information>
          <Image
            width="auto"
            height="auto"
            src={certificate}
            alt="Certificado"
          />
          <div>
            <h4>LOJA SEGURA</h4>
            <p>Certificado SSL</p>
          </div>
        </Information>
      </Wrapper>
    </Container>
  );
}
