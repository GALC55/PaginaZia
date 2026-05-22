import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { QueryProvider } from "@/components/QueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZIA · Medicina Estética y Regenerativa",
  description:
    "Medicina estética y regenerativa con resultados naturales. Tratamientos personalizados en Bogotá.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3a1820",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,400;1,6..96,500&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#top" className="skip-link">Saltar al contenido</a>
        <QueryProvider>{children}</QueryProvider>
        <Toaster
          position="bottom-center"
          duration={4200}
          closeButton
          richColors={false}
          theme="light"
          toastOptions={{
            className: "zia-toast",
            style: {
              background: "var(--wine)",
              color: "var(--cream)",
              border: "1px solid color-mix(in oklch, var(--gold) 55%, transparent)",
              borderRadius: "2px",
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "16px 22px",
              boxShadow: "0 24px 48px -24px oklch(0% 0 0 / 0.45)",
            },
          }}
        />
      </body>
    </html>
  );
}
