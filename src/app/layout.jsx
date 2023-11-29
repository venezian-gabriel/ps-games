import { Inter } from 'next/font/google';
import { CartProvider } from './context/Cart/CartContext';
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
        <CartProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </CartProvider>
      </body>
    </html>
  );
}
