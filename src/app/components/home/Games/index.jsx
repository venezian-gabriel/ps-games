import Container from '../../global/Container';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { Card, Information } from './styled';
import Image from 'next/image';
import mk1 from '../../../../../public/global/games/mk1.jpg';

export default function Games() {
  const convertToBrazilianCurrency = (value) => {
    return value
      .toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
      .replace(',00', '');
  };

  const generateInstallmentValue = (value) => {
    return convertToBrazilianCurrency(value / 10);
  };

  return (
    <Container>
      <Swiper
        navigation={true}
        keyboard={true}
        loop={true}
        modules={[Navigation]}
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={20}
        className="games"
      >
        <SwiperSlide>
          <Link href="/ps5/mortal-kombat-1">
            <Card>
              <Image
                width="auto"
                height="auto"
                src={mk1}
                alt="Mortal Kombat 1"
              />
              <Information>
                <s>{convertToBrazilianCurrency(315)}</s>
                <p className="price">{convertToBrazilianCurrency(289)}</p>
                <p className="installments">
                  12x {generateInstallmentValue(289)}
                </p>
                <p>Mortal Kombat 1</p>
                <p className="platform">PS5</p>
              </Information>
            </Card>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
