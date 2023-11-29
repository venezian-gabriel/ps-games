import { WhatsApp } from './styled';
import Image from 'next/image';
import whatsapp from '../../../../../public/global/whatsapp/whatsapp.svg';

export default function WhatsAppCTA() {
  return (
    <WhatsApp
      href="https://api.whatsapp.com/send?phone=5519996618086&text=Ol%C3%A1,%20visitei%20o%20site%20da%20PS%20Games%20e%20tenho%20interesse%20nos%20seguintes%20jogos..."
      target="_blank"
    >
      <Image width="auto" height="auto" src={whatsapp} alt="WhatsApp" />
    </WhatsApp>
  );
}
