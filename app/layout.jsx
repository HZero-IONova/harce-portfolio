import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono-monospace",
  subsets: ["latin"],
});

export const metadata = {
  title: "Powerful Automations | H. Arce",
  description: "Clarity. Excellence. High-Impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
