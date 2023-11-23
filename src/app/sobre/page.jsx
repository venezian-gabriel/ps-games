'use client';
import Navbar from '../components/global/Navbar';
import Container from '../components/global/Container';
import { StyledAbout, Pillars, Pillar } from './styled';
import Image from 'next/image';
import mission from '../../../public/about/mission.svg';
import vision from '../../../public/about/vision.svg';
import values from '../../../public/about/values.svg';
import WhatsAppCTA from '../components/global/WhatsAppCTA';
import Footer from '../components/global/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <Container>
        <StyledAbout>
          <h1>Sobre a PS Games</h1>
          <Pillars>
            <Pillar>
              <h2>
                <Image src={mission} width="auto" height="auto" alt="Mission" />
                Missão
              </h2>
              <p>
                Nossa missão é proporcionar aos jogadores uma jornada única de
                compra, troca e interação.
              </p>
              <p>
                Nos comprometemos a oferecer uma ampla gama de jogos, desde os
                lançamentos mais recentes até clássicos atemporais, promovendo a
                troca de jogos usados e proporcionando aos nossos clientes a
                oportunidade de economizar enquanto exploram novos títulos.
              </p>
            </Pillar>
            <Pillar>
              <h2>
                <Image src={vision} width="auto" height="auto" alt="Vision" />
                Visão
              </h2>
              <p>
                Vislumbramos um universo onde todos os jogadores de PlayStation
                têm acesso fácil e conveniente a uma vasta seleção de jogos
                novos e usados.
              </p>
              <p>
                Almejamos criar uma comunidade vibrante, conectando pessoas e
                oferecendo experiências excepcionais por meio de produtos de
                qualidade, atendimento personalizado e inovação constante.
              </p>
            </Pillar>
            <Pillar>
              <h2>
                <Image src={values} width="auto" height="auto" alt="Values" />
                Valores
              </h2>
              <ul>
                <li>
                  <strong>Paixão pelo Jogo:</strong> Somos apaixonados por
                  videogames e compartilhamos essa paixão com nossos clientes.
                  Estamos dedicados a proporcionar experiências que vão além da
                  simples transação comercial.
                </li>
                <li>
                  <strong>Conveniência e Variedade:</strong> Valorizamos a
                  conveniência e a variedade. Nosso compromisso é oferecer um
                  processo de compra descomplicado e uma seleção diversificada
                  de jogos para atender a todos os gostos e preferências.
                </li>
                <li>
                  <strong>Transparência e Confiança:</strong> Construímos nossa
                  empresa com base na transparência e na confiança. Queremos que
                  nossos clientes sintam-se seguros ao fazer negócios conosco,
                  sabendo que serão tratados com respeito e integridade.
                </li>
                <li>
                  <strong>Inovação Contínua:</strong> Buscamos constantemente
                  inovação para aprimorar a experiência do cliente. Estamos
                  atentos às tendências do mercado de jogos e comprometidos em
                  oferecer soluções inovadoras que atendam às necessidades em
                  constante evolução de nossa comunidade.
                </li>
              </ul>
            </Pillar>
          </Pillars>

          <h4>Política de Compra e Troca</h4>
          <p>
            Na PS Games, entendemos a importância da transparência e queremos
            garantir que nossos clientes tenham uma experiência positiva em
            todas as transações.
          </p>
          <p>Abaixo estão os detalhes de nossa política de compra e troca:</p>
          <ul>
            <li>
              <p>
                <b>Trocas de jogos:</b> Aceitamos trocas de jogos usados,
                proporcionando uma maneira econômica e sustentável para os
                jogadores expandirem suas bibliotecas.
              </p>
              <p>
                No entanto, ressaltamos que as trocas estão sujeitas à avaliação
                prévia do estado de conservação dos jogos. Pedimos aos clientes
                que forneçam informações precisas sobre o estado de seus jogos
                durante o processo de negociação.
              </p>
            </li>
            <li>
              <p>
                <b>Envio e responsabilidade:</b> O envio dos jogos para troca é
                de responsabilidade do comprador. Recomendamos que os jogos
                sejam embalados com cuidado para garantir que cheguem em
                condições adequadas para avaliação. Reforçamos que os custos e
                riscos associados ao envio são assumidos pelo remetente.
              </p>
              <p>
                Estamos comprometidos em tornar o processo de troca o mais
                transparente e eficiente possível, proporcionando uma
                experiência positiva para todos os nossos clientes. Para obter
                mais detalhes sobre nossa política de compra e troca, não hesite
                em entrar em contato com nossa equipe de atendimento ao cliente
                via WhatsApp ou através de nosso website.
              </p>
            </li>
          </ul>
        </StyledAbout>
      </Container>
      <WhatsAppCTA />
      <Footer />
    </>
  );
}
