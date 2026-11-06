import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brasil Regencial — Um território, muitas histórias',
  description: 'Uma experiência digital para explorar o Brasil entre 1831 e 1840, com contexto histórico e transparência de fontes.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
