import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import assassins from '../../../../../public/home/hero/assassins.jpg';
import ufc5 from '../../../../../public/home/hero/ufc5.jpg';
import fc24 from '../../../../../public/home/hero/fc24.jpg';
import spiderman2 from '../../../../../public/home/hero/spiderman2.jpg';

export default function Hero() {
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        keyboard={true}
        loop={true}
        modules={[Pagination, Navigation, Keyboard, Autoplay]}
        slidesPerView="auto"
        className="hero"
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <Link href="/ps5/assassins-creed-mirage">
            <Image
              width="auto"
              height="auto"
              src={assassins}
              alt="Assassins Creed Mirage"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/ps5/ufc-5">
            <Image width="auto" height="auto" src={ufc5} alt="UFC 5" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/ps5/fc-24">
            <Image width="auto" height="auto" src={fc24} alt="FC 24" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/ps5/spider-man-2">
            <Image
              width="auto"
              height="auto"
              src={spiderman2}
              alt="Spider-Man 2"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
