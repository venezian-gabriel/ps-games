import Container from "../../global/Container";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gameCatalog from "@/app/gameCatalog";
import Link from "next/link";
import { Card, Information, Label } from "./styled";
import Image from "next/image";

export default function Games() {
  const convertToBrazilianCurrency = (value) => {
    return value
      .toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
      .replace(",00", "");
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
        {gameCatalog.map((game, index) => (
          <SwiperSlide key={index}>
            <Link href={game.link}>
              <Card>
                {game.label && <Label>{game.label}</Label>}
                <Image
                  width="auto"
                  height="auto"
                  src={game.img}
                  alt={game.title}
                />
                <Information>
                  <s>
                    {game.originalPrice &&
                      convertToBrazilianCurrency(game.originalPrice)}
                  </s>
                  <p className="price">
                    {convertToBrazilianCurrency(game.price)}
                  </p>
                  <p className="installments">
                    {`12x ${generateInstallmentValue(game.price)}`}
                  </p>
                  <p>{game.title}</p>
                  <p className="platform">{game.platform}</p>
                </Information>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
