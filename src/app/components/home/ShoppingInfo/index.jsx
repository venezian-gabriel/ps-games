import { StyledShoppingInfo, Wrapper, InfoCard } from './styled';
import Container from '../../global/Container';
import Image from 'next/image';
import products from '../../../../../public/home/shoppingInfo/products.svg';
import payment from '../../../../../public/home/shoppingInfo/payment.svg';
import shipping from '../../../../../public/home/shoppingInfo/shipping.svg';

export default function ShoppingInfo() {
  return (
    <StyledShoppingInfo>
      <Container>
        <Wrapper>
          <InfoCard>
            <Image src={products} width="auto" height="auto" alt="Produtos" />
            <h2>Escolha os jogos que deseja comprar</h2>
            <p>
              Se quiser mais de um, basta adicionar <br />
              ao seu carrinho.
            </p>
          </InfoCard>
          <InfoCard>
            <Image
              src={payment}
              width="auto"
              height="auto"
              alt="Formas de pagamento"
            />
            <h2>Pague usando cartão, pix ou boleto</h2>
            <p>
              Compre e troque seus jogos <br />
              com segurança.
            </p>
          </InfoCard>
          <InfoCard>
            <Image src={shipping} width="auto" height="auto" alt="Entrega" />
            <h2>Receba o produto conforme o esperado</h2>
            <p>
              Nós garantimos o prazo <br />
              de entrega.
            </p>
          </InfoCard>
        </Wrapper>
      </Container>
    </StyledShoppingInfo>
  );
}
