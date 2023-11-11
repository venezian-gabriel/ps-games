import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './registry';
import GlobalStyles from './styles/GlobalStyles';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'PS Games',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
