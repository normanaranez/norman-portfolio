import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import clsx from "clsx";
import { WelcomeScreen } from "@/components/common/welcome-screen";

const fontFamily = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Norman Aranez - Software Developer Portfolio",
  description: "Welcome to Norman Aranez's portfolio! Explore my projects showcasing expertise in software development, including frontend and backend technologies. Let's collaborate on building innovative solutions together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(fontFamily.className, 'relative h-screen flex flex-col')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WelcomeScreen />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
