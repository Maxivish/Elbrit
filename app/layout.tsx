// layout.tsx
import './styles/globals.css';

export const metadata = {
  title: 'Essential Vitamins - Landing Page',
  description: 'A responsive landing page for Essential Vitamins',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
