import Container from '../../global/Container';
import { StyledBadges } from './styled';
import Image from 'next/image';
import ps5 from '../../../../../public/home/badges/ps5.svg';
import ps4 from '../../../../../public/home/badges/ps4.svg';
import psp from '../../../../../public/home/badges/psp.svg';

export default function Badges() {
  return (
    <Container>
      <StyledBadges>
        <Image width="auto" height="auto" src={ps5} alt="PS5" />
        <Image width="auto" height="auto" src={ps4} alt="PS4" />
        <Image width="auto" height="auto" src={psp} alt="PSP" />
      </StyledBadges>
    </Container>
  );
}
