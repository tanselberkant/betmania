import '../../../styles/globals.css';

export const metadata = {
  title: 'BetsOrbit | Login',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
