import { Layout } from "@/app/_components/Layout/Layout";
import "@/app/_styles/globals.css";
import { ThemeModeScript } from "flowbite-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
