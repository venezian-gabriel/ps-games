import { StyledFooter, Wrapper } from './styled';
import Container from '../Container';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../../public/global/logo/logo.svg';
import facebook from '../../../../../public/global/footer/facebook.svg';
import instagram from '../../../../../public/global/footer/instagram.svg';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Image src={logo} width={67} height={23} alt="PS Games" />
          <div>
            <Link
              href="https://www.facebook.com/gabriel.venezian/"
              target="_blank"
            >
              <Image src={facebook} width="auto" height="auto" alt="Facebook" />
            </Link>
            <Link
              href="https://www.instagram.com/gah_venezian/"
              target="_blank"
            >
              <Image
                src={instagram}
                width="auto"
                height="auto"
                alt="Instagram"
              />
            </Link>
          </div>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
}
